import React, { Component, Fragment } from 'react'

class ChildRenComponent extends Component {
  render() {
    const children = this.props.children as Function
    return <Fragment>{children()}</Fragment>
  }
}

// 定义展示的组件
export default class RenderProp extends Component {
  state = {
    count: 0
  }

  // componentDidMount() {
  //   this.setState({ count: this.state.count + 1 })
  //   console.log(this.state.count)

  //   this.setState({ count: this.state.count + 1 })
  //   console.log(this.state.count)

  //   setTimeout(() => {
  //     this.setState({ count: this.state.count + 1 })
  //     console.log(this.state.count)

  //     this.setState({ count: this.state.count + 1 })
  //     console.log(this.state.count)
  //   }, 0)
  // }
  componentDidMount() {
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count)
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 })
      console.log('setTimeout: ' + this.state.count)
    }, 0)
  }

  render() {
    return (
      <Fragment>
        <ChildRenComponent>
          {() => (
            <Fragment>
              <button>222</button>
            </Fragment>
          )}
        </ChildRenComponent>
      </Fragment>
    )
  }
}
