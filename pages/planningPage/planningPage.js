// pages/planningPage/planningPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    direction:"null",
    Info:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.direction);
    this.direction = options.direction;
    this.getInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  getInfo:function(){
    wx.request({
      url: 'https://www.xsfzgh.online/data',
      method:'GET',                     

      success:(res) => {
        var pages = getCurrentPages();
        var index = pages[pages.length-1];
        var Info = res.data;
        console.log(Info)
        for(let value of Info){
          if(value["direction"] == this.direction){
            index.setData({
              Info: value["details"]
            })
            // this.Info = value["details"];
            break;
          }
        }
        console.log(this.Info);
        this.onShow();
      }
    })
  }
})