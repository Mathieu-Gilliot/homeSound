import { Component, Input, OnInit } from '@angular/core';
import { ITrack } from '../home-view/Interface/Itrack';

@Component({
  selector: 'app-sound-bar',
  templateUrl: './sound-bar.component.html',
  styleUrls: ['./sound-bar.component.scss']
})
export class SoundBarComponent implements OnInit {
  @Input("currentTrack") currentTrack:ITrack ={
    title: "-------",
    author: "---",
    duration: 0.00,
    id: 0,
    path: '/'
  }
  constructor() { }

  audio = new Audio();

  playSong(){
       this.audio.setAttribute('src',this.currentTrack.path);
       this.audio.play();
  }  
  
  playedTime = this.audio.played;
  playSwitch(button:HTMLImageElement){
    if(button.getAttribute("src") == "assets/images/PlayButton.svg"){
       button.setAttribute("src","assets/images/PauseButton.svg")
       
    }else{
      button.setAttribute("src","assets/images/PlayButton.svg")
    }
   
  }

  ngOnInit(): void {
  }
  
}
