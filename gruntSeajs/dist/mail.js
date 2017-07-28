define("js/mail", [ "drag", "tc" ], function(require, exports, module) {
    var drag = document.getElementsByClassName("drag")[0];
    var tc = document.getElementsByClassName("tc")[0];
    var point = document.getElementsByClassName("point")[0];
    //引入要使用到的js文件
    require("drag.js").drag(drag);
    require("tc.js").drag(point, tc);
});
