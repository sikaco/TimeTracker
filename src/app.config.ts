export default defineAppConfig({
  pages: ['components/views/init-page/index'], // 末尾这个 index 不能掉，否则会报错。
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
