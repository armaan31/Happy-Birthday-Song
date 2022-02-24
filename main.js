var canvas = new fabric.Canvas('myCanvas');
function new_image(){
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        Img.scaleToWidth(700);
        Img.scaleToHeight(500);
        Img.set({
            top: 0,
            left: 0
        });
        canvas.add(Img);
    });
}
function playsound(){
    document.getElementById("myAudio").play();	
}