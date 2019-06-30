// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],  //列表
    pno:0,    //当前页码
    pageSize:7//页大小
  },
  onLoad: function (options) {
    this.loadMore();
  },
  loadMore:function(){
     //loadMore 加载下一页数据
     //1:获取页码 + 1
     var p = this.data.pno+1;
     var ps = this.data.pageSize;
     //2:获取页大小
     //3:发送ajax请求
     var url = "http://127.0.0.1:3000/shoplist";
     url+="?pno="+p
     //5:获取返回数据 追加数据
     //5.1:显示加载动画
     wx.showLoading({
       title: '电影正在加载中.',
     });
     wx.request({
       url: url,
       method:"GET",
       success:(res)=>{
         //数据追加效果 10:33
         var rows = this.data.list.concat(res.data.data);
         this.setData({
           list:rows,            //当前页内容
           pno:p,               //修改当前页码 
         });
         //5.2:数据加载成功并且显示结束
         //5.3:隐藏加载动画
         wx.hideLoading();
       }
     }) 
     //6:修改当前页
     //7:修改当前组件模板
     //8:显示美食信息
  },
  mov_details:function(){
    wx.navigateTo({
      url: '/pages/mov_details/mov_details',
    })
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
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})