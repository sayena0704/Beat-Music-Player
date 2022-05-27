console.log("Welcome to Beat");

//Initialize the variables
let index =0;


let masterPlay = document.getElementById('playbutton');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let eachsongplay =document.getElementsByClassName('songitemPlay')
let masterSongname =document.getElementById('masterSongname');

let songs =[
    {songName: "Alone", filePath: "song/1.mp3" },
    {songName: "abcdefu", filePath: "song/2.mp3" },
    {songName: "Lover", filePath: "song/3.mp3" },
    {songName: "Tujhe kitna chahne lage", filePath: "song/4.mp3" },
    {songName: "Love Nwantiti", filePath: "song/5.mp3" },
    {songName: "Dandelions", filePath: "song/6.mp3" },
    {songName: "Khairiyat", filePath: "song/7.mp3" },
    {songName: "Dynamite", filePath: "song/8.mp3" },
    {songName: "Animals", filePath: "song/9.mp3" },
    {songName: "Heat Waves", filePath: "song/10.mp3" },
    {songName: "Drivers License", filePath: "song/11.mp3"}
] 
   

var audioElement = new Audio('song/1.mp3');
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
       gif.style.opacity =1;
   }
   else{
    audioElement.pause();
    masterPlay.classList.add('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');
    gif.style.opacity =0;
   }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //  console.log('timeupdate');
     //update seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //  console.log(progress);
     myProgressBar.value =progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeallPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element) => {
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
        
    })
}

Array.from(eachsongplay).forEach((element) => {
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeallPlays();
        index = parseInt(e.target.id);
       
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        if(index == 0){
        audioElement.src = 'song/1.mp3';
        }
        else if(index == 1){
            audioElement.src = 'song/2.mp3';
            }
            else if(index == 2){
                audioElement.src = 'song/3.mp3';
                }
                else if(index == 3){
                    audioElement.src = 'song/4.mp3';
                    }
                    else if(index == 4){
                        audioElement.src = 'song/5.mp3';
                        }
                        else if(index == 5){
                            audioElement.src = 'song/6.mp3';
                            }
                            else if(index == 6){
                                audioElement.src = 'song/7.mp3';
                                }
                                else if(index == 7){
                                    audioElement.src = 'song/8.mp3';
                                    }
                                    else if(index == 8){
                                        audioElement.src = 'song/9.mp3';
                                        }
                                        else if(index == 9){
                                            audioElement.src = 'song/10.mp3';
                                            }else if(index == 10){
                                                audioElement.src = 'song/11.mp3';
                                                }
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity =1;
        masterSongname.innerText = songs[index].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
});


document.getElementById('forwardbutton').addEventListener('click', ()=>{
    eachsongplay[index].classList.remove('fa-pause');
    eachsongplay[index].classList.add('fa-play');
    if(index >=10){
        index=0;
    }
    else{
    index+=1;
    }
    if(index == 0){
        audioElement.src = 'song/1.mp3';
        }
        else if(index == 1){
            audioElement.src = 'song/2.mp3';
            }
            else if(index == 2){
                audioElement.src = 'song/3.mp3';
                }
                else if(index == 3){
                    audioElement.src = 'song/4.mp3';
                    }
                    else if(index == 4){
                        audioElement.src = 'song/5.mp3';
                        }
                        else if(index == 5){
                            audioElement.src = 'song/6.mp3';
                            }
                            else if(index == 6){
                                audioElement.src = 'song/7.mp3';
                                }
                                else if(index == 7){
                                    audioElement.src = 'song/8.mp3';
                                    }
                                    else if(index == 8){
                                        audioElement.src = 'song/9.mp3';
                                        }
                                        else if(index == 9){
                                            audioElement.src = 'song/10.mp3';
                                            }else if(index == 10){
                                                audioElement.src = 'song/11.mp3';
                                                }
                                                   
    
    eachsongplay[index].classList.remove('fa-play');
    eachsongplay[index].classList.add('fa-pause');                            
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity =1;
    masterSongname.innerText = songs[index].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('backbutton').addEventListener('click', ()=>{
     
    eachsongplay[index].classList.remove('fa-pause');
    eachsongplay[index].classList.add('fa-play');
    if(index <=0){
        index=0;
    }
    else{
    index-=1;
    }
    if(index == 0){
        audioElement.src = 'song/1.mp3';
        }
        else if(index == 1){
            audioElement.src = 'song/2.mp3';
            }
            else if(index == 2){
                audioElement.src = 'song/3.mp3';
                }
                else if(index == 3){
                    audioElement.src = 'song/4.mp3';
                    }
                    else if(index == 4){
                        audioElement.src = 'song/5.mp3';
                        }
                        else if(index == 5){
                            audioElement.src = 'song/6.mp3';
                            }
                            else if(index == 6){
                                audioElement.src = 'song/7.mp3';
                                }
                                else if(index == 7){
                                    audioElement.src = 'song/8.mp3';
                                    }
                                    else if(index == 8){
                                        audioElement.src = 'song/9.mp3';
                                        }
                                        else if(index == 9){
                                            audioElement.src = 'song/10.mp3';
                                            }else if(index == 10){
                                                audioElement.src = 'song/11.mp3';
                                                }
    eachsongplay[index].classList.remove('fa-play');
    eachsongplay[index].classList.add('fa-pause');     
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity =1;
    masterSongname.innerText = songs[index].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})