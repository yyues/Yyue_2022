/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useState } from 'react'
import { Button } from 'antd'
// import ajax from '@/api/http'
export default function imgBetter() {
  const [data, setData] = useState('')
  const handleClick = () => {
    setData('https://picsum.photos/seed/picsum/300/200')
  }
  return (
    <Fragment>
      <Button type='dashed' onClick={handleClick}>
        点击切换图片
      </Button>
      <img src={data} alt='' />
    </Fragment>
  )
}
