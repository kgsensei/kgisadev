String.prototype.toBool=function(){
	if(this.toLowerCase()=='true'){return true}else{return false}
}
String.prototype.toPrice=function(){
    var string=this
    if(string[0]!='$')string='$'+string
	if(string.indexOf('.')==-1)string=string+'.00'
	if(string.split('.')[1].length==1)string=string+'0'
	return string
}
String.prototype.toFloat=function(){return this*1}
String.prototype.toInt=function(){return this*1}
String.prototype.isUpperCase=function(){
	if(this.toUpperCase()==this){return true}else{return false}
}
String.prototype.isLowerCase=function(){if(this.toLowerCase()==this){
	return true}else{return false}
}
String.prototype.invertCase=function(){
    var string=this
    var endRes=""
    for(i=0;i<string.length;i++){
        if(string[i].isUpperCase())endRes=endRes+string[i].toLowerCase()
        else endRes=endRes+string[i].toUpperCase()
    }
    return endRes
}
String.prototype.isEmpty=function(){
    var string=this
    if(string.replaceAll(/ /g,'')=='')return true
    else return false
}
String.prototype.removeSpace=function(){
	return this.replaceAll(/ /g,'')
}
String.prototype.corrupt=function(amount){
	var string=this
	var replaceCharacters=["!","~","@","#","$","%","&","+","=","-",";",":","[","{","]","}","<",">","/","?","|"]
	var endRes=""
	for(i=0;i<string.length;i++){
		var number=Math.floor(Math.random()*((100*amount)/100-0+1))
		if(number==1){
			endRes=endRes+replaceCharacters[Math.floor(Math.random()*replaceCharacters.length)]
		}else{
			endRes=endRes+string[i]
		}
	}
	return endRes
}
String.prototype.loop=function(times){
	var addString=this
	var string=this
	for(let i=0;i<times;i++){
		string=string+addString
	}
	return string
}
Number.prototype.round=function(){
	return Math.round(this)
}
function kg(){}
kg.prototype={
	page:{
		'width':window.innerWidth,
		'height':window.innerHeight,
		'focused':true,
		'location':window.location.href,
		'hostname':window.location.host,
		'path':window.location.pathname
	},
	client:{
		'cookiesEnabled':window.navigator.cookieEnabled,
		'userAgent':window.navigator.userAgent,
		'webdriver':window.navigator.webdriver
	},
	uuidv4:function(){
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){
			var r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8)
			return v.toString(16)
		})
	},
	sleep:function(ms){return new Promise(resolve=>setTimeout(resolve,ms))},
	randomInt:function(min,max){return Math.floor(Math.random()*(max-min+1))+min},
	openLink:function(url){window.open(url,'_blank')},
	randomItem:function(array){return array[Math.floor(Math.random()*array.length)]},
	isEven:function(number){return(number%2==0)}
}
kg=new kg()
window.addEventListener('resize',(e)=>{
	kg.page.width=window.innerWidth
	kg.page.height=window.innerHeight
})
window.addEventListener('focus',(e)=>{kg.page.focused=true})
window.addEventListener('blur',(e)=>{kg.page.focused=false})
if(window.jQuery){
	$.fn.colorChange=function(startColor={r:255,g:0,b:0},endColor={r:255,g:255,b:255},duration=1000){
		function lerp(a,b,u){return(1-u)*a+u*b}
		var interval=10
		var steps=duration/interval
		var step_u=1.0/steps
		var u=0.0
		var theInterval=setInterval(()=>{
			if(u>=1.0){clearInterval(theInterval)}
			var r=parseInt(lerp(startColor.r,endColor.r,u))
			var g=parseInt(lerp(startColor.g,endColor.g,u))
			var b=parseInt(lerp(startColor.b,endColor.b,u))
			var colorname='rgb('+r+','+g+','+b+')'
			this.css('color',colorname)
			u+=step_u
		},interval)
	}
	$.fn.isOnScreen=function(){
		if(this.length){
			var win=$(window)
			var viewport={top:win.scrollTop(),left:win.scrollLeft()}
			viewport.right=viewport.left+kg.page.width
			viewport.bottom=viewport.top+kg.page.height
			var bounds=this.offset()
			bounds.right=bounds.left+this.outerWidth()
			bounds.bottom=bounds.top+this.outerHeight()
			return(!(viewport.right<bounds.left||viewport.left>bounds.right||viewport.bottom<bounds.top||viewport.top>bounds.bottom))
		}else{return false}
	}
}
