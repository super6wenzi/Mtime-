//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:1,img_url:"http://127.0.0.1:3000/img/shop/banner1.jpg"},
      { id: 2, img_url: "http://127.0.0.1:3000/img/shop/banner2.jpg" },
      { id: 3, img_url: "http://127.0.0.1:3000/img/shop/banner3.jpg" },
      { id: 4, img_url: "http://127.0.0.1:3000/img/shop/banner4.jpg" },
    ],
    autoplay:true,
    interval:4000,
    navlist:[
      { id: 1, title: "模玩", img_url:"http://127.0.0.1:3000/img/shop/nav1.jpg"},
      { id: 2, title: "数码", img_url: "http://127.0.0.1:3000/img/shop/nav2.jpg" },
      { id: 3, title: "服饰", img_url: "http://127.0.0.1:3000/img/shop/nav3.jpg" },
      { id: 4, title: "家居", img_url: "http://127.0.0.1:3000/img/shop/nav4.jpg" },
      { id: 5, title: "星球大战", img_url: "http://127.0.0.1:3000/img/shop/nav5.jpg" },
      { id: 6, title: "漫威", img_url: "http://127.0.0.1:3000/img/shop/nav6.jpg" },
      { id: 7, title: "复仇者联盟", img_url: "http://127.0.0.1:3000/img/shop/nav7.jpg" },
      { id: 8, title: "美食", img_url: "http://127.0.0.1:3000/img/shop/timg.jpg" },
      { id: 9, title: "更多", img_url: "http://127.0.0.1:3000/img/shop/nav8.jpg" },
    ]
  },
  details:function(){
     wx.navigateTo({
       url: '/pages/mov_details/mov_details',
     })
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