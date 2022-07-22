import { FormItemRule } from 'element-plus';
export interface TableItem {
  key?: string
  prop: string
  label: string
  width?: string
  hidden?: string
  showTooltip?: boolean
  align?: string
  name?: string
  slot?: string
}
export interface InputOption {
  type: 'text' | 'number' | 'radio' | 'password' | 'textarea'
  disabled?: boolean
  min?: number | undefined
  max?: number | undefined
  clickFunction?: Function
  maxlength?: number
  placeholder?: string | undefined
  formatter?: Function
  parser?: Function
  showPassword?: boolean
  autoSize?: boolean
  clearable?: boolean
}
export interface RadioOption {
  list: {
    label: string
    value: string
    disabled?: boolean
    border?: boolean
  }[]
  disabled?: boolean
  size?: 'large' | 'default' | 'small'
}
export interface SelectOption {
  list: {
    label: string
    value: string
    disabled?: boolean
    border?: boolean
  }[]
  disabled?: boolean
  multiple?: boolean
  size?: 'large' | 'default' | 'small'
  placeholder?: string
}
export interface CheckBoxOption {
  list: {
    label: string
    value: string
    disabled?: boolean
    border?: boolean
  }[]
  disabled?: boolean
  multiple?: boolean
  size?: 'large' | 'default' | 'small'
  placeholder?: string
}
export interface DatePickerOption {
  disabled?: boolean
  multiple?: boolean
  size?: 'large' | 'default' | 'small'
  placeholder?: string
  format?: string
  valueFormat?: string
}
export interface SwitchOption {
  disabled?: boolean
  size?: 'large' | 'default' | 'small'
  width?: number
  activeValue?: string
  unActiveValue?: string
}
export interface FormOption {
  key: string
  prop: string
  label: string
  type: 'input' | 'check' | 'select' | 'radio' | 'checkbox' | 'custom' | 'date' | 'switch'
  width?: string
  slot?: string
  name?: string
  ItemRules?: FormItemRule[] | FormItemRule
  error?: string
  required?: boolean
  size?: 'large' | 'default' | 'small'
  style?: string
  inputOption?: InputOption
  radioOption?: RadioOption
  selectOption?: SelectOption
  checkBoxOption?: CheckBoxOption
  datePickerOption?: DatePickerOption
  switchOption?: SwitchOption
}
export interface DescriptionOption {
  key: string
  prop: string
  label: string
  width?: string
  hidden?: string
  align?: string
  name?: string
  slot?: boolean
  labelClasses?: string
  cellClasses?: string
}
