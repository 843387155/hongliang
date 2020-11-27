
$(".hwid-input-container").focusin(function() {
    $(this).addClass('hwid-input-container-focus');
});
$(".hwid-input-container").focusout(function() {
    $(this).removeClass('hwid-input-container-focus');
    // var mobilereg = /^1[3456789]\d{9}$/; // 1[356789][0-9] （后面再接8位数）
    // if (!$('.hwid-reg-detail').find('.hwid-input').eq(0).val()) {
    //     $(this).removeClass('hwid-input-container-focus');
    //     $(this).removeClass('hwid-input-container-error');
    //     return;
    // } else if (!mobilereg.test($('.hwid-reg-detail').find('.hwid-input').eq(0).val())) {
    //     $(this).removeClass('hwid-input-container-focus');
    //     $(this).addClass('hwid-input-container-error');
    //     return;
    // }
});
$('.hwid-input').bind('input propertychange', function(){
    var hwip1 = $('.hwid-input').eq(0).val();
    console.log(hwip1)
    var mob = /^1[3456789]\d{9}$/; 
     if(!hwip1){
        return;
     }else if(!mob.test(hwip1)){
        $(".hwid-input-container").addClass('hwid-input-container-error');
     }
})



$(".hwid-login-id").focusin(function() {
    $(this).addClass('hwid-input-container-focus');
    
});
$(".hwid-login-id").focusout(function() {
    $(this).removeClass('hwid-input-container-focus');
    
});

$(".hwid-login-pass").focusin(function() {
    $(this).addClass('hwid-input-container-focus');
    
});
$(".hwid-login-pass").focusout(function() {
    $(this).removeClass('hwid-input-container-focus');
    
});

$(".hwid-input").focusin(function() {
    $(this).css({
        caretColor: '#007dff'
    })
    
});
$(".hwid-input").focusout(function() {
    $(this).css({
        caretColor: '#007dff'
    })
}); 



var a = 1;
$('.pass-eyeoff').click(function(){
    a+=1;
    if(a%2 == 0){
        $('.pass-eyeoff').css({
            backgroundImage: 'url(../images/pic_2009.png)'
        })
    }else if(a%2 != 0){
        $('.pass-eyeoff').css({
            backgroundImage: 'url(../images/pic_2004.svg)'
        })
    }
})
var a = 1;
$('.hwid-password-eyeoff-disable').click(function(){
    a+=1;
    if(a%2 == 0){
        $(this).css({
            backgroundImage: 'url(../images/pic_2009.png)'
        })
    }else if(a%2 != 0){
        $(this).css({
            backgroundImage: 'url(../images/pic_2004.svg)'
        })
    }
})


$('.hwid-helptip-icon-ctr').hover(
    function(){
    $(".hwid-helptip-msg-parent").css({display:'block'});},function(){
    $(".hwid-helptip-msg-parent").css({display:'none'})
})


// regist页面的输入内容改变按钮样式特效

var inputAll = $('.hwid-reg-detail').find('.hwid-input');
var inputA = $('.hwid-reg-detail').find('.hwid-input').eq(0);
var inputB = $('.hwid-reg-detail').find('.hwid-input').eq(1);
var inputC = $('.hwid-reg-detail').find('.hwid-input').eq(2);
var inputD = $('.hwid-reg-detail').find('.hwid-input').eq(3);

inputAll.bind('input propertychange',function(){

    if(inputA.val()!==""&&inputB.val()!==""&&inputC.val()!==""&&inputD.val()!==""){
        $('.hwid-btn-reg').removeClass('send-ajax');
    }else{
        $('.hwid-btn-reg').addClass('send-ajax');
    }
    
});



// login页面的输入内容改变按钮样式特效

var input = $('.entry-login').find('.userAccount');
var inputE = $('.hwid-login-id').find('.userAccount');
var inputF = $('.hwid-login-pass').find('.userAccount');
input.bind('input propertychange',function(){

    if(inputE.val()!==""&&inputF.val()!==""){
        $('.button-box').removeClass('button-boxaction');
    }else{
        $('.button-box').addClass('button-boxaction');
    }
    
});


// regist获取前端数据存入数据库
$('.hwid-sel').click(function(){
    $.ajax({
        url:'../php/regist.php',
        data:{
            area:$('.hwid-select-text').eq(0).text(),
            numb:$('.hwid-reg-detail').find('.hwid-input').eq(0).val(),
            code:$('.hwid-reg-detail').find('.hwid-input').eq(1).val(),
            pass:$('.hwid-reg-detail').find('.hwid-input').eq(2).val(),
            data:$('.datab').text()
        },
        success:function(res){
            if(res.code){
                location.href="./hwlogin.html"
            }    
        },
        error:function(res){
            alert('请填写正确的手机号码');
        },
        dataType:'json'
    })
    
})



//login获取前端数据存入数据库
$('.hwid-login-btn').click(function(){
    $.ajax({
        url:'../php/login.php',
        data:{
            numb:$('.entry-login').find('.hwid-input').eq(0).val(),
            pass:$('.entry-login').find('.hwid-input').eq(1).val(),
        },
        success:function(res){
            if(res.code){
                location.href="./hwloginstore.html"
            }
        },
        error:function(res){
            alert('账号或密码错误')
        },
        dataType:'json'
    })
})




