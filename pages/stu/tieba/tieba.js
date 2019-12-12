// pages/stu/tieba/tieba.js
var app = getApp();
var that = this;
var movableImageSideLength = 0.15;//可拖动图片边长
Page({
  data: {
    id:[0,1,2,3],
    dianZanSrc: ["../../../images/点赞.png", "../../../images/点赞.png", "../../../images/点赞.png"],
    commentnum:0,
    likesnum:[0,0,0],
    likecolor:["","",""],
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
    let cuX = event.changedTouches[0].clientY
    let cuY = event.changedTouches[0].clientY - movableImageSideLength*wx.getSystemInfoSync().windowWidth / 2;
    let middleX = wx.getSystemInfoSync().windowWidth/2;
    let setX = wx.getSystemInfoSync().windowWidth * (1.01 - movableImageSideLength)
    if (cuX > middleX||cuX <= middleX) {
      this.setData({
        x: setX,
        y: cuY
      })
    }
  },
  dianzan:function(event){
    let Id = event.currentTarget.id;
    let LIKESNUM = "likesnum["+Id+"]";
    let LIKECOLOR = "likecolor[" + Id +"]";
    let DIANZANSRC = "dianZanSrc["+Id+"]";
    if(this.data.likesnum[Id] == 0){
      this.setData({
        [LIKESNUM]:1,
        [LIKECOLOR]:"#e97e3f",
        [DIANZANSRC]:"../../../images/点赞ed.png"
      })
    }
    else{
      this.setData({
        [LIKESNUM]: 0,
        [LIKECOLOR]: "",
        [DIANZANSRC]:"../../../images/点赞.png"
      })
    };
  }
})