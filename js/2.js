var list=document.getElementById("list");
var lie=document.getElementById("lie");
var lie1=document.getElementById("lie1");
var lie2=document.getElementById("lie2");
var lie3=document.getElementById("lie3");
var chat_list=document.getElementById("chat_list");
var book_list=document.getElementById("book_list");
var man_list=document.getElementById("man_list");
var chat_list_li=chat_list.getElementsByClassName("chat_li");
var book_list_li=book_list.getElementsByClassName("book_li");
var man_list_li=man_list.getElementsByClassName("man_li");
window.onload=function(test){
//获取Location对象的search属性值  
var searchStr = location.search;  

//由于searchStr属性值包括“?”，所以除去该字符  
searchStr = searchStr.substr(1);  
  
//将searchStr字符串分割成数组，数组中的每一个元素为一个参数和参数值  
var searchs = searchStr.split("&");  
  
//获得第一个参数和值  
var val = searchs[0].split("="); 
    document.getElementById("name").innerText=val[1];
}  

lie1.onclick=function(){
	lie1.src="img/list2.png";
	lie2.src="img/list3.png";
	lie3.src="img/list5.png";
	chat_list.style.display="block";
	book_list.style.display="none";
	man_list.style.display="none";
	for (var i=0;i<book_list_li.length;i++) {
		book_list_li[i].style.backgroundColor="#2E3238"
	}
	for (var i=0;i<man_list_li.length;i++) {
		man_list_li[i].style.backgroundColor="#2E3238"
	}
}
lie2.onclick=function(){
	lie2.src="img/list4.png";
	lie1.src="img/list1.png";
	lie3.src="img/list5.png";
	chat_list.style.display="none";
	book_list.style.display="block";
	man_list.style.display="none";
	for (var i=0;i<chat_list_li.length;i++) {
		chat_list_li[i].style.backgroundColor="#2E3238"
	}
	for (var i=0;i<man_list_li.length;i++) {
		man_list_li[i].style.backgroundColor="#2E3238"
	}
}
lie3.onclick=function(){
	lie3.src="img/list6.png";
	lie1.src="img/list1.png";
	lie2.src="img/list3.png";
	chat_list.style.display="none";
	book_list.style.display="none";
	man_list.style.display="block";
	for (var i=0;i<chat_list_li.length;i++) {
		chat_list_li[i].style.backgroundColor="#2E3238"
	}
	for (var i=0;i<book_list_li.length;i++) {
		book_list_li[i].style.backgroundColor="#2E3238"
	}
}
//list.onclick=function(){
//	var i;
//	if(lie.style.display="block")
//	{
//		i=1;
//	}else
//	{
//		i=2;
//	}
//	
//	if(i==1)
//	{
//		lie.style.display="none";
//	}
//	else
//	{
//		lie.style.display="block";
//	}
//}
var clickNumber=0;
list.onclick=function(){
	if(clickNumber %2==0){
     	lie.style.display="block";
    }
	else{
    	lie.style.display="none";
    }
    clickNumber ++;
}
var li1=document.getElementsByClassName("li1");
for (var i=0;i<li1.length;i++) {
	li1[i].onmouseenter=function(){
		this.style.backgroundColor="#808080";
	}
	li1[i].onmouseleave=function(){
		this.style.backgroundColor="white";
	}
}

//for (var i=0;i<chat_list_li.length;i++) {
//	chat_list_li[i].onclick=function(){
//		chat_list_li[i].style.backgroundColor="#808080";
//	}
//}

var n=0;
for (var i=0;i<chat_list_li.length;i++) {
	chat_list_li[i].value=i;
	chat_list_li[i].onclick=function(){
		chat_list_li[n].style.backgroundColor="#808080";
		word.style.display="none";
		chat_box.style.display="block";
		book_box.style.display="none";
		man_box.style.display="none";
		n=this.value;
		if(n==0){
			chat_list_li[1].style.backgroundColor="#2E3238";
			chat_list_li[2].style.backgroundColor="#2E3238";
			chat_text.innerText="会话1";
		}
		if(n==1){
			chat_list_li[0].style.backgroundColor="#2E3238";
			chat_list_li[2].style.backgroundColor="#2E3238";
			chat_text.innerText="会话2";
		}
		if(n==2){
			chat_list_li[0].style.backgroundColor="#2E3238";
			chat_list_li[1].style.backgroundColor="#2E3238";
			chat_text.innerText="会话3";
		}
		chat_list_li[n].style.backgroundColor="#808080";
	}
}


for (var i=0;i<book_list_li.length;i++) {
	n=0;
	book_list_li[i].value=i;
	book_list_li[i].onclick=function(){
		book_list_li[n].style.backgroundColor="#808080";
		chat_box.style.display="none";
		word.style.display="none";
		book_box.style.display="block";
		man_box.style.display="none";
		n=this.value;
		if(n==0){
			book_list_li[1].style.backgroundColor="#2E3238";
			book_list_li[2].style.backgroundColor="#2E3238";
			book_text.innerText="文章1";
			text1.style.display="block";
			text2.style.display="none";
			text3.style.display="none";
		}
		if(n==1){
			book_list_li[0].style.backgroundColor="#2E3238";
			book_list_li[2].style.backgroundColor="#2E3238";
			book_text.innerText="文章2";
			text2.style.display="block";
			text1.style.display="none";
			text3.style.display="none";
		}
		if(n==2){
			book_list_li[0].style.backgroundColor="#2E3238";
			book_list_li[1].style.backgroundColor="#2E3238";
			book_text.innerText="文章3";
			text3.style.display="block";
			text1.style.display="none";
			text2.style.display="none";
		}
		book_list_li[n].style.backgroundColor="#808080";
	}
}


for (var i=0;i<man_list_li.length;i++) {
	n=0;
	man_list_li[i].value=i;
	man_list_li[i].onclick=function(){
		man_list_li[n].style.backgroundColor="#808080";
		chat_box.style.display="none";
		book_box.style.display="none";
		man_box.style.display="block";
		word.style.display="none";
		n=this.value;
		if(n==0){
			man_list_li[1].style.backgroundColor="#2E3238";
			man_list_li[2].style.backgroundColor="#2E3238";
			man_texts.innerText="联系人1";
			man_jie_input1.style.display="block";
			man_jie_input2.style.display="none";
			man_jie_input3.style.display="none";
		}
		if(n==1){
			man_list_li[0].style.backgroundColor="#2E3238";
			man_list_li[2].style.backgroundColor="#2E3238";
			man_texts.innerText="联系人2";
			man_jie_input2.style.display="block";
			man_jie_input1.style.display="none";
			man_jie_input3.style.display="none";
		}
		if(n==2){
			man_list_li[0].style.backgroundColor="#2E3238";
			man_list_li[1].style.backgroundColor="#2E3238";
			man_texts.innerText="联系人3";
			man_jie_input3.style.display="block";
			man_jie_input1.style.display="none";
			man_jie_input2.style.display="none";
		}
		man_list_li[n].style.backgroundColor="#808080";
	}
}

var word=document.getElementById("word");
var chat_box=document.getElementById("chat_box");
var chat_text=document.getElementById("chat_text");
var book_box=document.getElementById("book_box");
var text1=document.getElementById("text1");
var text2=document.getElementById("text2");
var text3=document.getElementById("text3");
var book_text=document.getElementById("book_text");
var man_box=document.getElementById("man_box");
var man_texts=document.getElementById("man_texts");
var man_jie_input1=document.getElementById("man_jie_input1");
var man_jie_input2=document.getElementById("man_jie_input2");
var man_jie_input3=document.getElementById("man_jie_input3");
var send=document.getElementById("send");
var area_text=document.getElementById("textarea");
