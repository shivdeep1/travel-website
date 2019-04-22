setInterval(slide, 30000);
var links = ['videos/brasil2.mp4', 'videos/europe2.mp4', 'videos/singapore2.mp4','videos/sa.mp4'];
var colours=['images/grad1.jpg','images/grad2.jpg','images/grad3.jpg','images/grad4.jpg','images/grad5.jpg','images/grad6.jpg']
var index=0;

function slide(){
    document.getElementById('slider').src=links[index];
    index=(index+1)%links.length;
}
function change_slide(x){
    index=index+x;
    if(index==-1)
        index=links.length-1;
    if(index==links.length)
        index=0;
    document.getElementById('slider').src=links[index];
}
function opac() {
    document.getElementById("nav").style.opacity = "1";
}

//on scroll script

window.addEventListener("scroll", function(){
    console.log(window.pageYOffset);
    if(window.pageYOffset > 450){
        document.getElementById("p1").style.animationPlayState="running";
    }
    if(window.pageYOffset > 2000){
        var x= document.getElementsByClassName("card4");
        for(var i=0;i<x.length;i++)
            x[i].style.animationPlayState="running";
    }
    if(window.pageYOffset > 2600){
        var x= document.getElementsByClassName("card6");
        for(var i=0;i<x.length;i++)
            x[i].style.animationPlayState="running";
    }
    }
)


// If user clicks anywhere outside of the modal, Modal will close

var modal = document.getElementById('modal-wrapper');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

        
 