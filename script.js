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
        $(".1-image").css("opacity","0.5")
    });

    $(".1-image").mouseleave(function(){
        $(".h6a").hide();
        $(".1-image").css("opacity","2")
    });
});

$(document).ready(function(){
    $(".2-image").mouseenter(function(){
        $(".h6b").show();
        $(".2-image").css("opacity","0.9")
    });

    $(".2-image").mouseleave(function(){
        $(".h6b").hide();
        $(".2-image").css("opacity","2")
    });
});

$(document).ready(function(){
    $(".3-image").mouseenter(function(){
        $(".h6c").show();
        $(".3-image").css("opacity","0.9")
    });

    $(".3-image").mouseleave(function(){
        $(".h6c").hide();
        $(".3-image").css("opacity","2")
    });
});

$(document).ready(function(){
    $(".4-image").mouseenter(function(){
        $(".h6d").show();
        $(".4-image").css("opacity","0.9")
    });

    $(".4-image").mouseleave(function(){
        $(".h6d").hide();
        $(".4-image").css("opacity","2")
    });
});

$(document).ready(function(){
    $(".5-image").mouseenter(function(){
        $(".h6e").show();
        $(".5-image").css("opacity","0.9")
    });

    $(".5-image").mouseleave(function(){
        $(".h6e").hide();
        $(".5-image").css("opacity","2")
    });
});

$(document).ready(function(){
    $(".6-image").mouseenter(function(){
        $(".h6f").show();
        $(".6-image").css("opacity","0.9")
    });

    $(".6-image").mouseleave(function(){
        $(".h6f").hide();
        $(".6-image").css("opacity","2")
    });
});

$(document).ready(function(){
    $(".7-image").mouseenter(function(){
        $(".h6g").show();
        $(".7-image").css("opacity","0.9")
    });

    $(".7-image").mouseleave(function(){
        $(".h6g").hide();
        $(".7-image").css("opacity","2")
    });
});

$(document).ready(function(){
    $(".8-image").mouseenter(function(){
        $(".h6h").show();
        $(".8-image").css("opacity","0.9")
    });

    $(".8-image").mouseleave(function(){
        $(".h6h").hide();
        $(".8-image").css("opacity","2")
    });
});

$(document).ready(function(){
    $("form#myform").submit(function(event){
        let name= $("input#myname").val();
        let email= $("input#myemail").val();
        let message= $("textarea#area").val();

        if (name && email) {
            alert(name + ",Thank you,we have received your message");
        } else{
            alert("Please enter your name and email");
        }

    });

});



