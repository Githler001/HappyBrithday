let music = document.getElementById("music");

function playSong()
{
    if(music.paused)
    {
        music.play();
        document.getElementById("smartBtnPlay").innerHTML='<img src="./System/img/svg/pause.svg" alt="">';
        document.getElementById("musicBox").innerHTML='<img src="./System/img/3TjN.gif" class="music" alt="">';
    }
    else
    {
        music.pause();
        document.getElementById("smartBtnPlay").innerHTML='<img src="./System/img/svg/play.svg" alt="">';
        document.getElementById("musicBox").innerHTML='<img src="./System/img/3TjN.png" class="music" alt="">';
    }
    

}

let id = 0;

function nextSong()
{
    if(id < 4)
    {
        id ++;
        let nextMusic = document.getElementById(id);
        music.src = nextMusic.src;
        music.play();
        document.getElementById("smartBtnPlay").innerHTML='<img src="./System/img/svg/pause.svg" alt="">';
        document.getElementById("musicBox").innerHTML='<img src="./System/img/3TjN.gif" class="music" alt="">';
    }
    else
    {
        id = 0;
        let nextMusic = document.getElementById(id);
        music.src = nextMusic.src;
        music.play();
        document.getElementById("smartBtnPlay").innerHTML='<img src="./System/img/svg/pause.svg" alt="">';
        document.getElementById("musicBox").innerHTML='<img src="./System/img/3TjN.gif" class="music" alt="">';
    }
}