// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs:[
            {
              id:0,
              name:"首页",
              isActive:true,
              tabpages:"/pages/index/index"
            },
            {
              id:1,
              name:"文章",
              isActive:false,
              tabpages:"/pages/index/article/article"
            },
            {
              id:2,
              name:"图片",
              isActive:false,
              tabpages:"/pages/index/picture/picture"
            },
            {
              id:3,
              name:"关于",
              isActive:false,
              tabpages:"/pages/index/about/about"
            }
          ] 
    },
    hanldeItemTap:function(e){
        const {index}=e.currentTarget.dataset;
      //let tabs=JSON.parse(JSON.stringify(this.data.tabs));
      let {tabs}=this.data;
      tabs.forEach((v,i)=>i===index?(v.isActive=true && wx.navigateTo({
        url:v.tabpages,
      })):v.isActive=false );
      this.setData(
        {
          tabs
        }
      )
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})