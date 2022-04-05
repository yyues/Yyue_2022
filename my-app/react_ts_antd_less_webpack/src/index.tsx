// 导入 react
import React from 'react'

import ReactDOM from 'react-dom'

// 导入 antd 样式
import 'antd/dist/antd.css'

// 按照
import Root from './router/app'

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
)
