$(document).ready(function(){ 
    var button,
        count,
        letter,
        banned,
        ban = ["ASS", "SEX", "FAG", "PEE", "DIE", "FUK", "POO", "KKK"]; //Words banned from high score submission.
    
    $("#keyboard-letter").click(function(){
        if ($("#initials").val().length < 3 && typeof letter != 'undefined') {
            $("#keyboard-submit").css("background-color", "#ffffff");
            $("#keyboard-submit").css("color", "#000000");
            $("#initials").css("background-color", "#ffffff");
            $("#initials").css("color", "#000000");
            
            var initials = $("#initials").val();
            if (initials === '') {
                $("#initials").val(letter);
            } else {
                $("#initials").val($("#initials").val() + letter);
            }
            var letter1 = $("#key-" + button).attr("data-l1"),
                letter2 = $("#key-" + button).attr("data-l2"),
                letter3 = $("#key-" + button).attr("data-l3");

            $("#key-" + button).text(letter1 + letter2 + letter3);
            $("#key-" + button).css("background-color", "white");
            $("#keyboard-submit").prop("disabled",false);
        }
        
        
        if ($("#initials").val().length === 3) {
            $("#keyboard-submit").css("background-color", "#008b99");
            $("#keyboard-submit").css("color", "#FFFFFF");
            banned = false;
            for(i=0;i<ban.length;i++) {
                if ($("#initials").val() === ban[i]) {
                    banned = true;   
                }
            }
            if(banned) {
                $("#keyboard-submit").css("background-color", "#ff7272");
                $("#initials").css("background-color", "#ff7272");
                $("#initials").css("color", "#FFFFFF");
                $("#keyboard-submit").prop("disabled",true);
            } else {
                $("#keyboard-submit").prop("disabled",false);
            }
        }
        letter = undefined;
        button = undefined;
        count = undefined;
    });
    
    $("#keyboard-clear").click(function(){
        $("#initials").val(undefined);
        letter = undefined;
        button = undefined;
        count = undefined;
        
        $("#keyboard-submit").css("background-color", "#ffffff");
        $("#keyboard-submit").css("color", "#000000");
        $("#initials").css("background-color", "#ffffff");
        $("#initials").css("color", "#000000");
    });
    
    $(".key").click(function() {
        if ($(this).attr("value") === button || typeof button == 'undefined' ) {
            button = $(this).attr("value");

            if ($("#initials").val().length < 3) {
                if (typeof count === 'undefined') {
                    letter = $(this).attr("data-l1");
                    $(this).text(letter);
                    $(this).css("background-color", "#c6e9f5");
                    count = 1;
                } else if (count === 1) {
                    letter = $(this).attr("data-l2");
                    $(this).text(letter);
                    $(this).css("background-color", "#c6e9f5");
                    count = 2;
                } else {
                    letter = $(this).attr("data-l3");
                    $(this).text(letter);
                    $(this).css("background-color", "#c6e9f5");
                    count = undefined;
                }
            }
        } else {
            var letter1 = $("#key-" + button).attr("data-l1"),
                letter2 = $("#key-" + button).attr("data-l2"),
                letter3 = $("#key-" + button).attr("data-l3");
            $("#key-" + button).css("background-color", "white");
            $("#key-" + button).text(letter1 + letter2 + letter3);
            button = undefined;
            count = undefined;
            letter = undefined;
        }
    });
});
