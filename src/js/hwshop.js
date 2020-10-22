
$('.product-stock-btn').children().click(function(e){
    var target = e.target;
    if(target.className=='add'){
        var n = $('.product-stock-text').eq(0).val();
        n++;
        $('.product-stock-text').eq(0).val(n)
    }else if(target.className=='minus'){
        var n = $('.product-stock-text').eq(0).val();
         n--;
         if(n==0){
             n=1
         }
         $('.product-stock-text').eq(0).val(n)
    }
})

// 点击加入购物车弹出成功框
$('.product-button01').click(function(){
    $.ajax({
        url:'../php/addwq.php',
        data:{
            code:$('#pro-sku-code2').eq(0).text(),
            name:$('#pro-name').eq(0).text(),
            img:'../images/pic_8004.png',
            price:$('#price').find('span').eq(0).text(),
            num:$('.product-stock-text').eq(0).val(),
            color:$('.selected').find('span').eq(0).text(),
            edition:$('.edition').find('span').eq(0).text(),
            meal:$('.meal').find('span').eq(0).text(),
        },
        success:function(res){
            if(res.code){
                $('.ol_box_4').css('display','block')
                // console.log('成功')
            }    
        },
        error:function(res){
            if(res.code){
                // $('.ol_box_4').css('display','block')
                console.log('失败')
            }    
        },
        dataType:'json'
    })
})

// 点击加入购物车弹出页面的x关掉弹出框
$('.box-close').click(function(){
    $('.ol_box_4').css('display','none')
})

// 点击去结算去到购物车
$('.box-ok').click(function(){
    window.location.href = "./hwmyshop.html";
})


// 购物车图片展示
$('.product-gallery-thumbs').find('ul').children().hover(function(){
    $(this).addClass('current');
    $(this).siblings().removeClass('current');
})
$('.product-gallery-thumbs').find('ul').children().eq(0).hover(function(){
    $('.cloud-zoom').eq(0).html('<img src="../images/pic_5088.png" alt=""></img>')
})
$('.product-gallery-thumbs').find('ul').children().eq(1).hover(function(){
    $('.cloud-zoom').eq(0).html('<img src="../images/pic_5089.png" alt=""></img>')
})
$('.product-gallery-thumbs').find('ul').children().eq(2).hover(function(){
    $('.cloud-zoom').eq(0).html('<img src="../images/pic_5090.png" alt=""></img>')
})
$('.product-gallery-thumbs').find('ul').children().eq(3).hover(function(){
    $('.cloud-zoom').eq(0).html('<img src="../images/pic_5091.png" alt=""></img>')
})
$('.product-gallery-thumbs').find('ul').children().eq(4).hover(function(){
    $('.cloud-zoom').eq(0).html('<img src="../images/pic_5092.png" alt=""></img>')
})