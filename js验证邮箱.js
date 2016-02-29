var email = 1231@qq.com;
var regemail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
if(regemail.test(email)){
  alert('验证成功');
}else{
  alert('验证失败')
}
