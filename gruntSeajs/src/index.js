define('./src/index.js',['drag.js','tc.js'],function(require,exports,module){
	
	var drag = document.getElementsByClassName('drag')[0];
	
	var tc = document.getElementsByClassName('tc')[0];
	var point = document.getElementsByClassName('point')[0];
	
	//引入要使用到的js文件
	require('drag.js').drag(drag);
	require('tc.js').drag(point,tc);
	
})

define('rang.js',[],function(require,exports,module){
	//限制范围，在最大与最小之间
	function rang(max,min,now){
		if(now >= max){
			return max;
		}else if(now <= min){
			return min;
		}else{
			return now;
		}
	}
	//将方法返回出去
	exports.rang = rang;
})

define('drag.js',[],function(require,exports,module){
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

define('tc.js',['rang.js'],function(require,exports,module){
	function drag(obj,parent){
		var x = null;
		var y = null;
		var h = null;
		var w = null;
		obj.onmousedown = function(ev){
			x = ev.clientX - obj.offsetLeft;
			y = ev.clientY - obj.offsetTop;
			
			w = obj.offsetWidth;
			h = obj.offsetHeight;
			
			document.onmousemove = function(ev){
				
				//引入要使用到的文件
				var l = require('rang.js').rang(1000,100,ev.clientX - x);
				var t = require('rang.js').rang(500,100,ev.clientY - y);
				
				parent.style.width = l + w + 'px';
				parent.style.height = t + h + 'px';
				
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
