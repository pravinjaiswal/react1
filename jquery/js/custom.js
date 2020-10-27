//console.log($);
//console.log(jQuery);

// jQuery("button").click(function() {
//     console.log("Button Clicked");
// });

// $("button").click(function() {
//     console.log("Button Clicked");
//     });

// jQuery.noConflict();
// jQuery(document).ready(function ($){
//     $("button").click(function() {
//         console.log("Button Clicked");
//         });
// });



// jQuery.noConflict();
// jQuery(document).ready(function ($){
//     $("button").click(function() {
//         alert("Button Clicked");
//     });

//     $("p").click(function(){
//         alert("element selector");
//     });

//     $("#btn-id").click(function(){
//         alert("Id Selector");

//     });

//     $(".btn-class").click(function(){
//         alert("Class selector");
//     });
// });


// jQuery.noConflict();
// jQuery(document).ready(function ($){
//     //mouse Events
//     //1.click
//     //2.Double Click
//     //3.mouse leave
//     //4.Mouse enter
//     //5.hover
    
//     $("p").click(function(){
//         console.log("clicked");
//     });

//     $("p").dblclick(function(){
//         console.log("Double Clicked");
//     });

//     $("p").mouseenter(function(){
//         console.log("mouse Entered");
//     });

    
//     $("p").mouseleave(function(){
//         console.log("mouse leaveed");
//     });
// });


// jQuery.noConflict();
// jQuery(document).ready(function ($){

//     //Keyboard events

//     $("#name").keypress(function(){
//         console.log("Key press");
//     });

//     $("#name").keyup(function(){
//         console.log("Key up");
//     });

//     $("#name").keydown(function(){
//         console.log("Key down");
//     });
// });

// jQuery.noConflict();
// jQuery(document).ready(function ($){

//     //Form Event
//     $("#fname").focus(function(){
//         console.log("Focused");
//     });

//     $("#fname").blur(function(){
//         console.log("blured");
//     });

//     $("#form-ids").submit(function(e){
//         console.log("submitted");
//         e.preventDefault();
//     });

//     //Window Event

//     $(window).resize(function(){
//         console.log("window resized");
//     });

// });

// hide image

// jQuery.noConflict();
// jQuery(document).ready(function($){
//     //image hide
//     $("#btn-hide").click(function(){
//         $("#image-id").hide(2000,function(){
//             console.log("image is hidden");
//         });
//         console.log("Image Hide");
//     });
//     //Show

//     $("#btn-show").click(function(){
//         $("#image-id").show(1000,function(){
//             console.log("image show");
//         });
//     });

// //Hide and show
//         $("#btn-toggle").click(function(){
//             $("#image-id").toggle(1000,function(){
//                 console.log("image show/hide");
//             });
// });


// //Fade out
// $("#btn-fadeout").click(function(){
//     $("#image-id").fadeOut(1000,function(){
//         console.log("image show/hide");
//     });
// });

// $("#btn-fadein").click(function(){
//     $("#image-id").fadeIn(1000,function(){
//         console.log("image show/hide");
//     });
// });


// $("#btn-fadetoggle").click(function(){
//     $("#image-id").fadeToggle(1000,function(){
//         console.log("image fade toggle ho chhe");
//     });
// });

// $("#btn-fadeto").click(function(){
//     $("#image-id").fadeTo(1000, 0.5, function(){
//         console.log("image fade to ho chuka he ");
//     });
// });

// //slide -down
// $("#btn-slideup").click(function(){
//     $("#image-id").slideUp(1000,function(){
//         console.log("image Slide up ho chuka he ");
//     });
// });

// $("#btn-slidedown").click(function(){
//     $("#image-id").slideDown(1000,function(){
//         console.log("image Slide down ho chuka he ");
//     });
// });

// $("#btn-slidetoggle").click(function(){
//     $("#image-id").slideToggle(1000,function(){
//         console.log("image Slide toggle ho chuka he ");
//     });
// });

// });

jQuery.noConflict();
jQuery(document).ready(function($){
    //Animate -Perform a custom animation of a set of css

    $("#btn-animate").click(function(){
        $("#zom-id").animate({left: "+=80"}, 1000, function(){
            console.log("image animate ho huka he");
        });
    });

    let textdata = $("p").text();
    console.log(textdata);

    $("p").mouseenter(function(){
    console.log("Mouse in");
    });

    $("p").mouseleave(function(){
        console.log("Mouse out");
        })

       // set text
    $("#btn-setText").click(function(){
        $("p").text("Hello Pranav");
    })

    //Get html 
    let htmldata =$("p").text();
    console.log("htmldata");

});

