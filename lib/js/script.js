let numItems = $('.icon').length;


$(window).on('load', function() {
    $('.header').append("<h5> We have " + numItems + "+ icons and illustrations now.</h5><p>everyday we upload 10+ new icons and illustrations.</p>")
    $('#loading').fadeOut(1000);

});

$(".mobilenav").on("click", function() {
    $("#nav").show("slide")
    $(".navback").show()
})
$(".navclose a").on("click", function() {
    $("#nav").hide("slide")
    $(".navback").hide()
})

let navbar = document.getElementById("nav");
let sticky = nav.offsetTop;

$(window).scroll(function() {
        if ($(window).width() > 720) {
            if (window.pageYOffset >= sticky + 100) {
                $("#nav").addClass("sticky");

            } else {
                $("#nav").removeClass("sticky");
            }
        } else {

            if (window.pageYOffset >= sticky + 400) {
                $("#mobilenav").addClass("stickymob");
                $("#mobilenav img").show()

            } else {
                $("#mobilenav").removeClass("stickymob");
                $("#mobilenav img").hide()
            }
        }
    })
    //clean code 

//$(window).on('resize',function(){  -->
//     location.reload();
// }); 


let popup = document.getElementById("download_popup");
let navback = document.getElementById("navback");

$(".downloadable").on("click", function() {
    if ($(this).children('.icon').hasClass('image')) {
        $(".color-picker-icon").hide()
        $(".color-picker-img").show()
        $(".view-grid").addClass('big-grid')
        $(".view").addClass('big-view')
    } else {
        $(".color-picker-img").hide()
        $(".color-picker-icon").show()
        $(".view-grid").removeClass('big-grid')
        $(".view").removeClass('big-view')
    }

    let title = $(this).children('.icon').attr('name');
    $('.popup-content').children('h2').replaceWith("<h2>" + title + "</h2>")
    $('a.download').attr('download', title + ".svg");

    $.get($(this).children('.icon').children('img').attr('src'), function(data) {
        $(".view").append(data)
        $(".view > svg > script").detach()
        $(".view > svg").contents().each(function() {
            if (this.nodeType === Node.COMMENT_NODE) {
                $(this).remove();
            }
        });
        $(".code").text($(".view").html())
        a(String($(".view").html()));

    }, 'text');
    $("#download_popup").fadeIn()

})

$(".close").on("click", function() {
    $("#download_popup").fadeOut(function() {
        $(".view").empty()
        $("#border_color").val('#85a782')
        $("#back_color").val('#c2e4bf')
        $("#color1").val('#8a8a8a')
        $("#color2").val('#85a782')
        $("#color3").val('#c2e4bf')
        $("#color4").val('#d4d4d4')
        $('.download').css('background-color', 'rgb(194, 228, 191)');
        $('.close').css('color', 'rgb(133, 167, 130');
        $(".code").css('color', 'rgb(133, 167, 130');
        $('.popup-content').css('border-color', 'rgb(194, 228, 191)');
        $(':root').css('--text-selection', 'rgb(194, 228, 191)');
    });

})

$(window).on("click", function(event) {
    if (event.target == navback) {
        $("#nav").hide("slide")
        $(".navback").hide()
    }
    if (event.target == popup) {
        $("#download_popup").fadeOut(function() {
            $(".view").empty()
            $("#border_color").val('#85a782')
            $("#back_color").val('#c2e4bf')
            $("#color1").val('#8a8a8a')
            $("#color2").val('#85a782')
            $("#color3").val('#c2e4bf')
            $("#color4").val('#d4d4d4')
            $('.download').css('background-color', 'rgb(194, 228, 191)');
            $('.close').css('color', 'rgb(133, 167, 130');
            $(".code").css('color', 'rgb(133, 167, 130');
            $('.popup-content').css('border-color', 'rgb(194, 228, 191)');
            $(':root').css('--text-selection', 'rgb(194, 228, 191)');
        });

    }
})

$("#border_color").change(function() {
    $(".view > svg > style").replaceWith("<style>" +
        ":root{" +
        "--border-color:" + $(this).val() + ";" +
        "--back-color:" + $("#back_color").val() + ";" +
        "}" +
        "</style>");
    $(".code").text($(".view").html());
    a(String($(".view").html()));
    $('h2').css('color', $(this).val());
    $('.close').css('color', $(this).val());
    $(".code").css('color', $(this).val());
    $('.popup-content').css('border-color', $(this).val());
});

$("#back_color").change(function() {
    $(".view > svg > style").replaceWith("<style>" +
        ":root{" +
        "--border-color:" + $("#border_color").val() + ";" +
        "--back-color:" + $(this).val() + ";" +
        "}" +
        "</style>");
    $(".code").text($(".view").html());
    a(String($(".view").html()));
    $('.download').css('background-color', $(this).val());
    $(':root').css('--text-selection', $(this).val());
});

$("#color1").change(function() {
    $(".view > svg > style").replaceWith("<style>" +
        ":root{" +
        "--color1:" + $(this).val() + ";" +
        "--color2:" + $("#color2").val() + ";" +
        "--color3:" + $("#color3").val() + ";" +
        "--color4:" + $("#color4").val() + ";" +
        "}" +
        "</style>");
    $(".code").text($(".view").html());
    a(String($(".view").html()));
});
$("#color2").change(function() {
    $(".view > svg > style").replaceWith("<style>" +
        ":root{" +
        "--color2:" + $(this).val() + ";" +
        "--color1:" + $("#color1").val() + ";" +
        "--color3:" + $("#color3").val() + ";" +
        "--color4:" + $("#color4").val() + ";" +
        "}" +
        "</style>");
    $(".code").text($(".view").html());
    a(String($(".view").html()));
    $('h2').css('color', $(this).val());
    $('.close').css('color', $(this).val());
    $(".code").css('color', $(this).val());
    $('.popup-content').css('border-color', $(this).val());
});
$("#color3").change(function() {
    $(".view > svg > style").replaceWith("<style>" +
        ":root{" +
        "--color3:" + $(this).val() + ";" +
        "--color1:" + $("#color1").val() + ";" +
        "--color2:" + $("#color2").val() + ";" +
        "--color4:" + $("#color4").val() + ";" +
        "}" +
        "</style>");
    $(".code").text($(".view").html());
    a(String($(".view").html()));
    $('.download').css('background-color', $(this).val());
    $(':root').css('--text-selection', $(this).val());
});
$("#color4").change(function() {
    $(".view > svg > style").replaceWith("<style>" +
        ":root{" +
        "--color4:" + $(this).val() + ";" +
        "--color1:" + $("#color1").val() + ";" +
        "--color2:" + $("#color2").val() + ";" +
        "--color3:" + $("#color3").val() + ";" +
        "}" +
        "</style>");
    $(".code").text($(".view").html());
    a(String($(".view").html()));
});





function a(svg) {
    $('a.download').attr('href', 'data:image/svg+xml;utf-8,' + encodeURIComponent(svg));
}

$('#copy').on("click", function() {

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#code').text()).select();
    document.execCommand("copy");
    $temp.remove();
})


$(document).on('contextmenu', 'img', function() {
    return false;
})

$("#searchbutton").on("click", function() {
    search();
});

$("#search").change(function() {
    search();
});


function search() {
    $(".result").empty()
    if ($("#search").val() != "" && $("#search").val() != " ") {
        $(".cato .icon").each(function() {
            if ($(this).attr("name").toLowerCase().includes($("#search").val().toLowerCase())) {
                $(".result").append($(this).parent().clone(true))
            } else if ($("#search").val().toLowerCase().includes($(this).attr("name").toLowerCase())) {
                $(".result").append($(this).parent().clone(true))
            }

        })
        if ($(".result .icon").length == 0) {
            $("#notfound").show()
        } else {
            $("#notfound").hide()
        }
        $("#searchResult").show()
        $("#clearbutton").show()
    } else {
        $("#searchResult").hide()
        $("#clearbutton").hide()
    }

}

$("#clearbutton").on("click", function() {
    $("#search").val('')
    $("#clearbutton").hide()
    $("#searchResult").hide()
})