<template>
  <el-form
    v-bind="$attrs"
    ref="leaseForm"
    @submit.prevent
    :model="modelObject"
    :rules="rules"
    :inline="inline"
    :size="size"
  >
    <slot
      v-for="{
        key,
        prop,
        label,
        type,
        slot,
        name,
        ItemRules,
        error,
        style,
        inputOption,
        radioOption,
        selectOption,
        checkBoxOption,
        datePickerOption,
        switchOption,
      } in Header"
      :key="key ?? prop"
      :name="slot ?? name ?? key"
    >
      <el-form-item :key="key ?? prop" :prop="prop" :label="label" :rules="ItemRules" :error="error" :style="style">
        <template v-if="['input', 'textarea'].includes(type) && inputOption">
          <el-input
            v-model="modelObject[prop ?? key]"
            :type="inputOption?.type || 'text'"
            :maxlength="inputOption?.maxlength ?? 500"
            :min="inputOption?.min ?? -100"
            :max="inputOption?.max ?? 999"
            :autosize="(inputOption?.type == 'textarea' && inputOption?.autoSize) || true"
            :clearable="inputOption?.clearable || true"
            :placeholder="inputOption?.placeholder"
          ></el-input>
        </template>
        <template v-if="['radio', 'radioGroup'].includes(type) && radioOption">
          <el-radio-group
            v-model="modelObject[prop ?? key]"
            :disabled="radioOption?.disabled"
            :size="radioOption?.size"
          >
            <el-radio
              v-for="radioItem in radioOption?.list"
              :key="radioItem.value"
              :label="radioItem.label"
              :disabled="radioItem?.disabled"
              >{{ radioItem.value }}</el-radio
            >
          </el-radio-group>
        </template>
        <template v-if="['select', 'selectGroup'].includes(type) && selectOption">
          <el-select
            v-model="modelObject[prop ?? key]"
            :disabled="selectOption?.disabled"
            :size="selectOption?.size"
            :placeholder="selectOption?.placeholder"
            clearable
            :multiple="selectOption?.multiple"
          >
            <el-option
              v-for="selectItem in selectOption.list"
              :key="selectItem.value"
              :label="selectItem.label"
              :value="selectItem.value"
              :disabled="selectItem?.disabled"
            />
          </el-select>
        </template>
        <template v-if="['checkBox', 'checkBoxGroup'].includes(type) && checkBoxOption">
          <el-checkbox-group
            v-model="modelObject[prop ?? key]"
            :disabled="selectOption?.disabled"
            :size="selectOption?.size"
          >
            <el-checkbox
              v-for="checkBoxItem in checkBoxOption.list"
              :key="checkBoxItem.value"
              :label="checkBoxItem.label"
              :value="checkBoxItem.value"
              :disabled="checkBoxItem?.disabled"
            />
          </el-checkbox-group>
        </template>
        <template v-if="['datePicker', 'datePickerWithTime'].includes(type) && datePickerOption">
          <el-date-picker
            v-model="modelObject[prop ?? key]"
            :disabled="datePickerOption?.disabled"
            :size="datePickerOption?.size"
            :placeholder="datePickerOption?.placeholder"
            :format="datePickerOption?.format"
            :value-format="datePickerOption?.valueFormat"
            clearable
          />
        </template>
        <template v-if="['switch'].includes(type) && switchOption">
          <el-switch
            v-model="modelObject[prop ?? key]"
            :disabled="switchOption?.disabled"
            :active-value="switchOption?.activeValue || true"
            :inactive-value="switchOption?.unActiveValue || false"
            :size="switchOption?.size"
            :width="switchOption?.width"
          />
        </template>
      </el-form-item>
    </slot>
  </el-form>
  <div class="lease-submit" v-if="hasAction">
    <slot name="submit" v-if="$slots.submit"></slot>
    <div v-else class="submit-btn">
      <Button @click="handleSubmit(leaseForm)" :loading="submitLoading">{{ submitText }}</Button>
      <Button @click="handleCancel(leaseForm)" :loading="cancelLoading">{{ cancelText }}</Button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, reactive, toRefs, onMounted, watchEffect, defineExpose, watch } from 'vue';
import { FormInstance, FormItemRule, FormRules } from 'element-plus';
import Button from '../Button/index.vue';
interface InputOption {
  type: 'text' | 'number' | 'radio' | 'password' | 'textarea';
  disabled?: boolean;
  min?: number | undefined;
  max?: number | undefined;
  clickFunction?: Function;
  maxlength?: number;
  placeholder?: string | undefined;
  formatter?: Function;
  parser?: Function;
  showPassword?: boolean;
  autoSize?: boolean;
  clearable?: boolean;
}
interface RadioOption {
  list: {
    label: string;
    value: string;
    disabled?: boolean;
    border?: boolean;
  }[];
  disabled?: boolean;
  size?: 'large' | 'default' | 'small';
}
interface SelectOption {
  list: {
    label: string;
    value: string;
    disabled?: boolean;
    border?: boolean;
  }[];
  disabled?: boolean;
  multiple?: boolean;
  size?: 'large' | 'default' | 'small';
  placeholder?: string;
}
interface CheckBoxOption {
  list: {
    label: string;
    value: string;
    disabled?: boolean;
    border?: boolean;
  }[];
  disabled?: boolean;
  multiple?: boolean;
  size?: 'large' | 'default' | 'small';
  placeholder?: string;
}
interface DatePickerOption {
  disabled?: boolean;
  multiple?: boolean;
  size?: 'large' | 'default' | 'small';
  placeholder?: string;
  format?: string;
  valueFormat?: string;
}
interface SwitchOption {
  disabled?: boolean;
  size?: 'large' | 'default' | 'small';
  width?: number;
  activeValue?: string;
  unActiveValue?: string;
}
interface iOption {
  key: string;
  prop: string;
  label: string;
  type: 'input' | 'check' | 'select' | 'radio' | 'checkbox' | 'custom' | 'date' | 'switch';
  width?: string;
  slot?: string;
  name?: string;
  ItemRules?: FormItemRule[] | FormItemRule;
  error?: string;
  required?: boolean;
  size?: 'large' | 'default' | 'small';
  style?: string;
  inputOption?: InputOption;
  radioOption?: RadioOption;
  selectOption?: SelectOption;
  checkBoxOption?: CheckBoxOption;
  datePickerOption?: DatePickerOption;
  switchOption?: SwitchOption;
}

export default defineComponent({
  inheritAttrs: false,
  components: { Button },
  props: {
    header: {
      type: Array as PropType<iOption[]>,
      required: true,
    },
    modelValue: {
      type: Object as PropType<any>,
      default: () => {
        return {};
      },
    },
    hasAction: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Object as PropType<FormRules>,
      // required: true,
    },
    inline: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String as PropType<'small' | 'large' | 'default'>,
      default: 'small',
    },
    submitText: {
      type: String,
      default: '提交',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    validate: {
      type: Boolean,
      default: true,
    },
    submitLoading: {
      type: Boolean,
      default: false,
    },
    cancelLoading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'submit', 'cancel'],
  setup(props, ctx) {
    const { header, modelValue, validate } = toRefs(props);
    const Header = reactive(header.value as iOption[]);
    const leaseForm = ref<FormInstance>();
    const modelObject = reactive({});

    const initModelObject = () => {
      // 第一种，modelValue 有值  直接赋值
      if (modelValue.value && Object.keys(modelValue.value).length !== 0) {
        for (const key in modelValue.value) {
          if (Object.prototype.hasOwnProperty.call(modelValue.value, key)) {
            modelObject[key] = modelValue.value[key];
          }
        }
        // console.log(modelObject);
        return;
      }
      // 新建的时候直接赋值,不过要考虑类型
      for (let index = 0; index < Header.length; index++) {
        const { type, prop, key, inputOption, switchOption } = Header[index];
        if (!modelObject[prop ?? key]) {
          switch (type) {
            case 'select':
              modelObject[prop ?? key] = [];
              break;
            case 'checkbox':
              modelObject[prop ?? key] = [];
              break;
            case 'switch':
              modelObject[prop ?? key] = switchOption?.unActiveValue ? switchOption.unActiveValue : false;
              break;
            case 'input':
              if (inputOption?.type == 'number') {
                modelObject[prop ?? key] = 0;
              } else {
                modelObject[prop ?? key] = '';
              }
              break;
            default:
              modelObject[prop ?? key] = null;
              break;
          }
        }
      }
    };
    initModelObject();
    onMounted(() => {
      // 初始化自定义组件 model 值
      initModelObject();
    });
    const handleSubmit = (Form: FormInstance | undefined) => {
      if (validate.value) {
        // 开启校验
        if (!Form) return;
        Form.validate((val) => {
          if (!val) return;
          ctx.emit('submit', Form);
        });
      } else {
        ctx.emit('submit', Form);
      }
    };

    const handleCancel = (Form: FormInstance | undefined) => {
      if (!Form) return;
      Form.clearValidate();
      ctx.emit('cancel', Form);
    };
    // 导出供外部ref 调用
    // defineExpose({
    //   leaseForm,
    //   handleSubmit,
    //   handleCancel,
    // });
    watch(
      () => modelObject,
      (state, preState) => {
        // console.log(state, 'form');
        ctx.emit('update:modelValue', state);
      },
      { deep: true },
    );

    return {
      leaseForm,
      modelObject,
      Header,
      handleSubmit,
      handleCancel,
    };
  },
});
</script>
