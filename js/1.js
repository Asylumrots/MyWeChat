var id=document.getElementById("id");
var pw=document.getElementById("pw");
var test=document.getElementById("test");
var login=document.getElementById("login");
login.onclick=function()
{
	if(id.value=="")
	{
		alert("用户名不能为空！");
		return false;
	}
	else
	{
		if(pw.value=="")
		{
			alert("密码不能为空！");
			return false;
		}
		else
		{
			if(test.value=="zckx")
			{
			window.location.href="main.html?test=value";
			}else
			{
				alert("验证码错误！");
				return false;
			}
		}
	}
	
}
