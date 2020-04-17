// pages/result/result.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        score: 0,
        grade: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     * 入学年级划分标准：
     评估分数   ≤120---1年级，需极重度干预
     121-160---2年级，需重度干预
     161-200---3年级，需中度干预
     201-220---4年级，需轻度干预
     221-240---5年级，需轻度干预
     */
    onLoad: function (options) {
        let score = options.score;
        this.setDate({score:score})
        if (score > 0 && score <= 120) {
            this.setDate({grade:1})
        }else if (score > 120 && score <= 160){
            this.setDate({grade:2})
        }else if (score > 160 && score <= 200){
            this.setDate({grade:3})
        }else if (score > 200 && score <= 220){
            this.setDate({grade:4})
        }else if (score > 220 && score <= 240){
            this.setDate({grade:5})
        }
    },
})
