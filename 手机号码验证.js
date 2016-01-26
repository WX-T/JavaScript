//验证手机
function phonenb(){
	var tel = $("#RECEIVETELEPHONE").val();
	var reg = /^1[0-9][0-9]{1}[0-9]{8}$|15[0189]{1}[0-9]{8}$|189[0-9]{8}$/;
	if (reg.test(tel)) {
	     console.log('验证成功');
	}else{
		console.log('验证失败');
	};
}
