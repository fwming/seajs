define(function(require,exports,module){
	function　drag(obj){
		var x = null;
		var y = null;
		obj.onmousedown = function(ev){
			x = ev.clientX - obj.offsetLeft;
			y = ev.clientY - obj.offsetTop;
			
			document.onmousemove = function(ev){
				//引入要使用到的文件
				var l = require('rang.js').rang(window.innerWidth-obj.offsetWidth,0,ev.clientX - x);
				var t = require('rang.js').rang(window.innerHeight-obj.offsetHeight,0,ev.clientY - y);
				
				obj.style.left = l + 'px';
				obj.style.top = t + 'px';
			}
			
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}
	}
	
	exports.drag = drag;
})
