define("js/mail-debug", [ "drag-debug", "tc-debug" ], function(require, exports, module) {
    var drag = document.getElementsByClassName("drag")[0];
    var tc = document.getElementsByClassName("tc")[0];
    var point = document.getElementsByClassName("point")[0];
    //引入要使用到的js文件
    require("drag-debug.js").drag(drag);
    require("tc-debug.js").drag(point, tc);
});
