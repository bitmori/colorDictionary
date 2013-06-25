var len = cl_jp.length;
$(function() {
	for(var i=0;i<len/5;i++)$("#table01").append("<tr id="+i+"></tr>");
	for(var j=0;j<5;j++)for(var i=0;i<len/5;i++)generator(j, i, j*len/5+i);
});


function __R(color) {
	return ((color >> 16) & 0xff);
}

function __G(color) {
	return ((color >> 8) & 0xff);
}

function __B(color) {
	return (color & 0xff);
}

function hexToRGB(color){
	return "rgb("+[__R(color),__G(color),__B(color)].join()+")";
}

function pad(number, length) {   
	var str = '' + number;
	while (str.length < length) str = '0' + str;
	return str;
}

function IsLightColor(color){
	return (__R(color) * 0.299 + __G(color) * 0.587 + __B(color) * 0.114)>=192;
}

var qtip_shared = {
	position: {
		my: 'left center', 
		at: 'right center',
	},
//	show: 'click',
//	hide: 'click',
	style: {
		classes: 'qtip-shadow qtip-bootstrap'
	}
};

function generator(x, y, id){
	var name = cl_jp[id]["name"];
	var value= hexToRGB(cl_jp[id]["value"]);
	var value2=pad(cl_jp[id]["value"].toString(16), 6).toUpperCase();
	var textcolor = IsLightColor(cl_jp[id]["value"])?"black":"white";
	$("<td>"+name+" \\ #"+value2+"</td>")
		.css({"background-color" : value, "color" : textcolor})
		.qtip($.extend({}, qtip_shared, 
				{content: {
					text: cl_jp[id]["romaji"], 
					title: name,
				}}))
		.appendTo("tr#"+y);
	//$("tr#"+y).append("<td style=\'background-color:"+value+"; color:"+textcolor+"\'>"+name+" \\ #"+pad(cl_jp[id]["value"].toString(16), 6).toUpperCase()+"</td>");
}

