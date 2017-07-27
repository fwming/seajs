
define(function(require,exports,module){
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
