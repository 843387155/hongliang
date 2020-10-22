

// 购物车页面展示商品、添加商品、删除商品
var chex = '';
showTbody();
function showTbody(){
    $.ajax({
        url:'../php/showlist.php',
        success:function(res){
            if(res.code){
                var arr = res.data;
                if(res.data){
                    console.log(res.data)
                    //如果有商品,table显示,div隐藏
                    $('.youshangp').show();
                    $('.sc-empty').hide();
                    //在table里面展示商品信息
                    $('.youshangp').empty();
                    $.each(arr,function(index,item){
                        $('.youshangp').append(`
                    <div class="sc-list" >
                        <div class="sc-pro-title clearfix" style="display: block;">
                            <label class="checkbox">
                                <input readonly="readonly" class="vam ">
                                全选
                            </label>
                            <ul class="clearfix">
                                <li>商品</li>
                                <li>单价</li>
                                <li>数量</li>
                                <li>小计</li>
                                <li>操作</li>
                            </ul>
                        </div>
                    <form id="cart-form" autocomplete="off" method="get">
                        <div class="sc-pro" id="${item.product_code}">
                            <div>
                            <div class="sc-pro-list clearfix">
                                <label class="checkbox"><input readonly="readonly" class="vam vamcom"></label>
                                <div class="sc-pro-area">
                                    <div class="sc-pro-main clearfix">
                                        <a href="#" target="_blank" class="p-img">
                                            <img src="${item.product_img}" alt="HUAWEI nova 7 SE 5G 活力版 8GB+128GB 全网通版（银月星辉）">
                                        </a>
                                        <div class="tips-1 p-stock-tips" style="display: none;">限购件</div>
                                        <ul>
                                            <li>
                                                <a href="#" target="_blank" title="HUAWEI nova 7 SE 5G 活力版 8GB+128GB 全网通版（银月星辉）" class="p-name">
                                                    ${item.product_name}
                                                </a>
                                                <p class="p-info">${item.product_color}${item.product_edition}${item.product_meal}</p>
                                                <div class="p-label">
                                                    <span>分期免息</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="p-price"><span>¥&nbsp;${item.product_price}</span></div>
                                            </li>
                                            <li>
                                                <div class="p-stock">
                                                    <div class="p-stock-area">
                                                        <input type="number" class="p-stock-text num" value="${item.product_num}">
                                                        <p class="p-stock-btn">
                                                            <a href="javascript:;" class="minus">−</a> 
                                                            <a href="javascript:;" class="add">+</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="p-price-total">¥&nbsp;${item.product_num*item.product_price}</li>
                                            <li><a href="javascript:;" seed="cart-item-del" class="p-del">删除</a></li>
                                        </ul>
                                    </div>
                                    <div class="p-service-main">
                                        <div class="p-service-list clearfix">
                                            <div class="p-service-info">
                                                <label class="checkbox">
                                                    <input type="checkbox" class="vam">
                                                </label>
                                                <div class="service-name"><span>碎屏(含后盖)服务宝1年</span></div>
                                                <div class="service-price"><span>¥249.00</span></div>
                                            </div>
                                            <div class="p-service-link">
                                                <a href="/product/10086993292711.html" target="_blank">了解详情</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-service-main">
                                        <div class="p-service-list clearfix">
                                            <div class="p-service-info">
                                                <label class="checkbox">
                                                    <input type="checkbox" class="vam">
                                                </label>
                                                <div class="service-name"><span>延长服务宝</span></div>
                                            </div>
                                            <div class="p-service-link"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                    </div>
                    <div class="shanchuk" style="display: block;">
                        <div class="sc-total-tool layout clearfix ">
                            <div class="sc-total-control">
                                <label class="checkbox">
                                    <input readonly="readonly" class="vam vamacc">全选</label>
                                    <a href="javascript:;">删除</a>
                            </div>
                            <div class="sc-total-btn ">
                                    <a href="javascript:;">立即结算</a>
                            </div>
                            <div class="sc-total-price">
                                    <p>
                                        <label>总计：</label>
                                        <span>¥&nbsp;${item.product_num*item.product_price}</span>
                                        <em><b>不含运费</b></em>
                                    </p>
                                    <div class="total-choose">已选择<em>${item.product_num}</em>件商品，优惠：<span>¥&nbsp;0.00</span></div>
                            </div>
                        </div>
                    </div>`)
                    })
                }
                $(document).ready(function(){ 
                    $('.vam').eq(0).addClass('checked');
                    $('.vamacc').addClass('checked');
                    $('.vamcom').addClass('checked'); 
                });
                var o = 2;
                $('.vam').eq(0).click(function(){
                    var flag =$('.vamacc').hasClass('checked');
                    o++;
                    if(o%2==0){
                        $(this).addClass('checked');
                        $('.vamacc').addClass('checked');
                        $('.vamcom').addClass('checked');
                        
                    }else if(o%2!=0){
                        $(this).removeClass('checked');
                        $('.vamacc').removeClass('checked');
                        $('.vamcom').removeClass('checked');
                    }
                })
                
                
            }else{
                //如果没有商品,table隐藏,div显示
                $('.youshangp').hide();
                $('.sc-empty').show();                   
            } 
        },
        dataType:'json',
        cache:false
    })
          
}

// 点击+增加一个商品数量,点击-减少一个商品数量


$('.youshangp').click(function(e){
    console.log(e);
    var target = e.target;
    // target是一个dom节点
    if((target.className=='add')||(target.className=='minus')){
        // 点击+增加一个商品数量,点击-减少一个商品数量
        $.ajax({
            url:'../php/updatewq.php',
            data:{
                type:target.className,
                code:$(target).parents('.sc-pro').attr('id')
            },
            success:function(res){
                if(res.code){
                    console.log('成功')
                    showTbody()
                }
            },
            dataType:'json',
        })

     }else if(target.className=='p-del'){
        // 点击删除按钮删除一个商品
        $.ajax({
            url:'../php/delwq.php',
            data:{
                code:$(target).parents('.sc-pro').attr('id')
            },
            success:function(res){
                console.log('删除成功')
                if(res.code){
                    showTbody()
                }
            },
            dataType:'json'
        })
    }
})
