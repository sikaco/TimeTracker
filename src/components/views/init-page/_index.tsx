import './index.styl'

import { DispatchProps, StateProps } from './types'

import { GlobalState } from 'src/components/xuder/reducer'
import React from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import cx from 'classnames'

// import { ProjectFilter } from './types'
// import * as utils from './utils'
// import { GTA_OPTIONS_MAP } from './consts'
// import { createMemberAddMenu, mapTagMember2Involver } from './utils'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

export interface OwnProps {}

export type Props = Readonly<OwnProps> & StateProps & DispatchProps

// @connect(
//   (state: GlobalState) => ({
//     counter
//   }),
//   dispatch => ({
//     add() {
//       dispatch(add())
//     },
//     dec() {
//       dispatch(minus())
//     },
//     asyncAdd() {
//       dispatch(asyncAdd())
//     }
//   })
// )
class Index extends React.PureComponent<Props> {
  cxPrefix = 'organization-portal'

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { actions } = this.props

    // console.log('actions.getProjectTags', actions.getProjectTags)
  }

  componentWillUnmount() {}

  render() {
    // return <div className={styles[this.cxPrefix]}></div>
    return <View className='index'>123</View>
  }
}

export default Index
