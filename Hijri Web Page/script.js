var fnc=function(){
		document.getElementById("img").src=images[x];
		x=(x==2)?0:x+1;
        	setTimeout(fnc, 1500);
    	};
var images = [] ,x=0;

images[0]="img\\web_img1.JPG";
images[1]="img\\web_img2.JPG";
images[2]="img\\web_img3.JPG";

