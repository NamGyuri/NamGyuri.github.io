$(document).ready(function(){

    $("#left").click(function(){
        $("#left").animate({
            left:'-' + 30 + '%'
        },function(){
            $("#left").hide();
        });
        $("#right").show().animate({
            right:0
        });
        $(".ui-small-img").show().animate({
            left:0
        });
        $(".pf").fadeOut(300);
        $(".web-project-img").fadeOut(300);
        $(".project-img").fadeIn(600);
        $(".par").fadeIn(600);
        $(".web-small-img").animate({
            right:'-' + 30 + '%'
        },function(){
            $(".web-small-img").hide();
        });
        $(".project-img>img").not($(".par")).fadeOut(300);
        $(".parkin").animate({
            opacity:1.0
        });
        $(".ui-small-img>button>img").not($(".parkin")).animate({
            opacity:0.25
        });
    });
    // UI.UX Design 클릭시 변하는 것

    $("#right").click(function(){
        $("#right").animate({
            right:'-' + 30 + '%'
        },function(){
            $("#right").hide();
        });
        $("#left").show().animate({
            left:0
        });
        $(".web-small-img").show().animate({
            right:0
        });
        $(".pf").fadeOut(300);
        $(".project-img").fadeOut(300);
        $(".web-project-img").fadeIn(600);
        $(".basic01").fadeIn(600);
        $(".ui-small-img").animate({
            left:'-' + 30 + '%'
        },function(){
            $(".ui-small-img").hide();
        });
    });
    // WEB Design 클릭시 변하는 것
    // UI.UI Design & WEB Design on,off animation

    $(".parkin").click(function(){
        $(".parkin").animate({
            opacity:1.0
        });
        $(".ui-small-img>button>img").not($(this)).animate({
            opacity:0.25
        });
        $(".par").fadeIn(600);
        $(".project-img>img").not($(".par")).fadeOut(300);
        // $(".project-img>img").not($(".par")).animate({
        //     opacity:0
        // });
    });
    // 파킨슨 small img 클릭시 변하는 것

    $(".prefer").click(function(){
        $(".prefer").animate({
            opacity:1.0
        });
        $(".ui-small-img>button>img").not($(this)).animate({
            opacity:0.25
        });
        $(".pre").fadeIn(600);
        $(".project-img>img").not($(".pre")).fadeOut(300);
        // $(".project-img>img").not($(".pre")).animate({
        //     opacity:0
        // });
    });
    // 프리퍼 small img 클릭시 변하는 것

    $(".avata").click(function(){
        $(".avata").animate({
            opacity:1.0
        });
        $(".ui-small-img>button>img").not($(this)).animate({
            opacity:0.25
        });
        $(".ava").fadeIn(600);
        $(".project-img>img").not($(".ava")).fadeOut(300);
        // $(".project-img>img").not($(".ava")).animate({
        //     opacity:0
        // });
    });
    // 아바타 small img 클릭시 변하는 것

    $(".forlove").click(function(){
        $(".forlove").animate({
            opacity:1.0
        });
        $(".ui-small-img>button>img").not($(this)).animate({
            opacity:0.25
        });
        $(".fl").fadeIn(600);
        $(".project-img>img").not($(".fl")).fadeOut(300);
        // $(".project-img>img").not($(".fl")).animate({
        //     opacity:0
        // });
    });
    // 포럽 small img 클릭시 변하는 것

    $(".falsehood").click(function(){
        $(".falsehood").animate({
            opacity:1.0
        });
        $(".ui-small-img>button>img").not($(this)).animate({
            opacity:0.25
        });
        $(".lie").fadeIn(600);
        $(".project-img>img").not($(".lie")).fadeOut(300);
        // $(".project-img>img").not($(".lie")).animate({
        //     opacity:0
        // });
    });
    // 허위신고 small img 클릭시 변하는 것

    $(".basic1").click(function(){
        $(".basic1").animate({
            opacity:1.0
        });
        $(".web-small-img>button>div").not($(this)).animate({
            opacity:0.25
        });
        $(".basic01").fadeIn(600);
        $(".web-project-img>div").not($(".basic01")).fadeOut(300);
    });
    // basic1 클릭시 변하는 것

    $(".basic2").click(function(){
        $(".basic2").animate({
            opacity:1.0
        });
        $(".web-small-img>button>div").not($(this)).animate({
            opacity:0.25
        });
        $(".basic02").fadeIn(600);
        $(".web-project-img>div").not($(".basic02")).fadeOut(300);
    });
    // basic1 클릭시 변하는 것

    $(".basic3").click(function(){
        $(".basic3").animate({
            opacity:1.0
        });
        $(".web-small-img>button>div").not($(this)).animate({
            opacity:0.25
        });
        $(".basic03").fadeIn(600);
        $(".web-project-img>div").not($(".basic03")).fadeOut(300);
    });
    // basic1 클릭시 변하는 것

    $(function(){

        let i=0;
        function change(){}
        //     ++i;
        //     $($(".accordion>div>div")[i-1]).animate({height:"10vw"},0.01).removeClass("a");
        //     if(i==5){
        //         i=0;
        //     }
        //     $($(".accordion div")[i]).animate({height:"70vw"}).addClass("a");
        // }
        var a=setInterval(change,2000);
        
        let j=0;    
        $('.accordion>div>div').click(function(){
            clearInterval(a);
            j=$(this).index();
            
            if($(this).hasClass("on")){}
            else{
                $('.accordion>div>div').animate({height:"10vw"},200).removeClass('on');
                $(this).animate({height:"70vw"},200).addClass('on');
            }
        });
    });

    
    $('#web_btn').click(function(){
        $('.m_parkinson>img').css({opacity:"0"},0).stop().attr({ src: "img/Portfolio_box.png" }).animate({opacity:"1"},600);
        $('.m_prefer>img').css({opacity:"0"},0).stop().attr({ src: "img/Portfolio_box.png" }).animate({opacity:"1"},600);
        $('.m_avataj>img').css({opacity:"0"},0).stop().attr({ src: "img/Portfolio_box.png" }).animate({opacity:"1"},600);

        $('.m_forup').fadeOut(0);
        $('.m_swatting').fadeOut(0);
        $(this).fadeOut(600);
        $('#ui_btn').fadeIn(600);
        $('.m_parkinson>img').addClass("web");

        $('.accordion>div>div').animate({height:"20vw"},0);

    });
    $('#ui_btn').click(function(){
        $('.m_parkinson>img').css({opacity:"0"},0).stop().attr({ src: "img/파킨슨.png" }).animate({opacity:"1"},600);
        $('.m_prefer>img').css({opacity:"0"},0).stop().attr({ src: "img/PREFER.png" }).animate({opacity:"1"},600);
        $('.m_avataj>img').css({opacity:"0"},0).stop().attr({ src: "img/AVATAJ.png" }).animate({opacity:"1"},600);
        $('.m_forup>img').css({opacity:"0"},0).stop().attr({ src: "img/포럽.png" }).animate({opacity:"1"},600);
        $('.m_swatting>img').css({opacity:"0"},0).stop().attr({ src: "img/허위신고.png" }).animate({opacity:"1"},600);

        $('.m_forup').fadeIn(0);
        $('.m_swatting').fadeIn(0);
        $(this).fadeOut(600);
        $('#web_btn').fadeIn(600);
        $('#m_parkinson>img').removeClass("web");
        $("#m_parkinson>img").addClass("ui");
        
        $('.accordion>div>div').animate({height:"20vw"},0);
    });

    $('.m_parkinson').click(function(){
        var parkinson_height = $(".m_parkinson").height();
        if(parkinson_height > 100){
            location.href = './Parkinson.html'
        }
    });
    
    $('.m_prefer').click(function(){
        var parkinson_height = $(".m_prefer").height();
        if(parkinson_height > 100){
            location.href = './prefer.html'
        }
    });

    $('.m_avataj').click(function(){
        var parkinson_height = $(".m_avataj").height();
        if(parkinson_height > 100){
            location.href = './avataj.html'
        }
    });
    
    $('.m_forup').click(function(){
        var parkinson_height = $(".m_forup").height();
        if(parkinson_height > 100){
            location.href = './forup.html'
        }
    });
    
    $('.m_swatting').click(function(){
        var parkinson_height = $(".m_swatting").height();
        if(parkinson_height > 100){
            location.href = './swatting.html'
        }
    });
    
    
});


