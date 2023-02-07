let songIndex = 0;
let audiElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let pp = document.getElementById('action');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
   {songnName: "let me love you", filePath:"songs/1.mp3", coverPath: "covers/cover1.jpg"},
   {songnName: "beleiver", filePath:"songs/2.mp3", coverPath: "covers/cover2.jpg"},
   {songnName: "dusk till dawn", filePath:"songs/3.mp3", coverPath: "covers/cover3.jpg"}, 
   {songnName: "hall of fame", filePath:"songs/4.mp3", coverPath: "covers/cover4.jpg"},
   {songnName: "hymn of the weekend", filePath:"songs/5.mp3", coverPath: "covers/cover5.jpg"},
   {songnName: "love me like you do", filePath:"songs/6.mp3", coverPath: "covers/cover6.jpg"},
   {songnName: "what makes you beautiful", filePath:"songs/7.mp3", coverPath: "covers/cover7.jpg"}  
]
//audiElement.play();

//handle play pause
masterpp.addEventListener('click', ()=>{
   if(audiElement.paused || audiElement.currentTime<=0)
   {
      audiElement.play();
      masterPlay.classList.remove('fa-play');
      masterPlay.classList.add('fa-pause');
   }
   else
   {
      audiElement.pause();
      masterPlay.classList.remove('fa-pause');
      masterPlay.classList.add('fa-play');
      
   }
})
//listen to events
audiElement.addEventListener('timeupdate', ()=>{
   console.log('timeupdate');
   //update seekbar
   progress = parseInt((audiElement.currentTime/audiElement.duration)*100);
   console.log(progress);
   myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
   audiElement.currentTime = myProgressBar.value*audiElement.duration/100;
})
const makeAllPlays =()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-pause');
      element.classList.add('fa-play');
   })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click', (e)=>{
      makeAllPlays();
      index = parseInt(e.target.id);
      e.target.classList.remove('fa-play');
      e.target.classList.add('fa-pause');
      audiElement.src = `songs/${index+1}.mp3`;
      audiElement.currentTime = 0;
      audiElement.play();
      masterPlay.classList.remove('fa-play');
      masterPlay.classList.add('fa-pause');
   })
})

document.getElementById('next').addEventListener('click',()=>{
   if(songIndex>=6){
      songIndex = 0;
   }
   else{
      songIndex += 1;
   }
   audiElement.src = `songs/${songIndex+1}.mp3`;
   audiElement.currentTime = 0;
   audiElement.play();
   masterPlay.classList.remove('fa-play');
   masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
   if(songIndex <= 0){
      songIndex = 6;
   }
   else{
      songIndex -= 1;
   }
   audiElement.src = `songs/${songIndex+1}.mp3`;
   audiElement.currentTime = 0;
   audiElement.play();
   masterPlay.classList.remove('fa-play');
   masterPlay.classList.add('fa-pause');
})