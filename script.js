const music = new Audio('./songs/1.mp3');
// music.play();
// create Array
// All Object Type
const songs = [  
        {   
        id: "1",
        songName: `Aaj Se Teri-Padman <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/1.jpg",
        },  
        {   
        id: "2",
        songName: `Aankh Marey <br>
        <div class="subtitle">Neha Kakkar, Mika Singh , Kumar Sanu</div>`,
        poster: "./covers/2.jpg",
        }, 
        {   
        id: "3",
        songName: `Ae Watan - Raazi <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/3.jpg",
        },  
        {   
        id: "4",
        songName: `Dhadak <br>
        <div class="subtitle">Ajay Atul , Shreya Ghosal</div>`,
        poster: "./covers/4.jpg",
        },
        {   
        id: "5",
        songName: `Jogi-Shaadi Me Zaroor Aana <br>
        <div class="subtitle">Yasser Desai</div>`,
        poster: "./covers/5.jpg",
        },  
        {   
        id: "6",
        songName: `Paisa Yeh Paisa <br>
        <div class="subtitle">Dev Nagi , Subhro Ganguly</div>`,
        poster: "./covers/6.jpg",
        },  
        {
        id: "7",
        songName: `Suit Suit <br>
        <div class="subtitle">Guru Randhawa</div>`,
        poster: "./covers/7.jpg",
        },      
        {       
        id: "8",
        songName: `Tera Fitoor <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/8.jpg",
        },      
        {       
        id: "9",
        songName: `Hum Naa Rahein Hum <br>
        <div class="subtitle">Benny Dayal</div>`,
        poster: "./covers/9.jpg",
        },  
        {   
        id: "10",
        songName: `Coca Cola <br>
        <div class="subtitle">Tony Kakkar, Neha Kakkar</div>`,
        poster: "./covers/10.jpg",
        },  
        {   
        id: "11",
        songName: `Dil Diyan Gallan <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "./covers/11.jpg",
        },
        {   
        id: "12",
        songName: `Naina Ashq na ho <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/12.jpg",
        },
        {   
        id: "13",
        songName: `Khairiyat - Chhichhore <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/13.jpg",
        },
        {   
        id: "14",
        songName: `Desh Mere - Bhuj <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/14.jpg",
        },
        {   
        id: "15",
        songName: `Dhokha <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/15.jpg",
        },
        {   
        id: "16",
        songName: `Tera Yaar Hu Main <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/16.jpg",
        },
        {   
        id: "17",
        songName: `Chunar - ABCD2 <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/17.jpg",
        },
        {   
        id: "18",
        songName: `Galti Se Mistake - Jagga Jassos <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/18.jpg",
        },
        {   
        id: "19",
        songName: `Adhuri <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/19.jpg",
        },
        {   
        id: "20",
        songName: `Traffic <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/20.jpg",
        },
        {   
        id: "21",
        songName: `Villain <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/21.jpg",
        },
        {   
        id: "22",
        songName: `Mere Yaaraa <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/22.jpg",
        },
        {   
        id: "23",
        songName: `Befikre <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/23.jpg",
        },
        {     
        id: "24",
        songName: `Tamasha <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/24.jpg",
        },
        {   
        id: "25",
        songName: `Pachtaoge <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "./covers/25.jpg",
        },
        {   
        id: "26",
        songName: `Mungda Mungda <br>
        <div class="subtitle">Jyotica Tangri, Shaan, Subhro Ganguly</div>`,
        poster: "./covers/26.jpg",
        },
        {   
        id: "27",
        songName: `Hauli Hauli <br>
        <div class="subtitle">Garry Sandhu, Neha Kakkar</div>`,
        poster: "./covers/27.jpg",
        }
        
    
]
Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
});
const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
        element.classList.add('bi-play-fill');
        element.classList.remove('bi-pause-fill');
        wave.classList.add('active2');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.style.background = 'rgb(105,105,105, .0)';
    })
}
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
   element.addEventListener('click', (e) => {
       index = e.target.id;
       music.src = `covers/${index}.mp3`;
       poster_master_play.src = `covers/${index}.jpg`;
       music.play();
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');

       let songsTitles = songs.filter((els) => {
           return els.id == index;  
       });
       songsTitles.forEach(elss => {
           let {songName} = elss;
        title.innerHTML = songName;
       });
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105, .1)";
       makeAllplays();
       e.target.classList.remove('bi-play-fill');
       e.target.classList.add('bi-pause-fill');
       wave.classList.add('active2');
    });
})
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_cur = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerHTML = `${min1}:${sec1}`;
    let min2 = Math.floor(music_cur / 60);
    let sec2 = Math.floor(music_cur % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerHTML = `${min2}:${sec2}`;
    let ProgressBar = parseInt((music_cur / music_dur) *100);
    seek.value = ProgressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `covers/${index}.mp3`;
    poster_master_play.src = `covers/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    let songsTitles = songs.filter((els) => {
        return els.id == index;  
    });
    songsTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105, .1)";
    makeAllplays();
    e.target.classList.remove('bi-play-fill');
    e.target.classList.add('bi-pause-fill');
    wave.classList.add('active2');
});

next.addEventListener('click', () => {
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `covers/${index}.mp3`;
    poster_master_play.src = `covers/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    let songsTitles = songs.filter((els) => {
        return els.id == index;  
    });
    songsTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105, .1)";
    makeAllplays();
    e.target.classList.remove('bi-play-fill');
    e.target.classList.add('bi-pause-fill');
    wave.classList.add('active2');
});






















let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop-song')[0];

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});
pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

left_scroll.addEventListener('click', () => {
     Artists_bx.scrollLeft -= 330;
});
right_scroll.addEventListener('click', () => {
     Artists_bx.scrollLeft += 330;
});