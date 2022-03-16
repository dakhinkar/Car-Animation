function soundPlay(){
    var sound1 = document.createElement('audio');
    sound1.setAttribute('src','sound.mp3');
    sound1.loop = true;
    sound1.autoplay = true;
    sound1.play();
}

