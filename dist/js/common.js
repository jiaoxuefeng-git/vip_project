"use strict";

// 商品首页
function $indexLoad() {
  $("#nav-c-all").css({
    "height": 0,
    "cursor": "pointer"
  }); // 二级导航展开/收缩

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
  }); // 三级导航

  $("#nav-c-all .all-sab").find("li").on({
    mouseover: function mouseover(e) {
      e.stopPropagation();
      var index = $(this).index(); // 鼠标划上改变对应的二级导航的背景颜色、字体颜色

      $(this).css({
        "background-color": "white"
      }).find("a").css({
        "color": "#f10180"
      }); // 鼠标划上显示三级导航

      $(".category-sab").eq(index).show().siblings(".category-sab").hide();
    },
    mouseleave: function mouseleave() {
      // 鼠标离开改变对应的二级导航的背景颜色、字体颜色
      $(this).css({
        "background-color": "#f10180"
      }).find("a").css({
        "color": "white"
      });
    }
  }); // 三级导航显示

  $(".category-sab").on({
    mouseover: function mouseover(e) {
      e.stopPropagation();
      var index = $(this).index();
      $(this).show();
      $("#nav-c-all li").eq(index - 1).css({
        "background-color": "white"
      }).find("a").css({
        "color": "#f10180"
      });
    },
    mouseleave: function mouseleave() {
      var index = $(this).index();
      $("#nav-c-all li").eq(index - 1).css({
        "background-color": "#f10180"
      }).find("a").css({
        "color": "white"
      });
    }
  });
} // 三级导航


function $indexNav() {
  var str = "";

  for (var i = 1; i <= 11; i++) {
    str += "\n        <div class=\"category-sab\">\n                                <dl>\n                                    <dt>\n                                    <!-- 1 -->\n                                    <div>\n                                        <span>\u51AC\u5B63\u70ED\u5356</span><i class=\"iconfont\">&#xe639;</i>\n                                        <ul>\n                                            <li><a href=\"#\">\u5927\u8863".concat(i, "</a></li>\n                                            <li><a href=\"#\">\u7FBD\u7ED2\u670D").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u6BDB\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u8FDE\u8863\u88D9").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u76AE\u8863\u76AE\u8349").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u536B\u8863").concat(i, "</a></li>\n                                        </ul>\n                                    </div>\n                                    <!-- 2 -->\n                                    <div>\n                                        <span>\u51AC\u5B63\u70ED\u5356</span><i class=\"iconfont\">&#xe639;</i>\n                                        <ul>\n                                            <li><a href=\"#\">\u5927\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u7FBD\u7ED2\u670D").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u6BDB\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u8FDE\u8863\u88D9").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u76AE\u8863\u76AE\u8349").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u536B\u8863").concat(i, "</a></li>\n                                        </ul>\n                                    </div>\n                                    <!-- 3 -->\n                                    <div>\n                                        <span>\u51AC\u5B63\u70ED\u5356</span><i class=\"iconfont\">&#xe639;</i>\n                                        <ul>\n                                            <li><a href=\"#\">\u5927\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u7FBD\u7ED2\u670D").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u6BDB\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u8FDE\u8863\u88D9").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u76AE\u8863\u76AE\u8349").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u536B\u8863").concat(i, "</a></li>\n                                        </ul>\n                                    </div>\n                                    <!-- 4 -->\n                                    <div>\n                                        <span>\u51AC\u5B63\u70ED\u5356</span><i class=\"iconfont\">&#xe639;</i>\n                                        <ul>\n                                            <li><a href=\"#\">\u5927\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u7FBD\u7ED2\u670D").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u6BDB\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u8FDE\u8863\u88D9").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u76AE\u8863\u76AE\u8349").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u536B\u8863").concat(i, "</a></li>\n                                        </ul>\n                                    </div>\n                                    <!-- 5 -->\n                                    <div>\n                                        <span>\u51AC\u5B63\u70ED\u5356</span><i class=\"iconfont\">&#xe639;</i>\n                                        <ul>\n                                            <li><a href=\"#\">\u5927\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u7FBD\u7ED2\u670D").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u6BDB\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u8FDE\u8863\u88D9").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u76AE\u8863\u76AE\u8349").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u536B\u8863").concat(i, "</a></li>\n                                        </ul>\n                                    </div>\n                                    <!-- 6 -->\n                                    <div>\n                                        <span>\u51AC\u5B63\u70ED\u5356</span><i class=\"iconfont\">&#xe639;</i>\n                                        <ul>\n                                            <li><a href=\"#\">\u5927\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u7FBD\u7ED2\u670D").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u6BDB\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u8FDE\u8863\u88D9").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u76AE\u8863\u76AE\u8349").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u536B\u8863").concat(i, "</a></li>\n                                        </ul>\n                                    </div>\n                                    <!-- 7 -->\n                                    <div>\n                                        <span>\u51AC\u5B63\u70ED\u5356</span><i class=\"iconfont\">&#xe639;</i>\n                                        <ul>\n                                            <li><a href=\"#\">\u5927\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u7FBD\u7ED2\u670D").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u6BDB\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u8FDE\u8863\u88D9").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u76AE\u8863\u76AE\u8349").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u536B\u8863").concat(i, "</a></li>\n                                        </ul>\n                                    </div>\n                                    <!-- 8 -->\n                                    <div>\n                                        <span>\u51AC\u5B63\u70ED\u5356</span><i class=\"iconfont\">&#xe639;</i>\n                                        <ul>\n                                            <li><a href=\"#\">\u5927\u8863</a></li>\n                                            <li><a href=\"#\">\u7FBD\u7ED2\u670D</a></li>\n                                            <li><a href=\"#\">\u6BDB\u8863</a></li>\n                                            <li><a href=\"#\">\u8FDE\u8863\u88D9</a></li>\n                                            <li><a href=\"#\">\u76AE\u8863\u76AE\u8349</a></li>\n                                            <li><a href=\"#\">\u536B\u8863</a></li>\n                                            <li><a href=\"#\">\u5927\u8863</a></li>\n                                            <li><a href=\"#\">\u7FBD\u7ED2\u670D</a></li>\n                                            <li><a href=\"#\">\u6BDB\u8863</a></li>\n                                            <li><a href=\"#\">\u8FDE\u8863\u88D9</a></li>\n                                            <li><a href=\"#\">\u76AE\u8863\u76AE\u8349</a></li>\n                                            <li><a href=\"#\">\u536B\u8863</a></li>\n                                            <li><a href=\"#\">\u5927\u8863</a></li>\n                                            <li><a href=\"#\">\u7FBD\u7ED2\u670D</a></li>\n                                            <li><a href=\"#\">\u6BDB\u8863</a></li>\n                                            <li><a href=\"#\">\u8FDE\u8863\u88D9</a></li>\n                                            <li><a href=\"#\">\u76AE\u8863\u76AE\u8349</a></li>\n                                            <li><a href=\"#\">\u536B\u8863</a></li>\n                                        </ul>\n                                    </div>\n                                    <!-- 9 -->\n                                    <div>\n                                        <span>\u51AC\u5B63\u70ED\u5356</span><i class=\"iconfont\">&#xe639;</i>\n                                        <ul>\n                                            <li><a href=\"#\">\u5927\u8863</a></li>\n                                            <li><a href=\"#\">\u7FBD\u7ED2\u670D</a></li>\n                                            <li><a href=\"#\">\u6BDB\u8863</a></li>\n                                            <li><a href=\"#\">\u8FDE\u8863\u88D9</a></li>\n                                            <li><a href=\"#\">\u76AE\u8863\u76AE\u8349</a></li>\n                                            <li><a href=\"#\">\u536B\u8863</a></li>\n                                            <li><a href=\"#\">\u5927\u8863</a></li>\n                                            <li><a href=\"#\">\u7FBD\u7ED2\u670D</a></li>\n                                            <li><a href=\"#\">\u6BDB\u8863</a></li>\n                                            <li><a href=\"#\">\u8FDE\u8863\u88D9</a></li>\n                                            <li><a href=\"#\">\u76AE\u8863\u76AE\u8349</a></li>\n                                            <li><a href=\"#\">\u536B\u8863</a></li>\n                                            <li><a href=\"#\">\u5927\u8863</a></li>\n                                            <li><a href=\"#\">\u7FBD\u7ED2\u670D</a></li>\n                                            <li><a href=\"#\">\u6BDB\u8863</a></li>\n                                            <li><a href=\"#\">\u8FDE\u8863\u88D9</a></li>\n                                            <li><a href=\"#\">\u76AE\u8863\u76AE\u8349</a></li>\n                                            <li><a href=\"#\">\u536B\u8863</a></li>\n                                        </ul>\n                                    </div>\n                                    <!-- 10 -->\n                                    <div>\n                                        <span>\u51AC\u5B63\u70ED\u5356</span><i class=\"iconfont\">&#xe639;</i>\n                                        <ul>\n                                            <li><a href=\"#\">\u5927\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u7FBD\u7ED2\u670D").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u6BDB\u8863").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u8FDE\u8863\u88D9").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u76AE\u8863\u76AE\u8349").concat(i, "</a></li>\n                                            <li><a href=\"#\">\u536B\u8863").concat(i, "</a></li>\n                                        </ul>\n                                    </div>  \n\n                                    </dt>\n                                    <dd>\n                                        <h6>\u54C1\u724C\u63A8\u8350</h6>\n                                        <div>\n                                            <ul>\n                                                <li><a href=\"#\"><img src=\"../img/img (42).png\"\n                                                            alt=\"\"><span>\u690D\u7F8E\u6751</span></a></li>\n                                                <li><a href=\"#\"><img src=\"../img/img (42).png\"\n                                                            alt=\"\"><span>\u690D\u7F8E\u6751</span></a></li>\n                                                <li><a href=\"#\"><img src=\"../img/img (42).png\"\n                                                            alt=\"\"><span>\u690D\u7F8E\u6751</span></a></li>\n                                                <li><a href=\"#\"><img src=\"../img/img (42).png\"\n                                                            alt=\"\"><span>\u690D\u7F8E\u6751</span></a></li>\n                                                <li><a href=\"#\"><img src=\"../img/img (42).png\"\n                                                            alt=\"\"><span>\u690D\u7F8E\u6751</span></a></li>\n                                                <li><a href=\"#\"><img src=\"../img/img (42).png\"\n                                                            alt=\"\"><span>\u690D\u7F8E\u6751</span></a></li>\n                                                <li><a href=\"#\"><img src=\"../img/img (42).png\"\n                                                            alt=\"\"><span>\u690D\u7F8E\u6751</span></a></li>\n                                                <li><a href=\"#\"><img src=\"../img/img (42).png\"\n                                                            alt=\"\"><span>\u690D\u7F8E\u6751</span></a></li>\n                                                <li><a href=\"#\"><img src=\"../img/img (42).png\"\n                                                            alt=\"\"><span>\u690D\u7F8E\u6751</span></a></li>\n                                            </ul>\n                                        </div>\n                                    </dd>\n                                </dl>\n                            </div>\n        ");
  }

  $("#nav-c-all").append(str);
} // 网页左边导航 leftnav


function $indexLeftnav() {
  $("#leftnav p").click(function () {
    // $(this).toggleClass("active");
    $(this).addClass("active").siblings().removeClass("active");
  }); // });
  // var flag = true;
  // $(window).scroll(function () {
  //     if (flag) {
  //         let clientTop = $("#leftnav").offset().top;
  //         let scroH = $(this).scrollTop();
  //         console.log(clientTop);
  //         if (scroH > clientTop) {
  //             $("#leftnav").css({ "position": "fixed"});
  //         } else{
  //             $("#leftnav").css({ "position": "absolute"});
  //         }
  //     }
  // });
} // 精选品牌抢购时间


function $sortTime() {
  var timer;

  function time() {
    var date = new Date(); // 获取当前时间距离----毫秒数

    var m1 = date.getTime(); // 设置为当前天凌晨0:0:0

    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0); // 获取当前天凌晨距离----毫秒数

    var m0 = date.getTime(); // 获取距离明天的总秒数

    var m = 60 * 60 * 24 - (m1 - m0) / 1000; // 秒数

    var seconds = m % 60; // 分数 （总秒数 / 一分钟的秒数）% 60分钟 

    var minutes = parseInt(m / 60 % 60); // 小时（总的秒数 / 一个小时的秒数） % 24小时

    var hours = parseInt(m / (60 * 60) % 24);
    timer = setInterval(time, 1000);

    if (seconds <= 0) {
      clearInterval(timer);
      return;
    }

    $("#sp-time .sp-time-H").html(hours);
    $("#sp-time .sp-time-M").html(minutes);
    $("#sp-time .sp-time-S").html(seconds);
  }

  setInterval(time, 1000);
} // 轮播横幅广告


function $indexLunbo() {
  var count = 0;
  $("#focus-banner-con li").eq(0).stop().animate({
    "opacity": 1,
    "z-index": 2
  }, 200);
  var timer = setInterval(function () {
    fn();
  }, 8000);

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
    }, 8000);
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
    }, 8000);
  });
} // 循环加载商品展示


function $indexProload() {
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
      str1 = "\n            <div class=\"shop-sort safe\">\n                <div class=\"sort-title\">\n                    <img src=\"../img/topfive".concat(i, ".png\" alt=\"\">\n                    <div class=\"sp-time\" id=\"sp-time\">    \n                    <em class=\"sp-time-H\">15</em>\n                    <em class=\"sp-time-M\">50</em>\n                    <em class=\"sp-time-S\">18</em>\n                    </div>\n                </div>\n                \n            ");
    } else {
      str1 = "\n                <div class=\"shop-sort safe\">\n                <div class=\"sort-title\">\n                    <img src=\"../img/topfive".concat(i, ".png\" alt=\"\">\n                    <a href=\"\" class=\"shop-all-btn\">\u5168\u90E8").concat(icon[i], "\u54C1\u724C<i class=\"iconfont\">&#xe678;</i></a>\n                </div>\n                ");
    }

    str += str1;
    str += "\n            <div class=\"sort-content\">\n                    <ul>\n                        <li>\n                            <img src=\"../img/img (".concat(count, ").jpg\" alt=\"\">\n                            <h3>\u79CB\u6C34\u4F0A\u4EBA\u6625\u7115\u65B0\u5973\u88C5\u4E13\u573A</h3>\n                            <p>\n                                <span><i>1.5</i>&nbsp;\u6298\u8D77</span><span>|</span><span>\u5168\u573A\u6298\u4E0A4.6\u6298\u8D77</span>\n                            </p>\n                        </li>\n                        <li>\n                            <img src=\"../img/img (").concat(count, ").jpg\" alt=\"\">\n                            <h3>\u79CB\u6C34\u4F0A\u4EBA\u6625\u7115\u65B0\u5973\u88C5\u4E13\u573A</h3>\n                            <p>\n                                <span><i>1.5</i>&nbsp;\u6298\u8D77</span><span>|</span><span>\u5168\u573A\u6298\u4E0A4.6\u6298\u8D77</span>\n                            </p>\n                        </li>\n                        <li>\n                            <img src=\"../img/img (").concat(count, ").jpg\" alt=\"\">\n                            <h3>\u79CB\u6C34\u4F0A\u4EBA\u6625\u7115\u65B0\u5973\u88C5\u4E13\u573A</h3>\n                            <p>\n                                <span><i>1.5</i>&nbsp;\u6298\u8D77</span><span>|</span><span>\u5168\u573A\u6298\u4E0A4.6\u6298\u8D77</span>\n                            </p>\n                        </li>\n                        <li>\n                            <img src=\"../img/img (").concat(count, ").jpg\" alt=\"\">\n                            <h3>\u79CB\u6C34\u4F0A\u4EBA\u6625\u7115\u65B0\u5973\u88C5\u4E13\u573A</h3>\n                            <p>\n                                <span><i>1.5</i>&nbsp;\u6298\u8D77</span><span>|</span><span>\u5168\u573A\u6298\u4E0A4.6\u6298\u8D77</span>\n                            </p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            ");
  }

  $("#wrap-body").append(str);
  var comingStr = "\n        <div class=\"shop-coming safe\">\n            <div class=\"coming-title\">\n                <img src=\"../img/shop-coming.png\" alt=\"\">\n            </div>\n            <div class=\"sort-coming\">\n                <ul id=\"shopList\">\n                </ul>\n            </div>\n            <div class=\"more-coming\">\n                <span>\u67E5\u770B\u66F4\u591A\u9884\u544A\u6863\u671F</span>\n            </div>\n        </div>\n    ";
  $("#wrap-body").append(comingStr);
} // 明日预告


function $shopComing() {
  var str = "";

  for (var i = 0; i < 15; i++) {
    str += "\n        <li>\n            <img src=\"../img/img (".concat(300 + i, ").jpg\">\n            <p>\n                <a href=\"#\">\u552F\u5DF2VEE\u5973\u88C5-\u6700\u540E\u75AF\u62A2\u4E13\u573A</a>\n                <span><i>3</i>\u6298\u5C01\u9876</span>\n            </p>\n            <em>\u5168\u573A\u6298\u4E0A3.9\u6298\u8D77</em>\n        </li>\n    ");
  }

  $("#shopList").html(str);
}