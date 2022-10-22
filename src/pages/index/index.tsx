import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import './index.less'

import Test from './test'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Test></Test>
      </View>
    )
  }
}
