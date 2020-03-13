"use strict";

$(function () {
  function createRamdom(start, end, flag) {
    var num = "";

    if (flag) {
      for (var i = 0; i < 5; i++) {
        num += parseInt(Math.random() * (end - start + 1)) + start;
      }
    } else {
      num += parseInt(Math.random() * (end - start + 1)) + start;
    }

    return num;
  } // 直接跳转登录


  $("#to-login").click(function () {
    location.href = "login.html";
  }); // 获取验证码

  $("#i-btn").click(function () {
    var $num = createRamdom(0, 9, true);
    $("#password").val($num);
  }); // 注册按钮按下

  $("#reg-btn").click(function () {
    console.log("aaaaaa"); //先验证用户名是否重名

    $.get("http://jx.xuzhixiang.top/ap/api/checkname.php", {
      username: $("#username").val()
    }, function (data) {
      console.log(data);

      if (data.code == 1) {
        // 用户名可用 注册接口
        $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
          username: $("#username").val(),
          password: $("#password").val()
        }, function (data) {
          console.log(data);

          if (data.code == 1) {// 注册成功，跳转到登录页面
            // location.href = "login.html";
          }
        });
      } else {
        //用户名不可用
        alert("用户名重名");
      }
    });
  }); // 登录按钮按下

  $("#longin-btn").click(function () {
    $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
      username: $("#username").val(),
      password: $("#password").val()
    }, function (data) {
      console.log(data); // 将uid跟token存到location中 

      var uid = data["data"]["id"];
      var token = data["data"]["token"];
      localStorage.setItem("uid", uid);
      localStorage.setItem("token", token); // location.href = "vipIndex.html";
      // 向后台添加商品 
      // for (let i = 0; i < 10; i++) {
      //   $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php",
      //     {
      //       pname: "唯品会商品" + "_" + i,
      //       pprice: createRamdom(30, 10000, false),
      //       pimg: "../img/goods"+(i+1)+".jpg",
      //       pdesc: "这是一件物美价廉的商品",
      //       uid: localStorage.getItem("uid")
      //     }).then(data => {
      //       console.log(data);
      //     });
      // }
    });
  });
});