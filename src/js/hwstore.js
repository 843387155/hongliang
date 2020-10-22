//------------------ 热门板块轮播图的js ----------------
    var index = 0;
    var liArr = $('div.hot-plate-mid>ul');
    liArr.ready(function(){
        var liHtml = '<li  style="background: url(\'../images/pic_1110.jpg\') 50% 0px no-repeat; ; width: 100%; height: 550px; display: block; position: absolute;">'
        liHtml += "<div style=\"width:100%;\"><a style=\"width:100%;height:550px;display:block;\" href=\"hwshop.html\" target=\"_blank\" ,2);\"></a></div>";
        liHtml += '</li>';
        $('div.hot-plate-mid>ul').append(liHtml);
        var liHtml = '<li  style="background: url(\'../images/pic_1111.jpg\') 50% 0px no-repeat; ; width: 100%; height: 550px; display: none; position: absolute;">'
        liHtml += "<div style=\"width:100%;\"><a style=\"width:100%;height:550px;display:block;\" href=\"hwshop.html\" target=\"_blank\" ,2);\"></a></div>";
        liHtml += '</li>';
        $('div.hot-plate-mid>ul').append(liHtml);
        var liHtml = '<li  style="background: url(\'../images/pic_1112.jpg\') 50% 0px no-repeat; ; width: 100%; height: 550px; display: none; position: absolute;">'
        liHtml += "<div style=\"width:100%;\"><a style=\"width:100%;height:550px;display:block;\" href=\"hwshop.html\" target=\"_blank\" ,2);\"></a></div>";
        liHtml += '</li>';
        $('div.hot-plate-mid>ul').append(liHtml);
        var liHtml = '<li  style="background: url(\'../images/pic_1113.jpg\') 50% 0px no-repeat; ; width: 100%; height: 550px; display: none; position: absolute;">'
        liHtml += "<div style=\"width:100%;\"><a style=\"width:100%;height:550px;display:block;\" href=\"hwshop.html\" target=\"_blank\" ,2);\"></a></div>";
        liHtml += '</li>';
        $('div.hot-plate-mid>ul').append(liHtml);
        var liHtml = '<li  style="background: url(\'../images/pic_1114.jpg\') 50% 0px no-repeat; ; width: 100%; height: 550px; display: none; position: absolute;">'
        liHtml += "<div style=\"width:100%;\"><a style=\"width:100%;height:550px;display:block;\" href=\"hwshop.html\" target=\"_blank\" ,2);\"></a></div>";
        liHtml += '</li>';
        $('div.hot-plate-mid>ul').append(liHtml);
        var liHtml = '<li  style="background: url(\'../images/pic_1115.jpg\') 50% 0px no-repeat; ; width: 100%; height: 550px; display: none; position: absolute;">'
        liHtml += "<div style=\"width:100%;\"><a style=\"width:100%;height:550px;display:block;\" href=\"hwshop.html\" target=\"_blank\" ,2);\"></a></div>";
        liHtml += '</li>';
        $('div.hot-plate-mid>ul').append(liHtml);
        var liHtml = '<li  style="background: url(\'../images/pic_1116.jpg\') 50% 0px no-repeat; ; width: 100%; height: 550px; display: none; position: absolute;">'
        liHtml += "<div style=\"width:100%;\"><a style=\"width:100%;height:550px;display:block;\" href=\"hwshop.html\" target=\"_blank\" ,2);\"></a></div>";
        liHtml += '</li>';
        $('div.hot-plate-mid>ul').append(liHtml);
    });

    $(".widget-dot span").mousemove(function () {
            $(this)
            .addClass("current")
            .siblings()
            .removeClass("current");
            index=$(this).index();

            $('div.hot-plate-mid>ul').children()
            .eq(index)
            .stop()
            .fadeIn(300)
            .siblings()
            .stop()
            .fadeOut(300);
    });
    
    function move() {
        index++;
        if (index==7){
            index=0
        }
        $(".widget-dot span")
        .eq(index)
        .addClass("current")
        .siblings()
        .removeClass("current");
        
        $('div.hot-plate-mid>ul').children()
        .eq(index)
        .stop()
        .fadeIn(300)
        .siblings()
        .stop()
        .fadeOut(300);
    };
    var time=setInterval(move,5000);
    $(".widget-next").click(function () {
        clearInterval(time);
        move();
    });
    /*点击左侧按钮时执行*/
    function moveL() {
        index--;
        if (index==-1){
            index=6
        }
        $(".widget-dot span")
        .eq(index)
        .addClass("current")
        .siblings()
        .removeClass("current");

        $('div.hot-plate-mid>ul').children()
        .eq(index)
        .stop()
        .fadeIn(300)
        .siblings()
        .stop()
        .fadeOut(300);
    }
    $(".widget-prev").click(function () {
        clearInterval(time);
        moveL();
    });
    $(".hot-plate").hover(function () {
        clearInterval(time);
    },
    function () {
        time=setInterval(move,5000);
    });

//---------------- 滚动公告js ---------------
 
    function autoScroll(obj){ 
        $(obj).find(".p-notice-list").animate({ 
            marginTop : "-43px" 
        },500,function(){ 
            $(this).css({marginTop : "0px",height:"215px"}).find("li:first").appendTo(this); 
        }) 
    } 
    var time1 = setInterval('autoScroll(".p-notice-content")',3000);
    $(".p-notice-list").hover(function () {
        clearInterval(time1);
    },
    function () {
         time1 = setInterval('autoScroll(".p-notice-content")',3000);
    });

//---------------- 顶部广告点击按钮移除广告 ---------------

    $(".button-top-banner-close").click(function(){
        $('.top-banner-img').first().remove()
    });


//---------------- 悬浮工具栏 ---------------    
    $('.hungBar-common a').hover(function(){
        $(this).addClass('hover')
    },function(){
        $(this).removeClass('hover')
    });


//---------------- 回到顶部 --------------- 

    $('.hungBar-top').css({
        display:'none'
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>500){
            $('.hungBar-top').css({
                display:'block'
            }); 
        }else if($(window).scrollTop()<500){
            $('.hungBar-top').css({
                display:'none'
            }); 
        }
    })
    $('.hungBar-top').click(function(){
        $('html,body').animate({scrollTop:0},500);
    });


// 使用ajax调用json渲染列表

    $.ajax({
        url:'./data.json',
        dataType:'json',
        success:function(data){
            $.each(data,function(i,item){
                $('.category-list').append(` <li class="category-item">
                <div class="category-item-bg">
                    <div class="category-info">
                        <a href="#">
                            <span>${item.text}</span>
                        </a>
                        <i></i>
                    </div>
                </div>
            </li>`);
            })
        }
    })


// 华为闪购
function doublenum(n){
    if(n < 10){
        return "0" + n;
    }else{
        return n;
    }
}
function timeLeft(select,endTime,curTime = new Date()){
   
	var leftTime = endTime - curTime;//时间差
	if(leftTime <= 0){//如果时间差小于等于0
		clearInterval(timer);//清除定时器
	}else{
		var hours =doublenum(Math.floor(leftTime/(1000*60*60)%24)) ;//时
		var mi =doublenum(Math.floor(leftTime/(1000*60)%60)) ;//分
		var se =doublenum(Math.floor(leftTime/1000%60)) ;//秒
		$(select).html('<span>'+hours+'</span>'+"<i>:</i>"+'<span>'+mi+'</span>'+"<i>:</i>"+'<span>'+se+'</span>');
	}
}
	
var timer = setInterval(function(){//倒计时
	timeLeft(".countdown",new Date("2020/10/30,20:00:00"));//第一个参数是选择器，第二个参数是结束时间，第三个参数默认为当下时间
},1);