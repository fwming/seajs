define("js/tc", [ "rang", "rang" ], function(require, exports, module) {
    function drag(obj, parent) {
        var x = null;
        var y = null;
        var h = null;
        var w = null;
        obj.onmousedown = function(ev) {
            x = ev.clientX - obj.offsetLeft;
            y = ev.clientY - obj.offsetTop;
            w = obj.offsetWidth;
            h = obj.offsetHeight;
            document.onmousemove = function(ev) {
                //引入要使用到的文件
                var l = require("rang.js").rang(1e3, 100, ev.clientX - x);
                var t = require("rang.js").rang(500, 100, ev.clientY - y);
                parent.style.width = l + w + "px";
                parent.style.height = t + h + "px";
                obj.style.left = l + "px";
                obj.style.top = t + "px";
            };
            document.onmouseup = function() {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    }
    exports.drag = drag;
});
