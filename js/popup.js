/* Popup */
$(document).ready(function(){
	//구성원 정보
	$("a.name-pop").click(function(){
		popup_edit();
		$("body").css("overflow-y","hidden");
	});
	
	//구성원 추가
	$(".btn-add").click(function(){
		popup_add();
		$("body").css("overflow-y","hidden");
	});
	
	//关闭
	$(".btn-close").click(function(){
		popup_close($(this));
		var count = 0;
		$(".popup").each(function(){
			if($(this).hasClass("open")){
				count++;
			}
		});
		if(count===0){
			$("body").css("overflow-y","auto");
		}
	});
	
	//默认弹出
	$(".popup-bottom .btn-cancel").click(function(){
		popup_default();
		$("body").css("overflow-y","hidden");
	});
	
	//选择部门
	$(".input-group.dep-search").click(function(){
		popup_department();
		$("body").css("overflow-y","hidden");
	});
	
	//权限添加
	$(".btn-useradd").click(function(){
		popup_adduser();
		$("body").css("overflow-y","hidden");
	});
	
	//权限修改
	$(".tree.user .a-useredit").click(function(){
		popup_useredit();
		$("body").css("overflow-y","hidden");
	});
	
	//添加管理员
	$(".btn-adminadd").click(function(){
		popup_adminadd();
		$("body").css("overflow-y","hidden");
	});
	
	//删除账户
	$(".btn-user-delete").click(function(){
		popup_delete();
		$("body").css("overflow-y","hidden");
	});
	
	$(".popup.edit .btn-close").click(function(){
		$(".popup.edit .table-display").show();
		$(".popup.edit .table-edit").hide();
		$(".display-button").show();
		$(".edit-button").hide();
	});
});

function popup_edit(){
	$(".popup.edit").removeClass("close").addClass("open");
}
function popup_add(){
	$(".popup.add").removeClass("close").addClass("open");
}
function popup_default(){
	$(".popup.default").removeClass("close").addClass("open");
}
function popup_department(){
	$(".popup.department").removeClass("close").addClass("open");
}
function popup_adduser(){
	$(".popup.department.user").removeClass("close").addClass("open");
}
function popup_delete(){
	$(".popup.delete").removeClass("close").addClass("open");
}
function popup_adminadd(){
	$(".popup.adminadd").removeClass("close").addClass("open");
}
function popup_useredit(){
	$(".popup.useredit").removeClass("close").addClass("open");
}
function popup_close(thisName){
	thisName.parent().parent().parent().removeClass("open").addClass("close");
}	


