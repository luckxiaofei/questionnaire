//index.js
var util = require('../../utils/util.js');
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    radio_1_1: 0,
    radio_1_2: 0,
    radio_1_3: 0,
    radio_1_4: 0,
    radio_1_5: 0,
    radio_2_1: 0,
    radio_2_2: 0,
    radio_2_3: 0,
    radio_2_4: 0,
    radio_3_1: 0,
    radio_3_2: 0,
    radio_3_3: 0,
    radio_3_4: 0,
    radio_3_5: 0,
    radio_3_6: 0,
    radio_3_7: 0,
    radio_3_8: 0,
    radio_3_9: 0,
    radio_3_10: 0,
    radio_4_1: 0,
    radio_4_2: 0,
    radio_4_3: 0,
    radio_4_4: 0,
    radio_4_5: 0,
    radio_4_6: 0,
    radio_4_7: 0,
    radio_4_8: 0,
    radio_4_9: 0,
    radio_4_10: 0,
    radio_4_11: 0,
    radio_4_12: 0,
    radio_4_13: 0,
    radio_4_14: 0,
    radio_4_15: 0,
    radio_4_16: 0,
    radio_5_1: 0,
    radio_5_2: 0,
    radio_5_3: 0,
    radio_5_4: 0,
    radio_5_5: 0,
    radio_5_6: 0,
    radio_5_7: 0,
    radio_5_8: 0,
    radio_5_9: 0,
    radio_6_1: 0,
    radio_6_2: 0,
    radio_6_3: 0,
    radio_6_4: 0,
    radio_6_5: 0,
    radio_6_6: 0,
    radio_7_1: 0,
    radio_7_2: 0,
    radio_7_3: 0,
    radio_7_4: 0,
    radio_7_5: 0,
    radio_7_6: 0,
    radio_8_1: 0,
    radio_8_2: 0,
    radio_8_3: 0,
    radio_8_4: 0,
    radio_8_5: 0,
    radio_8_6: 0,
    radio_9_1: 0,
    radio_9_2: 0,
    radio_9_3: 0,
    radio_9_4: 0,
    radio_9_5: 0,
    radio_10_1: 0,
    radio_10_2: 0,
    radio_10_3: 0,
    radio_10_4: 0,
    radio_10_5: 0,
    radio_11_1: 0,
    radio_11_2: 0,
    radio_11_3: 0,
    radio_12_1: 0,
    radio_12_2: 0,
    radio_12_3: 0,
    radio_12_4: 0,
    radio_12_5: 0,
    sumScore: 0

  },
  onLoad: function() {

  },
  onChange(event) {
    var id = event.currentTarget.dataset.id;
    if (util.isBlank(id)) {
      return
    }
    if (id == "1_1") {
      this.setData({
        radio_1_1: event.detail
      });

    } else if (id == "1_2") {
      this.setData({
        radio_1_2: event.detail
      });

    } else if (id == "1_3") {
      this.setData({
        radio_1_3: event.detail
      });

    } else if (id == "1_4") {
      this.setData({
        radio_1_4: event.detail
      });

    } else if (id == "1_5") {
      this.setData({
        radio_1_5: event.detail
      });

    } else if (id == "2_1") {
      this.setData({
        radio_2_1: event.detail
      });

    } else if (id == "2_2") {
      this.setData({
        radio_2_2: event.detail
      });

    } else if (id == "2_3") {
      this.setData({
        radio_2_3: event.detail
      });

    } else if (id == "2_4") {
      this.setData({
        radio_2_4: event.detail
      });

    } else if (id == "3_1") {
      this.setData({
        radio_3_1: event.detail
      });

    } else if (id == "3_2") {
      this.setData({
        radio_3_2: event.detail
      });

    } else if (id == "3_3") {
      this.setData({
        radio_3_3: event.detail
      });

    } else if (id == "3_4") {
      this.setData({
        radio_3_4: event.detail
      });

    } else if (id == "3_5") {
      this.setData({
        radio_3_5: event.detail
      });

    } else if (id == "3_6") {
      this.setData({
        radio_3_6: event.detail
      });

    } else if (id == "3_7") {
      this.setData({
        radio_3_7: event.detail
      });

    } else if (id == "3_8") {
      this.setData({
        radio_3_8: event.detail
      });

    } else if (id == "3_9") {
      this.setData({
        radio_3_9: event.detail
      });

    } else if (id == "3_10") {
      this.setData({
        radio_3_10: event.detail
      });

    } else if (id == "4_1") {
      this.setData({
        radio_4_1: event.detail
      });

    } else if (id == "4_2") {
      this.setData({
        radio_4_2: event.detail
      });

    } else if (id == "4_3") {
      this.setData({
        radio_4_3: event.detail
      });

    } else if (id == "4_4") {
      this.setData({
        radio_4_4: event.detail
      });

    } else if (id == "4_5") {
      this.setData({
        radio_4_5: event.detail
      });

    } else if (id == "4_6") {
      this.setData({
        radio_4_6: event.detail
      });

    } else if (id == "4_7") {
      this.setData({
        radio_4_7: event.detail
      });

    } else if (id == "4_8") {
      this.setData({
        radio_4_8: event.detail
      });

    } else if (id == "4_9") {
      this.setData({
        radio_4_9: event.detail
      });

    } else if (id == "4_10") {
      this.setData({
        radio_4_10: event.detail
      });

    } else if (id == "4_11") {
      this.setData({
        radio_4_11: event.detail
      });

    } else if (id == "4_12") {
      this.setData({
        radio_4_12: event.detail
      });

    } else if (id == "4_13") {
      this.setData({
        radio_4_13: event.detail
      });

    } else if (id == "4_14") {
      this.setData({
        radio_4_14: event.detail
      });

    } else if (id == "4_15") {
      this.setData({
        radio_4_15: event.detail
      });

    } else if (id == "4_16") {
      this.setData({
        radio_4_16: event.detail
      });

    } else if (id == "5_1") {
      this.setData({
        radio_5_1: event.detail
      });

    } else if (id == "5_2") {
      this.setData({
        radio_5_2: event.detail
      });

    } else if (id == "5_3") {
      this.setData({
        radio_5_3: event.detail
      });

    } else if (id == "5_4") {
      this.setData({
        radio_5_4: event.detail
      });

    } else if (id == "5_5") {
      this.setData({
        radio_5_5: event.detail
      });

    } else if (id == "5_6") {
      this.setData({
        radio_5_6: event.detail
      });

    } else if (id == "5_7") {
      this.setData({
        radio_5_7: event.detail
      });

    } else if (id == "5_8") {
      this.setData({
        radio_5_8: event.detail
      });

    } else if (id == "5_9") {
      this.setData({
        radio_5_9: event.detail
      });

    } else if (id == "6_1") {
      this.setData({
        radio_6_1: event.detail
      });

    } else if (id == "6_2") {
      this.setData({
        radio_6_2: event.detail
      });

    } else if (id == "6_3") {
      this.setData({
        radio_6_3: event.detail
      });

    } else if (id == "6_4") {
      this.setData({
        radio_6_4: event.detail
      });

    } else if (id == "6_5") {
      this.setData({
        radio_6_5: event.detail
      });

    } else if (id == "6_6") {
      this.setData({
        radio_6_6: event.detail
      });

    } else if (id == "7_1") {
      this.setData({
        radio_7_1: event.detail
      });

    } else if (id == "7_2") {
      this.setData({
        radio_7_2: event.detail
      });

    } else if (id == "7_3") {
      this.setData({
        radio_7_3: event.detail
      });

    } else if (id == "7_4") {
      this.setData({
        radio_7_4: event.detail
      });

    } else if (id == "7_5") {
      this.setData({
        radio_7_5: event.detail
      });

    } else if (id == "7_6") {
      this.setData({
        radio_7_6: event.detail
      });

    } else if (id == "8_1") {
      this.setData({
        radio_8_1: event.detail
      });

    } else if (id == "8_2") {
      this.setData({
        radio_8_2: event.detail
      });

    } else if (id == "8_3") {
      this.setData({
        radio_8_3: event.detail
      });

    } else if (id == "8_4") {
      this.setData({
        radio_8_4: event.detail
      });

    } else if (id == "8_5") {
      this.setData({
        radio_8_5: event.detail
      });

    } else if (id == "8_6") {
      this.setData({
        radio_8_6: event.detail
      });

    } else if (id == "9_1") {
      this.setData({
        radio_9_1: event.detail
      });

    } else if (id == "9_2") {
      this.setData({
        radio_9_2: event.detail
      });

    } else if (id == "9_3") {
      this.setData({
        radio_9_3: event.detail
      });

    } else if (id == "9_4") {
      this.setData({
        radio_9_4: event.detail
      });

    } else if (id == "9_5") {
      this.setData({
        radio_9_5: event.detail
      });

    } else if (id == "10_1") {
      this.setData({
        radio_10_1: event.detail
      });

    } else if (id == "10_2") {
      this.setData({
        radio_10_2: event.detail
      });

    } else if (id == "10_3") {
      this.setData({
        radio_10_3: event.detail
      });

    } else if (id == "10_4") {
      this.setData({
        radio_10_4: event.detail
      });

    } else if (id == "10_5") {
      this.setData({
        radio_10_5: event.detail
      });

    } else if (id == "11_1") {
      this.setData({
        radio_11_1: event.detail
      });

    } else if (id == "11_2") {
      this.setData({
        radio_11_2: event.detail
      });

    } else if (id == "11_3") {
      this.setData({
        radio_11_3: event.detail
      });

    } else if (id == "12_1") {
      this.setData({
        radio_12_1: event.detail
      });

    } else if (id == "12_2") {
      this.setData({
        radio_12_2: event.detail
      });

    } else if (id == "12_3") {
      this.setData({
        radio_12_3: event.detail
      });

    } else if (id == "12_4") {
      this.setData({
        radio_12_4: event.detail
      });

    } else if (id == "12_5") {
      this.setData({
        radio_12_5: event.detail
      });
    }
  },

  getSum() {
    var tag = this.overCheck();
    if (!tag) {
      return 0;
    }
    let sum = Number(this.data.radio_1_1) +
      Number(this.data.radio_1_2) +
      Number(this.data.radio_1_3) +
      Number(this.data.radio_1_4) +
      Number(this.data.radio_1_5) +
      Number(this.data.radio_2_1) +
      Number(this.data.radio_2_2) +
      Number(this.data.radio_2_3) +
      Number(this.data.radio_2_4) +
      Number(this.data.radio_3_1) +
      Number(this.data.radio_3_2) +
      Number(this.data.radio_3_3) +
      Number(this.data.radio_3_4) +
      Number(this.data.radio_3_5) +
      Number(this.data.radio_3_6) +
      Number(this.data.radio_3_7) +
      Number(this.data.radio_3_8) +
      Number(this.data.radio_3_9) +
      Number(this.data.radio_3_10) +
      Number(this.data.radio_4_1) +
      Number(this.data.radio_4_2) +
      Number(this.data.radio_4_3) +
      Number(this.data.radio_4_4) +
      Number(this.data.radio_4_5) +
      Number(this.data.radio_4_6) +
      Number(this.data.radio_4_7) +
      Number(this.data.radio_4_8) +
      Number(this.data.radio_4_9) +
      Number(this.data.radio_4_10) +
      Number(this.data.radio_4_11) +
      Number(this.data.radio_4_12) +
      Number(this.data.radio_4_13) +
      Number(this.data.radio_4_14) +
      Number(this.data.radio_4_15) +
      Number(this.data.radio_4_16) +
      Number(this.data.radio_5_1) +
      Number(this.data.radio_5_2) +
      Number(this.data.radio_5_3) +
      Number(this.data.radio_5_4) +
      Number(this.data.radio_5_5) +
      Number(this.data.radio_5_6) +
      Number(this.data.radio_5_7) +
      Number(this.data.radio_5_8) +
      Number(this.data.radio_5_9) +
      Number(this.data.radio_6_1) +
      Number(this.data.radio_6_2) +
      Number(this.data.radio_6_3) +
      Number(this.data.radio_6_4) +
      Number(this.data.radio_6_5) +
      Number(this.data.radio_6_6) +
      Number(this.data.radio_7_1) +
      Number(this.data.radio_7_2) +
      Number(this.data.radio_7_3) +
      Number(this.data.radio_7_4) +
      Number(this.data.radio_7_5) +
      Number(this.data.radio_7_6) +
      Number(this.data.radio_8_1) +
      Number(this.data.radio_8_2) +
      Number(this.data.radio_8_3) +
      Number(this.data.radio_8_4) +
      Number(this.data.radio_8_5) +
      Number(this.data.radio_8_6) +
      Number(this.data.radio_9_1) +
      Number(this.data.radio_9_2) +
      Number(this.data.radio_9_3) +
      Number(this.data.radio_9_4) +
      Number(this.data.radio_9_5) +
      Number(this.data.radio_10_1) +
      Number(this.data.radio_10_2) +
      Number(this.data.radio_10_3) +
      Number(this.data.radio_10_4) +
      Number(this.data.radio_10_5) +
      Number(this.data.radio_11_1) +
      Number(this.data.radio_11_2) +
      Number(this.data.radio_11_3) +
      Number(this.data.radio_12_1) +
      Number(this.data.radio_12_2) +
      Number(this.data.radio_12_3) +
      Number(this.data.radio_12_4) +
      Number(this.data.radio_12_5);
    return sum;
  },

  overCheck() {
    if (Number(this.data.radio_1_1) <= 0) {
      return false;
    } else if (Number(this.data.radio_1_2) <= 0) {
      return false;
    } else if (Number(this.data.radio_1_3) <= 0) {
      return false;
    } else if (Number(this.data.radio_1_4) <= 0) {
      return false;
    } else if (Number(this.data.radio_1_5) <= 0) {
      return false;
    } else if (Number(this.data.radio_2_1) <= 0) {
      return false;
    } else if (Number(this.data.radio_2_2) <= 0) {
      return false;
    } else if (Number(this.data.radio_2_3) <= 0) {
      return false;
    } else if (Number(this.data.radio_2_4) <= 0) {
      return false;
    } else if (Number(this.data.radio_3_1) <= 0) {
      return false;
    } else if (Number(this.data.radio_3_2) <= 0) {
      return false;
    } else if (Number(this.data.radio_3_3) <= 0) {
      return false;
    } else if (Number(this.data.radio_3_4) <= 0) {
      return false;
    } else if (Number(this.data.radio_3_5) <= 0) {
      return false;
    } else if (Number(this.data.radio_3_6) <= 0) {
      return false;
    } else if (Number(this.data.radio_3_7) <= 0) {
      return false;
    } else if (Number(this.data.radio_3_8) <= 0) {
      return false;
    } else if (Number(this.data.radio_3_9) <= 0) {
      return false;
    } else if (Number(this.data.radio_3_10) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_1) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_2) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_3) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_4) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_5) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_6) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_7) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_8) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_9) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_10) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_11) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_12) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_13) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_14) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_15) <= 0) {
      return false;
    } else if (Number(this.data.radio_4_16) <= 0) {
      return false;
    } else if (Number(this.data.radio_5_1) <= 0) {
      return false;
    } else if (Number(this.data.radio_5_2) <= 0) {
      return false;
    } else if (Number(this.data.radio_5_3) <= 0) {
      return false;
    } else if (Number(this.data.radio_5_4) <= 0) {
      return false;
    } else if (Number(this.data.radio_5_5) <= 0) {
      return false;
    } else if (Number(this.data.radio_5_6) <= 0) {
      return false;
    } else if (Number(this.data.radio_5_7) <= 0) {
      return false;
    } else if (Number(this.data.radio_5_8) <= 0) {
      return false;
    } else if (Number(this.data.radio_5_9) <= 0) {
      return false;
    } else if (Number(this.data.radio_6_1) <= 0) {
      return false;
    } else if (Number(this.data.radio_6_2) <= 0) {
      return false;
    } else if (Number(this.data.radio_6_3) <= 0) {
      return false;
    } else if (Number(this.data.radio_6_4) <= 0) {
      return false;
    } else if (Number(this.data.radio_6_5) <= 0) {
      return false;
    } else if (Number(this.data.radio_6_6) <= 0) {
      return false;
    } else if (Number(this.data.radio_7_1) <= 0) {
      return false;
    } else if (Number(this.data.radio_7_2) <= 0) {
      return false;
    } else if (Number(this.data.radio_7_3) <= 0) {
      return false;
    } else if (Number(this.data.radio_7_4) <= 0) {
      return false;
    } else if (Number(this.data.radio_7_5) <= 0) {
      return false;
    } else if (Number(this.data.radio_7_6) <= 0) {
      return false;
    } else if (Number(this.data.radio_8_1) <= 0) {
      return false;
    } else if (Number(this.data.radio_8_2) <= 0) {
      return false;
    } else if (Number(this.data.radio_8_3) <= 0) {
      return false;
    } else if (Number(this.data.radio_8_4) <= 0) {
      return false;
    } else if (Number(this.data.radio_8_5) <= 0) {
      return false;
    } else if (Number(this.data.radio_8_6) <= 0) {
      return false;
    } else if (Number(this.data.radio_9_1) <= 0) {
      return false;
    } else if (Number(this.data.radio_9_2) <= 0) {
      return false;
    } else if (Number(this.data.radio_9_3) <= 0) {
      return false;
    } else if (Number(this.data.radio_9_4) <= 0) {
      return false;
    } else if (Number(this.data.radio_9_5) <= 0) {
      return false;
    } else if (Number(this.data.radio_10_1) <= 0) {
      return false;
    } else if (Number(this.data.radio_10_2) <= 0) {
      return false;
    } else if (Number(this.data.radio_10_3) <= 0) {
      return false;
    } else if (Number(this.data.radio_10_4) <= 0) {
      return false;
    } else if (Number(this.data.radio_10_5) <= 0) {
      return false;
    } else if (Number(this.data.radio_11_1) <= 0) {
      return false;
    } else if (Number(this.data.radio_11_2) <= 0) {
      return false;
    } else if (Number(this.data.radio_11_3) <= 0) {
      return false;
    } else if (Number(this.data.radio_12_1) <= 0) {
      return false;
    } else if (Number(this.data.radio_12_2) <= 0) {
      return false;
    } else if (Number(this.data.radio_12_3) <= 0) {
      return false;
    } else if (Number(this.data.radio_12_4) <= 0) {
      return false;
    } else if (Number(this.data.radio_12_5) <= 0) {
      return false;
    }
  },
  overSub() {
    let that = this;
    if (!that.overCheck()) {
      wx.showToast({
        title: '存在未填写的项',
      })
      return;
    }
    let sum = that.getSum();
    wx.navigateTo({
      url: '/pages/result/result?score=' + sum
    });
  }
})