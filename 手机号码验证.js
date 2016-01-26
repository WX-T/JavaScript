//验证手机
		function phonenb(){
			
			var tel = $("#RECEIVETELEPHONE").val();
			var reg = /^1[0-9][0-9]{1}[0-9]{8}$|15[0189]{1}[0-9]{8}$|189[0-9]{8}$/;
			if (reg.test(tel)) {
			     return 1;
			}else{
				$("#RECEIVETELEPHONE").css("border-color","#E40012");
				$("#RECEIVETELEPHONE").parent().find(".err").css({"display":"block","height":"0"});
				$("#RECEIVETELEPHONE").parent().find(".err").animate({"height":"1.2rem"},300);
				$("#RECEIVETELEPHONE").parent().find(".err").text("手机号码格式不正确");
				$("#RECEIVETELEPHONE").parent().parent().parent().find(".text .chinese-name").css("color","#FF7300");
			};
		}
