'use strict';

const {
  post,
  user
} = require('../../utils/index.js')

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = Page({
  data: {
    favoriteList: [],
    disabled: false,
  },
  onLoad: function() {
    // console.log(this.data.favoriteList);
    // console.log(user.info.nickName);
    var page = this;
    post('https://contest.lujs.cn/bs-opcam/interaction/queryCollectedList', {
        userId: user.info.nickName
      })
      .then(
        res => page.setData({favoriteList: res.data.data.collections})
      );
  },
  getUserInfo: user.getUserInfo,
  viewDate: function(event) {
    console.log(event.target.dataset.date);
    wx.navigateTo({
      url: '../home/index?curDate=' + event.target.dataset.date,
    })
  }
})