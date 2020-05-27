Page({
  data:{
    currentTab:0,
    flag:0,
  },
  switchNav:function (e) {
    console.log(e);
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({ currentTab: id });
    }
    page.setData({ flag: id });
  },
  data: {
    
  },
  jumpPicture1:function(){
    wx.navigateTo({
      url: '/pages/index/picture/picture01/picture01'
    })
  },
  jumpPicture2: function () {
    wx.navigateTo({
      url: '/pages/index/picture/picture02/picture02'
    })
  },
  jumpPicture3: function () {
    wx.navigateTo({
      url: '/pages/index/picture/picture03/picture03'
    })
  },
  jumpPicture4: function () {
    wx.navigateTo({
      url: '/pages/index/picture/picture04/picture04'
    })
  },
  jumpPicture5: function () {
    wx.navigateTo({
      url: '/pages/index/picture/picture05/picture05'
    })
  },
  onShareAppMessage: function () {

  }
})