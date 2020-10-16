//------------------ 热门板块轮播图的js ----------------
    var index = 0;
    var liArr = $('div.hot-plate-mid>ul');
    liArr.ready(function(){
        var liHtml = '<li  style="background: url(\'../images/pic_1110.jpg\') 50% 0px no-repeat; ; width: 100%; height: 550px; display: block; position: absolute;">'
        liHtml += "<div style=\"width:100%;\"><a style=\"width:100%;height:550px;display:block;\" href=\"https://sale.vmall.com/honor.html\" target=\"_blank\" ,2);\"></a></div>";
        liHtml += '</li>';
        $('div.hot-plate-mid>ul').append(liHtml);
        var liHtml = '<li  style="background: url(\'../images/pic_1111.jpg\') 50% 0px no-repeat; ; width: 100%; height: 550px; display: none; position: absolute;">'
        liHtml += "<div style=\"width:100%;\"><a style=\"width:100%;height:550px;display:block;\" href=\"https://sale.vmall.com/hwsmh.html\" target=\"_blank\" ,2);\"></a></div>";
        liHtml += '</li>';
        $('div.hot-plate-mid>ul').append(liHtml);
        var liHtml = '<li  style="background: url(\'../images/pic_1112.jpg\') 50% 0px no-repeat; ; width: 100%; height: 550px; display: none; position: absolute;">'
        liHtml += "<div style=\"width:100%;\"><a style=\"width:100%;height:550px;display:block;\" href=\"https://www.vmall.com/product/10086557426930.html\" target=\"_blank\" ,2);\"></a></div>";
        liHtml += '</li>';
        $('div.hot-plate-mid>ul').append(liHtml);
        var liHtml = '<li  style="background: url(\'../images/pic_1113.jpg\') 50% 0px no-repeat; ; width: 100%; height: 550px; display: none; position: absolute;">'
        liHtml += "<div style=\"width:100%;\"><a style=\"width:100%;height:550px;display:block;\" href=\"https://sale.vmall.com/pseries.html\" target=\"_blank\" ,2);\"></a></div>";
        liHtml += '</li>';
        $('div.hot-plate-mid>ul').append(liHtml);
        var liHtml = '<li  style="background: url(\'../images/pic_1114.jpg\') 50% 0px no-repeat; ; width: 100%; height: 550px; display: none; position: absolute;">'
        liHtml += "<div style=\"width:100%;\"><a style=\"width:100%;height:550px;display:block;\" href=\"https://sale.vmall.com/honorhome.html\" target=\"_blank\" ,2);\"></a></div>";
        liHtml += '</li>';
        $('div.hot-plate-mid>ul').append(liHtml);
        var liHtml = '<li  style="background: url(\'../images/pic_1115.jpg\') 50% 0px no-repeat; ; width: 100%; height: 550px; display: none; position: absolute;">'
        liHtml += "<div style=\"width:100%;\"><a style=\"width:100%;height:550px;display:block;\" href=\"https://sale.vmall.com/smarthome.html\" target=\"_blank\" ,2);\"></a></div>";
        liHtml += '</li>';
        $('div.hot-plate-mid>ul').append(liHtml);
        var liHtml = '<li  style="background: url(\'../images//pic_1116.jpg\') 50% 0px no-repeat; ; width: 100%; height: 550px; display: none; position: absolute;">'
        liHtml += "<div style=\"width:100%;\"><a style=\"width:100%;height:550px;display:block;\" href=\"https://sale.vmall.com/honor.html\" target=\"_blank\" ,2);\"></a></div>";
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
        console.log(index);
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
        move();
    });
    /*点击左侧按钮时执行*/
    function moveL() {
        index--;
        console.log(index);
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