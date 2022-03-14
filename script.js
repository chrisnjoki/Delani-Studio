$(document).ready(function(){
    $(".design").click(function(){
        $(".design-icon").toggle();
        $(".design-description").toggle();
    });
});

$(document).ready(function(){
    $(".development").click(function(){
        $(".development-icon").toggle();
        $(".development-description").toggle();
    });
});

$(document).ready(function(){
    $(".product").click(function(){
        $(".product-icon").toggle();
        $(".product-description").toggle();
    });
});

$(document).ready(function(){
    $(".1-image").mouseenter(function(){
        $(".h6a").show();
        $("1-image").css("opacity","0.9")
    });

    $(".1-image").mouseleave(function(){
        $(".h6a").hide();
        $("1-image").css("opacity","2")
    });
});

$(document).ready(function(){
    $(".2-image").mouseenter(function(){
        $(".h6b").show();
        $("1-image").css("opacity","0.9")
    });

    $(".2-image").mouseleave(function(){
        $(".h6b").hide();
        $("2-image").css("opacity","2")
    });
});
