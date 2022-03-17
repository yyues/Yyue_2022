import React, { Fragment } from 'react'

import ImgBetter from '@/components/imgBetter'
import './Layout.less'

export default function Layout() {
  return (
    <Fragment>
      <h1>根组件Layout</h1>
      {/* <RenderProp /> */}
      <ImgBetter />
    </Fragment>
  )
}
