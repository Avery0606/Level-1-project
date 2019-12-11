// pages/stu/tieba/tieba.js
var app = getApp();
var that = this;
var movableImageSideLength = 0.15;//可拖动图片边长
Page({
  data: {
    x: wx.getSystemInfoSync().windowWidth * (1.01 - movableImageSideLength),
    y:10000,
    movableareaH: 100 * (0.94 * wx.getSystemInfoSync().windowHeight - movableImageSideLength * wx.getSystemInfoSync().windowWidth) / wx.getSystemInfoSync().windowHeight + "vh", 
    movableareaW: ((1 - movableImageSideLength)*100+5)+"vw",
    movableImageSideLengthS:movableImageSideLength*100+"vw"
  },
  onLoad: function (options) {
    app.editTabBar();
},
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  // abc函数实现拖动图片并自动靠边
  abc:function(event){
    let cuX = event.changedTouches[0].pageX
    let cuY = event.changedTouches[0].pageY - movableImageSideLength*wx.getSystemInfoSync().windowWidth / 2;
    let middleX = wx.getSystemInfoSync().windowWidth/2;
    let setX = wx.getSystemInfoSync().windowWidth * (1.01 - movableImageSideLength)
    if (cuX > middleX||cuX <= middleX) {
      this.setData({
        x: setX,
        y: cuY
      })
    }
  }
})