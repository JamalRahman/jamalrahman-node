var cursorVisible = true;

$(document).ready(function(){

    setInterval('cursorBlink()',400);

    var text = "JAMAL RAHMAN";

    typeSubject = $('#maintext > .typedText');
    type(typeSubject,text,0,function(){

        typeSubject.parent().find('.cursor').remove();
        typeSubject = $('#subtext > .typedText');

        typeSubject.parent().append('<span class="cursor">|</span>');

        text = "Computer Scientist";

        type(typeSubject,text,0);

    });

});

function type(typeSub,text,index,callback){
    var randNum = Math.floor((Math.random()*130)+15);
    typeSub.html(text.substr(0,index++));
    if(index<text.length+1){
        setTimeout(function(){
            type(typeSub, text,index,callback); },randNum);
    }
    else{
        callback();
    }
}

function cursorBlink(){
    if(cursorVisible){
        $('.cursor').css('opacity',0);
        cursorVisible = !cursorVisible;
    }
    else{
        $('.cursor').css('opacity',1);
        cursorVisible = !cursorVisible;
    }

}
