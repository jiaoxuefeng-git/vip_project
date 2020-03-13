"use strict";

//设计这个类
function Slider(ele) {
  //轮播区域
  this.sliderBox = ele; //图片列表ul

  this.sliderUl = this.sliderBox.querySelectorAll(".sliderList")[0]; //图片列表

  this.sliderList = this.sliderUl.children; //取列表的长度

  this.length = this.sliderList.length; //取单位宽

  this.perWidth = this.sliderList[0].offsetWidth; //设置图片列表的宽度

  this.sliderUl.style.width = this.perWidth * this.length + "px";
  this.autoPlay();
  this.clear();
} //自动轮播


Slider.prototype.autoPlay = function () {
  var _this = this;

  this.count = 0;
  this.timer = setInterval(function () {
    _this.move();
  }, 3000);
};

Slider.prototype.move = function () {
  this.count++;

  if (this.count == this.length) {
    this.sliderUl.style.left = 0;
    this.count = 1;
  }

  if (this.count == -1) {
    this.sliderUl.style.left = -this.perWidth * (this.length - 1) + "px";
    this.count = this.length - 2;
  }

  if (this.focusList) {
    for (var i = 0; i < this.focusList.length; i++) {
      this.focusList[i].className = "";
    }

    if (this.count == this.length - 1) {
      this.focusList[0].className = "hover";
    } else {
      this.focusList[this.count].className = "hover";
    }
  }

  startMove(this.sliderUl, {
    "left": -this.perWidth * this.count
  });
};

Slider.prototype.addBtn = function () {
  var _this2 = this;

  //按钮的结构是通过js添加进去
  this.btnNode = document.createElement("div");
  this.btnNode.className = "btns"; //吧按钮添加到轮播区域

  this.sliderBox.appendChild(this.btnNode);
  this.btnNode.innerHTML = "<span>&lt;</span><span>&gt;</span>"; //取按钮

  this.btns = this.btnNode.children; //左箭头

  this.btns[0].onclick = function () {
    _this2.count -= 2;

    _this2.move();
  }; //右箭头


  this.btns[1].onclick = function () {
    _this2.move();
  };
};

Slider.prototype.addFocus = function () {
  var _this3 = this;

  this.focusNode = document.createElement("ul");
  this.focusNode.className = "numList";
  this.sliderBox.appendChild(this.focusNode); //添加li  不确定图片列表有多少，动态生成

  var str = "";

  for (var i = 0; i < this.length - 1; i++) {
    str += "<li>".concat(i + 1, "</li>");
  }

  this.focusNode.innerHTML = str;
  this.focusList = this.focusNode.children;
  this.focusList[0].className = "hover";

  var _loop = function _loop(_i) {
    _this3.focusList[_i].onmouseover = function () {
      _this3.count = _i - 1;

      _this3.move();
    };
  };

  for (var _i = 0; _i < this.focusList.length; _i++) {
    _loop(_i);
  }
};

Slider.prototype.clear = function () {
  var _this4 = this;

  this.sliderBox.onmouseover = function () {
    clearInterval(_this4.timer);
  };

  this.sliderBox.onmouseout = function () {
    _this4.timer = setInterval(function () {
      _this4.move();
    }, 3000);
  };
};