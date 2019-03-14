$(function () {
//    轮播图实现
//    1.无缝滚动
//    2.手势滑动上一张下一张
//    3.改变点的颜色
var $banner = $('.sn_Banner');
var width = $banner.width();
var $imgBox = $banner.find('ul:first');
var $pointBox = $banner.find('ul:last');
var $points = $pointBox.find('li');
var index = 1;
var animationFuc = function () {
    $imgBox.animate({transform: 'translateX('+ (-index * width) +'px)'},200,function () {
        if(index>=9){
            index = 1;
            $imgBox.css({transform: 'translateX('+ (-index * width) +'px)'});
        }else if(index<=0){
            index = 8;
            $imgBox.css({transform: 'translateX('+ (-index * width) +'px)'});
        }
        $points.removeClass('now').eq(index-1).addClass('now');
    });
};
var timer = setInterval(function () {
    index++;
    animationFuc();

},1000);
    $banner.on('swipeLeft',function () {
//    滑动下一张
        index++;
        animationFuc();
    });

    $banner.on('swipeRight',function () {
//    滑动下一张
        index--;
        animationFuc();
    });
});


