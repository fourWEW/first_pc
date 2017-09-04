$(function(){
var banner=$('.banner>img');
console.log(banner);
var now=0;
var next=0;
var left=$('.icon-icon4');
var right=$('.icon-right');
var dianli=$('.dian li');
console.log(dianli);
var bn=$('.banner');
function move(type='r') {
	if(type=='r'){
			next++;
			if(next>=2){
				next=0;
			}
		}
		if(type=='l'){
			now--;
			if(next<0){
				next=2;
			}
		}
	banner.hide().eq(0).show();
	banner.eq(now).fadeOut(500);
	banner.eq(next).fadeIn(500);
	dianli.eq(next).addClass('active');
	dianli.eq(now).removeClass('active');
	now=next;
}
var t=setInterval(function(){
	move();
},1000)
bn.mouseenter(function(){
	clearInterval(t);
}).mouseleave(function(){
	t=setInterval(function(){
	move();
	},1000);
})
left.click(function(){
	move('r');
})
right.click(function(){
	move('l');
})
})
