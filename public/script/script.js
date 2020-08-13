var slideIndex=0;
    show();
    function show(){
    var imgCont= document.getElementsByClassName="image-container";
    for(var i=0; i<imgCont.length; i++){
        imgCont[i].style.display="none";
    };

    slideIndex++;

    if(slideIndex>imgCont.length){slideIndex=1};

    imageCont[slideIndex-1].style.display="block";

    setTimeout(show,4000);
    }