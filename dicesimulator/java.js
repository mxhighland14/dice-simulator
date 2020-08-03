const button = document.getElementById("btn")
let i = 0;
let images = [];
let time = 500;
let num = Math.floor(Math.random() * 6) + 1;

//image List
images[0] = "dice1.jpg";
images[1] = "dice2.jpg";
images[2] = "dice3.jpg";
images[3] = "dice4.jpg";
images[4] = "dice5.jpg";
images[5] = "dice6.jpg";
//extra image to make the cycle work
images[6] = "Capture.PNG";


//roll simulation
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    }else{
        document.slide.src = images[num - 1];
    }
    setTimeout("changeImg()", time);
}
//roll does not work with the button and will show result before button click :(
button.onclick;

    setTimeout(
    function result(){
        document.querySelector('h2').innerHTML = "You rolled a " + num + "!";
    },5000);


