### 考试逻辑实现

需求确认

- 四种考试模式，分别是 预览、阅卷、考试、查看阅卷结果
- 显示试卷等固定信息
- 考试要求有检测作弊操作、到时自动提交，三次切出提交、提交前显示未答题数量、切出30秒提交，每十分钟获取考试时间，考试时间到预警时间则提示，考试时间为0则提交试卷，自动保存开始试卷
- 预览要求看到试卷，禁止编辑和显示提交按钮
- 阅卷要求根据用户填写数据显示对错，对于主观题需要有评分和评语input，并根据是否填写评语提示还有多少题没打分

### 需求规划

- 根据功能拆分出四个组件，并根据不同场景给定不同角色值
- `examHeader`，分为考试和其他类型，考试时显示剩余考试时间和返回指定emit事件
- `examContent`，考试主要内容，负责渲染考试内容结果和答题数据，还有阅卷、显示标准答案等功能
- `examDialog`，负责弹出考试提示内容，操作简单不做说明
- `examItem`, 考试的基础组件，用来渲染每道题目的具体信息和相应的答题区位置，同时也负责处理阅卷情况下用户数据显示的正确与否，
- `examAnswer` ,阅卷状态下主要的处理组件，用来渲染正确答案和用户输入区，同时负责提供给父组件输入信息
- `examResult`，展示试卷结果的主要组件，用来决定是否显示标准答案

### 数据结果分析

总体而言，考试等相关功能主要使用了三个参数，用户数据 `examUserData`，标准答案 `examStandardData`，用户绑定数据 `examResultData`

- 当考试时，没有标准答案，标准答案数据使用用户绑定数据，用户绑定的数据，基本模板是由后端传递的，前端使用的
- `type` 和 `role`始终贯串整个功能组件，
- 考试时间 `time` 和 考试预警时间 `timeLine` 都是走接口获取后端结构的

### 上代码

```vue
<div class="exam-wrapper">
    <examHeader
      v-if="examScope"
      ref="examHeader"
      :role="role"
      :data="examData"
      :examScope="examScope"
      :AllScore="examAllScore"
      :props="{ time, timeLine }"
      @time="handleTime"
      @handleGetTime="handleGetTime"
    />
    <examContent
      v-if="examData"
      ref="examContent"
      :role="role"
      :examContent="examData.children"
      :examResultInitialValue="examResult"
      :examStandardAnswer="examStandardData"
      :examIfCheckExam="examIfCheckExam"
      @update="updateUserExamInfo"
    />
    <div class="exam-footer" v-if="role == 'student'">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
    </div>
    <div class="exam-footer" v-if="role == 'teacher' && !examIfCheckExam">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
    </div>
    <examDialog
      v-if="role == 'student' && ExamInfoStatus && !isLeave"
      v-model="ExamInfoStatus"
      :data="unFinishExam"
      :time="timeLine"
      :type="diaLogType"
      :count="count"
      title="提示"
      @submit="handleForceSubmit"
    />
```

需要的数据

```vue
props: {
    role: {
      type: String,
      default: 'student'
    },
    examData: {
      type: Object,
      default: () => {}
    }, // 试卷题目结构
    examResult: {
      type: Object,
      default: () => {}
    }, // 试卷答案基础架构
    examScope: {
      type: Array,
      default: () => []
    }, // 试卷基础分数值，一般来说不会动态改变
    examStandardData: {
      type: Object,
      default: () => {}
    }, // 试卷标准答案
    examUserId: {
      type: String,
      default: ''
    },
    examLimitTime: Number,
    examWarningTime: Number,
    examAllScore: String,
    examIfCheckExam: {
      type: Boolean,
      default: false
    }
  }
```

