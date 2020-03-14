
// 商品首页
function $indexLoad() {



    $("#nav-c-all").css({ "height": 0, "cursor": "pointer" });
    // 二级导航展开/收缩
    $("#nav-category").on({
        mouseover: function () {
            $(this).find("#nav-c-all").css({ "display": "block" }).stop().animate({ "height": "496px" }, 500);

        }
        ,
        mouseleave: function () {
            $(this).find("#nav-c-all").stop().animate({ "height": "0px" }, 500, function () {
                $("#nav-c-all").css({ "display": "none" });
            });
        }
    });
    // 三级导航
    $("#nav-c-all .all-sab").find("li").on({
        mouseover: function (e) {
            e.stopPropagation();
            let index = $(this).index();
            // 鼠标划上改变对应的二级导航的背景颜色、字体颜色
            $(this).css({ "background-color": "white" }).find("a").css({ "color": "#f10180" });
            // 鼠标划上显示三级导航
            $(".category-sab")
                .eq(index)
                .show()
                .siblings(".category-sab")
                .hide();
        },
        mouseleave: function () {
            // 鼠标离开改变对应的二级导航的背景颜色、字体颜色
            $(this).css({ "background-color": "#f10180" }).find("a").css({ "color": "white" });
        }
    });
    // 三级导航显示
    $(".category-sab").on({
        mouseover: function (e) {
            e.stopPropagation();
            let index = $(this).index();
            $(this).show();
            $("#nav-c-all li").eq(index - 1).css({ "background-color": "white" }).find("a").css({ "color": "#f10180" });
        },
        mouseleave: function () {
            let index = $(this).index();
            $("#nav-c-all li").eq(index - 1).css({ "background-color": "#f10180" }).find("a").css({ "color": "white" });
        }
    });

}

// 三级导航
function $indexNav() {
    let str = "";
    for (let i = 1; i <= 11; i++) {
        str += `
        <div class="category-sab">
                                <dl>
                                    <dt>
                                    <!-- 1 -->
                                    <div>
                                        <span>冬季热卖</span><i class="iconfont">&#xe639;</i>
                                        <ul>
                                            <li><a href="#">大衣${i}</a></li>
                                            <li><a href="#">羽绒服${i}</a></li>
                                            <li><a href="#">毛衣${i}</a></li>
                                            <li><a href="#">连衣裙${i}</a></li>
                                            <li><a href="#">皮衣皮草${i}</a></li>
                                            <li><a href="#">卫衣${i}</a></li>
                                        </ul>
                                    </div>
                                    <!-- 2 -->
                                    <div>
                                        <span>冬季热卖</span><i class="iconfont">&#xe639;</i>
                                        <ul>
                                            <li><a href="#">大衣${i}</a></li>
                                            <li><a href="#">羽绒服${i}</a></li>
                                            <li><a href="#">毛衣${i}</a></li>
                                            <li><a href="#">连衣裙${i}</a></li>
                                            <li><a href="#">皮衣皮草${i}</a></li>
                                            <li><a href="#">卫衣${i}</a></li>
                                        </ul>
                                    </div>
                                    <!-- 3 -->
                                    <div>
                                        <span>冬季热卖</span><i class="iconfont">&#xe639;</i>
                                        <ul>
                                            <li><a href="#">大衣${i}</a></li>
                                            <li><a href="#">羽绒服${i}</a></li>
                                            <li><a href="#">毛衣${i}</a></li>
                                            <li><a href="#">连衣裙${i}</a></li>
                                            <li><a href="#">皮衣皮草${i}</a></li>
                                            <li><a href="#">卫衣${i}</a></li>
                                        </ul>
                                    </div>
                                    <!-- 4 -->
                                    <div>
                                        <span>冬季热卖</span><i class="iconfont">&#xe639;</i>
                                        <ul>
                                            <li><a href="#">大衣${i}</a></li>
                                            <li><a href="#">羽绒服${i}</a></li>
                                            <li><a href="#">毛衣${i}</a></li>
                                            <li><a href="#">连衣裙${i}</a></li>
                                            <li><a href="#">皮衣皮草${i}</a></li>
                                            <li><a href="#">卫衣${i}</a></li>
                                        </ul>
                                    </div>
                                    <!-- 5 -->
                                    <div>
                                        <span>冬季热卖</span><i class="iconfont">&#xe639;</i>
                                        <ul>
                                            <li><a href="#">大衣${i}</a></li>
                                            <li><a href="#">羽绒服${i}</a></li>
                                            <li><a href="#">毛衣${i}</a></li>
                                            <li><a href="#">连衣裙${i}</a></li>
                                            <li><a href="#">皮衣皮草${i}</a></li>
                                            <li><a href="#">卫衣${i}</a></li>
                                        </ul>
                                    </div>
                                    <!-- 6 -->
                                    <div>
                                        <span>冬季热卖</span><i class="iconfont">&#xe639;</i>
                                        <ul>
                                            <li><a href="#">大衣${i}</a></li>
                                            <li><a href="#">羽绒服${i}</a></li>
                                            <li><a href="#">毛衣${i}</a></li>
                                            <li><a href="#">连衣裙${i}</a></li>
                                            <li><a href="#">皮衣皮草${i}</a></li>
                                            <li><a href="#">卫衣${i}</a></li>
                                        </ul>
                                    </div>
                                    <!-- 7 -->
                                    <div>
                                        <span>冬季热卖</span><i class="iconfont">&#xe639;</i>
                                        <ul>
                                            <li><a href="#">大衣${i}</a></li>
                                            <li><a href="#">羽绒服${i}</a></li>
                                            <li><a href="#">毛衣${i}</a></li>
                                            <li><a href="#">连衣裙${i}</a></li>
                                            <li><a href="#">皮衣皮草${i}</a></li>
                                            <li><a href="#">卫衣${i}</a></li>
                                        </ul>
                                    </div>
                                    <!-- 8 -->
                                    <div>
                                        <span>冬季热卖</span><i class="iconfont">&#xe639;</i>
                                        <ul>
                                            <li><a href="#">大衣</a></li>
                                            <li><a href="#">羽绒服</a></li>
                                            <li><a href="#">毛衣</a></li>
                                            <li><a href="#">连衣裙</a></li>
                                            <li><a href="#">皮衣皮草</a></li>
                                            <li><a href="#">卫衣</a></li>
                                            <li><a href="#">大衣</a></li>
                                            <li><a href="#">羽绒服</a></li>
                                            <li><a href="#">毛衣</a></li>
                                            <li><a href="#">连衣裙</a></li>
                                            <li><a href="#">皮衣皮草</a></li>
                                            <li><a href="#">卫衣</a></li>
                                            <li><a href="#">大衣</a></li>
                                            <li><a href="#">羽绒服</a></li>
                                            <li><a href="#">毛衣</a></li>
                                            <li><a href="#">连衣裙</a></li>
                                            <li><a href="#">皮衣皮草</a></li>
                                            <li><a href="#">卫衣</a></li>
                                        </ul>
                                    </div>
                                    <!-- 9 -->
                                    <div>
                                        <span>冬季热卖</span><i class="iconfont">&#xe639;</i>
                                        <ul>
                                            <li><a href="#">大衣</a></li>
                                            <li><a href="#">羽绒服</a></li>
                                            <li><a href="#">毛衣</a></li>
                                            <li><a href="#">连衣裙</a></li>
                                            <li><a href="#">皮衣皮草</a></li>
                                            <li><a href="#">卫衣</a></li>
                                            <li><a href="#">大衣</a></li>
                                            <li><a href="#">羽绒服</a></li>
                                            <li><a href="#">毛衣</a></li>
                                            <li><a href="#">连衣裙</a></li>
                                            <li><a href="#">皮衣皮草</a></li>
                                            <li><a href="#">卫衣</a></li>
                                            <li><a href="#">大衣</a></li>
                                            <li><a href="#">羽绒服</a></li>
                                            <li><a href="#">毛衣</a></li>
                                            <li><a href="#">连衣裙</a></li>
                                            <li><a href="#">皮衣皮草</a></li>
                                            <li><a href="#">卫衣</a></li>
                                        </ul>
                                    </div>
                                    <!-- 10 -->
                                    <div>
                                        <span>冬季热卖</span><i class="iconfont">&#xe639;</i>
                                        <ul>
                                            <li><a href="#">大衣${i}</a></li>
                                            <li><a href="#">羽绒服${i}</a></li>
                                            <li><a href="#">毛衣${i}</a></li>
                                            <li><a href="#">连衣裙${i}</a></li>
                                            <li><a href="#">皮衣皮草${i}</a></li>
                                            <li><a href="#">卫衣${i}</a></li>
                                        </ul>
                                    </div>  

                                    </dt>
                                    <dd>
                                        <h6>品牌推荐</h6>
                                        <div>
                                            <ul>
                                                <li><a href="#"><img src="../img/img (42).png"
                                                            alt=""><span>植美村</span></a></li>
                                                <li><a href="#"><img src="../img/img (42).png"
                                                            alt=""><span>植美村</span></a></li>
                                                <li><a href="#"><img src="../img/img (42).png"
                                                            alt=""><span>植美村</span></a></li>
                                                <li><a href="#"><img src="../img/img (42).png"
                                                            alt=""><span>植美村</span></a></li>
                                                <li><a href="#"><img src="../img/img (42).png"
                                                            alt=""><span>植美村</span></a></li>
                                                <li><a href="#"><img src="../img/img (42).png"
                                                            alt=""><span>植美村</span></a></li>
                                                <li><a href="#"><img src="../img/img (42).png"
                                                            alt=""><span>植美村</span></a></li>
                                                <li><a href="#"><img src="../img/img (42).png"
                                                            alt=""><span>植美村</span></a></li>
                                                <li><a href="#"><img src="../img/img (42).png"
                                                            alt=""><span>植美村</span></a></li>
                                            </ul>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
        `;
    }
    $("#nav-c-all").append(str);


}

// 网页左边导航 leftnav
function $indexLeftnav() {
    $("#leftnav p").click(function () {
        // $(this).toggleClass("active");
        $(this).addClass("active").siblings().removeClass("active");
    });

    // });
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
}

// 精选品牌抢购时间
function $sortTime() {

    let timer;
    function time() {
        let date = new Date();
        // 获取当前时间距离----毫秒数
        let m1 = date.getTime();
        // 设置为当前天凌晨0:0:0
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        // 获取当前天凌晨距离----毫秒数
        let m0 = date.getTime();
        // 获取距离明天的总秒数
        let m = 60 * 60 * 24 - (m1 - m0) / 1000;
        // 秒数
        let seconds = m % 60;
        // 分数 （总秒数 / 一分钟的秒数）% 60分钟 
        let minutes = parseInt(m / 60 % 60);
        // 小时（总的秒数 / 一个小时的秒数） % 24小时
        let hours = parseInt(m / (60 * 60) % 24);
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
}

// 轮播横幅广告
function $indexLunbo() {
    var count = 0;

    $("#focus-banner-con li").eq(0)
        .stop().animate({ "opacity": 1, "z-index": 2 }, 200)

    var timer = setInterval(function () {
        fn();
    }, 8000);

    function fn() {
        count++;
        if (count == $("#focus-banner-con li").length) {
            count = 0;
        }
        $("#focus-banner-con li").eq(count).stop().animate({ "opacity": 1, "z-index": 2 }, 500)
            .siblings("li").stop().animate({ "opacity": 0, "z-index": 1 }, 500)

        // console.log(count);

        // 设置角标默认移动
        $("#fbc-trigger li").eq(count).addClass("selected").siblings("li").removeClass("selected");

        if (count == 0) {
            $("#fbc-trigger div").stop().animate({ "left": "344px" }, 500);
        } else {
            $("#fbc-trigger div").stop().animate({ "left": "573px" }, 500);
        }

    }

    $("#focus-banner-con").hover(function () {
        $("#slidebaner_left").stop().animate({ "left": 0 }, 300);
        $("#slidebaner_right").stop().animate({ "right": 0 }, 300);

        clearInterval(timer);

    }, function () {
        $("#slidebaner_left").stop().animate({ "left": "-33px" }, 300);
        $("#slidebaner_right").stop().animate({ "right": "-33px" }, 300);

        timer = setInterval(function () {
            fn();
        }, 8000);
    });

    $(".fbc-btn").click(function () {
        fn();
    });

    // 设置角标点击事件
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
}

// 循环加载商品展示
function $indexProload() {
    let icon = {
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
    }
    let str = "";
    let str1 = "";
    let count = 18;
    for (let i in icon) {
        count++;
        if (icon[i] == "精选") {
            str1 =
                `
            <div class="shop-sort safe">
                <div class="sort-title">
                    <img src="../img/topfive${i}.png" alt="">
                    <div class="sp-time" id="sp-time">    
                    <em class="sp-time-H">15</em>
                    <em class="sp-time-M">50</em>
                    <em class="sp-time-S">18</em>
                    </div>
                </div>
                
            `;
        } else {
            str1 =
                `
                <div class="shop-sort safe">
                <div class="sort-title">
                    <img src="../img/topfive${i}.png" alt="">
                    <a href="" class="shop-all-btn">全部${icon[i]}品牌<i class="iconfont">&#xe678;</i></a>
                </div>
                `
        }

        str += str1;

        str +=
            `
            <div class="sort-content">
                    <ul>
                        <li>
                            <img src="../img/img (${count}).jpg" alt="">
                            <h3>秋水伊人春焕新女装专场</h3>
                            <p>
                                <span><i>1.5</i>&nbsp;折起</span><span>|</span><span>全场折上4.6折起</span>
                            </p>
                        </li>
                        <li>
                            <img src="../img/img (${count}).jpg" alt="">
                            <h3>秋水伊人春焕新女装专场</h3>
                            <p>
                                <span><i>1.5</i>&nbsp;折起</span><span>|</span><span>全场折上4.6折起</span>
                            </p>
                        </li>
                        <li>
                            <img src="../img/img (${count}).jpg" alt="">
                            <h3>秋水伊人春焕新女装专场</h3>
                            <p>
                                <span><i>1.5</i>&nbsp;折起</span><span>|</span><span>全场折上4.6折起</span>
                            </p>
                        </li>
                        <li>
                            <img src="../img/img (${count}).jpg" alt="">
                            <h3>秋水伊人春焕新女装专场</h3>
                            <p>
                                <span><i>1.5</i>&nbsp;折起</span><span>|</span><span>全场折上4.6折起</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            `;
    }

    $("#wrap-body").append(str);

    let comingStr = `
        <div class="shop-coming safe">
            <div class="coming-title">
                <img src="../img/shop-coming.png" alt="">
            </div>
            <div class="sort-coming">
                <ul id="shopList">
                </ul>
            </div>
            <div class="more-coming">
                <span>查看更多预告档期</span>
            </div>
        </div>
    `;

    $("#wrap-body").append(comingStr);

}

// 明日预告
function $shopComing() {
    let str = "";

    for (let i = 0; i < 15; i++) {
        str += `
        <li>
            <img src="../img/img (${300 + i}).jpg">
            <p>
                <a href="#">唯已VEE女装-最后疯抢专场</a>
                <span><i>3</i>折封顶</span>
            </p>
            <em>全场折上3.9折起</em>
        </li>
    `;
    }
    $("#shopList").html(str);
}









