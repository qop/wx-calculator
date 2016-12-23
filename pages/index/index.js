//index.js
//获取应用实例
var app = getApp()

var buttonList = [{
  text: 'AC',
  className: 'sub-op',
  active: true
}, {
  text: '+/-',
  className: 'sub-op',
  active: false
}, {
  text: '%',
  className: 'sub-op',
  active: false
}, {
  text: '÷',
  className: 'op',
  active: false
}, {
  text: '7',
  className: '',
  active: false
}, {
  text: '8',
  className: '',
  active: false
}, {
  text: '9',
  className: '',
  active: false
}, {
  text: '×',
  className: 'op',
  active: true
}, {
  text: '4',
  className: '',
  active: false
}, {
  text: '5',
  className: '',
  active: false
}, {
  text: '6',
  className: '',
  active: false
}, {
  text: '-',
  className: 'op',
  active: false
}, {
  text: '1',
  className: '',
  active: false
}, {
  text: '2',
  className: '',
  active: false
}, {
  text: '3',
  className: '',
  active: false
}, {
  text: '+',
  className: 'op',
  active: false
}, {
  text: '0',
  className: 'col-2',
  active: false
}, {
  text: '.',
  className: '',
  active: false
}, {
  text: '=',
  className: 'op',
  active: false
}]

Page({
  data: {
    buttonList: buttonList
  },
  onLoad: function() {
    console.log('onLoad');
    // update buttonList position
  },
  handleTouchStart: function(e) {
    this.updateHover(true, e.touches[0]);
  },
  handleTouchMove: function(e) {
    console.log(e.touches);
    this.updateHover(true, e.touches[0]);
  },
  handleTouchEnd: function() {
    this.updateHover(false);
  },
  handleTouchCancel: function() {
    this.updateHover(false);
  },
  updateHover: function(turnOn, positon) {
    var _this = this;
    if (turnOn) {
      console.log(positon);
    } else {
      this.data.buttonList.forEach(function(button) {
        button.active = false;
      });
      this.setData(this.data);
    }
  }
})
