/**
 * Created by jf on 2016/9/23.
 */

window.onload = function () {
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var lis = slide.getElementsByTagName("li");
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    };
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    };
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;
            });
        }
    }
    assign();
    arrRight.onclick = function () {
        if (flag) {
            flag = false;
            config.push(config.shift());
            assign();
        }
    };
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());
            assign();
        }

    };
    var flag = true;
    //点击当前li 让当前li跑到最前面-
    for (var j = 0; j < lis.length; j++) {
        lis[j].index = j;
        lis[j].onclick = function () {
            while (config[this.index].zIndex !== 4) {
                //只要当前li所对应的配置单中的项目不是层级最高的就继续转
                config.push(config.shift());
            }
            assign();
        };
    }
};