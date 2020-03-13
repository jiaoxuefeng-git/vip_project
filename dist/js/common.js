"use strict";

// 商品首页
function $indexLoad() {
  $("#nav-c-all").css({
    "height": 0,
    "cursor": "pointer"
  });
  $("#nav-category").on({
    mouseover: function mouseover() {
      $(this).find("#nav-c-all").css({
        "display": "block"
      }).stop().animate({
        "height": "496px"
      }, 500);
    },
    mouseleave: function mouseleave() {
      $(this).find("#nav-c-all").stop().animate({
        "height": "0px"
      }, 500, function () {
        $("#nav-c-all").css({
          "display": "none"
        });
      });
    }
  });
  $("#nav-c-all").find("li").mouseover(function () {
    $(this).find("div").show().end().siblings("li").find("div").hide();
  });
} // 轮播横幅广告


function $indexLunbo() {
  var count = 0;
  $("#focus-banner-con li").eq(0).stop().animate({
    "opacity": 1,
    "z-index": 2
  }, 200);
  var timer = setInterval(function () {
    fn();
  }, 2000);

  function fn() {
    count++;

    if (count == $("#focus-banner-con li").length) {
      count = 0;
    }

    $("#focus-banner-con li").eq(count).stop().animate({
      "opacity": 1,
      "z-index": 2
    }, 500).siblings("li").stop().animate({
      "opacity": 0,
      "z-index": 1
    }, 500); // console.log(count);
    // 设置角标默认移动

    $("#fbc-trigger li").eq(count).addClass("selected").siblings("li").removeClass("selected");

    if (count == 0) {
      $("#fbc-trigger div").stop().animate({
        "left": "344px"
      }, 500);
    } else {
      $("#fbc-trigger div").stop().animate({
        "left": "573px"
      }, 500);
    }
  }

  $("#focus-banner-con").hover(function () {
    $("#slidebaner_left").stop().animate({
      "left": 0
    }, 300);
    $("#slidebaner_right").stop().animate({
      "right": 0
    }, 300);
    clearInterval(timer);
  }, function () {
    $("#slidebaner_left").stop().animate({
      "left": "-33px"
    }, 300);
    $("#slidebaner_right").stop().animate({
      "right": "-33px"
    }, 300);
    timer = setInterval(function () {
      fn();
    }, 2000);
  });
  $(".fbc-btn").click(function () {
    fn();
  }); // 设置角标点击事件

  $("#fbc-trigger li").hover(function () {
    clearInterval(timer);

    if (count != $(this).index()) {
      fn();
    }
  }, function () {
    timer = setInterval(function () {
      fn();
    }, 2000);
  });
} // 循环加载商品展示


function $indexProload() {
  // let icon = {
  //     jx: "精选",
  //     wmz: "女装",
  //     xb: "鞋包",
  //     manz: "男装",
  //     yd: "运动",
  //     sp: "饰品",
  //     meiz: "美妆",
  //     muy: "母婴",
  //     juja: "居家",
  //     gj: "国际",
  //     seho: "生活"
  // }
  var icon = {
    1: "精选",
    2: "女装",
    3: "鞋包",
    4: "男装",
    5: "运动",
    6: "饰品",
    7: "美妆",
    8: "母婴",
    9: "居家",
    10: "国际",
    11: "生活"
  };
  var str = "";
  var str1 = "";
  var count = 18;

  for (var i in icon) {
    count++;

    if (icon[i] == "精选") {
      str1 = "\n            <div class=\"shop-sort safe\">\n                <div class=\"sort-title\">\n                    <img src=\"../img/topfive".concat(i, ".png\" alt=\"\">\n                </div>\n                \n            ");
    } else {
      str1 = "\n                <div class=\"shop-sort safe\">\n                <div class=\"sort-title\">\n                    <img src=\"../img/topfive".concat(i, ".png\" alt=\"\">\n                    <a href=\"\" class=\"shop-all-btn\">\u5168\u90E8").concat(icon[i], "\u54C1\u724C<i class=\"iconfont\">&#xe678;</i></a>\n                </div>\n                ");
    }

    str += str1;
    str += "\n            <div class=\"sort-content\">\n                    <ul>\n                        <li>\n                            <img src=\"../img/img (".concat(count, ").jpg\" alt=\"\">\n                            <h3>\u79CB\u6C34\u4F0A\u4EBA\u6625\u7115\u65B0\u5973\u88C5\u4E13\u573A</h3>\n                            <p>\n                                <span><i>1.5</i>&nbsp;\u6298\u8D77</span><span>|</span><span>\u5168\u573A\u6298\u4E0A4.6\u6298\u8D77</span>\n                            </p>\n                        </li>\n                        <li>\n                            <img src=\"../img/img (").concat(count, ").jpg\" alt=\"\">\n                            <h3>\u79CB\u6C34\u4F0A\u4EBA\u6625\u7115\u65B0\u5973\u88C5\u4E13\u573A</h3>\n                            <p>\n                                <span><i>1.5</i>&nbsp;\u6298\u8D77</span><span>|</span><span>\u5168\u573A\u6298\u4E0A4.6\u6298\u8D77</span>\n                            </p>\n                        </li>\n                        <li>\n                            <img src=\"../img/img (").concat(count, ").jpg\" alt=\"\">\n                            <h3>\u79CB\u6C34\u4F0A\u4EBA\u6625\u7115\u65B0\u5973\u88C5\u4E13\u573A</h3>\n                            <p>\n                                <span><i>1.5</i>&nbsp;\u6298\u8D77</span><span>|</span><span>\u5168\u573A\u6298\u4E0A4.6\u6298\u8D77</span>\n                            </p>\n                        </li>\n                        <li>\n                            <img src=\"../img/img (").concat(count, ").jpg\" alt=\"\">\n                            <h3>\u79CB\u6C34\u4F0A\u4EBA\u6625\u7115\u65B0\u5973\u88C5\u4E13\u573A</h3>\n                            <p>\n                                <span><i>1.5</i>&nbsp;\u6298\u8D77</span><span>|</span><span>\u5168\u573A\u6298\u4E0A4.6\u6298\u8D77</span>\n                            </p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            ");
  }

  $("#wrap-body").html(str);
}