let music = document.getElementById("music");

function playSong()
{
    if(music.paused)
    {
        music.play();
        stopBtn();
    }
    else
    {
        music.pause();
        playBtn();
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
        stopBtn()
    }
    else
    {
        id = 0;
        let nextMusic = document.getElementById(id);
        music.src = nextMusic.src;
        music.play();
        stopBtn()
    }
}

music.onended = function(){nextSong();}
music.onplaying = function(){playBtn();}

// Auguementative functions

function playBtn()
{
    document.getElementById("smartBtnPlay").innerHTML='<img src="./System/img/svg/pause.svg" alt="">';
    document.getElementById("musicBox").innerHTML='<img src="./System/img/3TjN.gif" class="music" alt="">';
}

function stopBtn()
{
    document.getElementById("smartBtnPlay").innerHTML='<img src="./System/img/svg/pause.svg" alt="">';
    document.getElementById("musicBox").innerHTML='<img src="./System/img/3TjN.gif" class="music" alt="">';
}