//index.js
var util = require('../../utils/util.js');
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
//获取应用实例
const app = getApp()

Page({
  data: {


  },
  onLoad: function() {

  },

  onClick() {
    // Dialog.alert({
    //   title: '温馨提示',
    //   message: '亲爱的家长，您好！欢迎您使用圣之星自闭症评估小程序。本程序中的评估内容只适用于自闭症儿童，请您在确认儿童为自闭症后进行评估。'
    // }).then(() => {
    //  wx.navigateTo({
    //    url: '/pages/questionnaire/questionnaire',
    //  })
    // });
    wx.navigateTo({
      url: '/pages/questionnaire/questionnaire',
    })
  }
})