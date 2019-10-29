//涓€绾у鑸� 鑷€傚簲瀹�
window.onload = function(){
	var obj = getObj("nav-bar").getElementsByTagName('a');
	var aSize = obj.length;
	var aWidth = Math.floor(100/aSize);
	for(var i=0; i< aSize; i++){
		obj[i].style.width = aWidth + '%';
	}
}
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?728a93c63d6cbcea6814a2289fcfc822";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
//li鐐瑰嚮杩涘叆璇︽儏
function locaUrl(obj){
	window.location.href = obj.getAttribute('url');
}

//js缁戝畾浜嬩欢
function bindEvent(obj, name, fn){
	if(obj.addEventListener){
		obj.addEventListener(name, fn);
	}else if(obj.attachEvent){
		obj.attachEvent(name, fn);
	}
}

//浼犲叆ID锛岃缃垏鎹�
function tab_info(obj){
	var val = obj.substring(obj.indexOf('-') + 1);
	getObj(obj).className = 't-sel';
	var indexVla = val == 1 ? 2 : (val == 2 ? 1 : 1);
	getObj('item-'+indexVla).className = '';
	getObj('tab-'+ val +'').style.display ='block';
	getObj('tab-'+indexVla).style.display ='none';
}

//鑾峰彇瀵硅薄
function getObj(id){
	return document.getElementById(id);
}

//娓呯┖鎼滅储妗�
function clean(){
	document.getElementById("abc").value="";
}

//鎹㈣鎼滅储
function search_up(e){
	var evt = e || window.event;
}
