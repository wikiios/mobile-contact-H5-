/**
 * Created by wikiios on 2017/10/17.
 */
$(function () {
    //加载联系人事件
    $('.container').show();
	//选择联系人 start
    $('body').on('click', '.con-list p', function () {
        alert($(this).html())
    });
    //点击右侧索引查询联系人
    $('body').on('click', '.letter a', function () {
        var s = $(this).html();
        $(window).scrollTop($('.con-list#' + s).offset().top);
        $("#showLetter span").html(s);
        $("#showLetter").show().delay(500).hide(0);
    });
     //中间的标记显示
     $('body').on('onMouse', '.showLetter span', function () {
        $("#showLetter").show().delay(500).hide(0);
    });

});

//实时文字搜索功能
$('#keyword').bind('input propertychange', function(){
	var keyword = $('#keyword').val();
	var pl=$('p');
	for(var i=0;i<pl.length;i++){
		if($('p:eq('+i+')').html().indexOf(keyword) > -1){
			$('p:eq('+i+')').show(500);
		}else{
			$('p:eq('+i+')').hide(500);
		}
	}
	cl=$('.con-list'),al=$('a');
	//设置flag标志，判断每个首字母索引下的联系人名是否都隐藏，若都则索引隐藏；否则则显示
	for(var i=0;i<cl.length;i++){
		flag=0;
		aa=$('.con-list:eq('+i+')');
		cplist=aa.children('p');
		for(var j=0;j<cplist.length;j++){
			tmp=aa.children('p:eq('+j+')')[0];
			if(tmp.style.display != 'none'){
				flag=1;
			}
		}
		if(flag == 0){
			$('.con-list:eq('+i+')').hide(500);
			$('.letter ul li#'+$('.con-list:eq('+i+')').attr('id')).hide(500);
		}
		else{
			$('.con-list:eq('+i+')').show(500);
			$('.letter ul li#'+$('.con-list:eq('+i+')').attr('id')).show(500);
		}
	}
});