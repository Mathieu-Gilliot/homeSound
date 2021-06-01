import { Component, OnInit } from '@angular/core';
import { ITrack } from '../home-view/Interface/Itrack';

@Component({
  selector: 'app-sound-bar',
  templateUrl: './sound-bar.component.html',
  styleUrls: ['./sound-bar.component.scss']
})
export class SoundBarComponent implements OnInit {

  constructor() { }

  currentTrack:ITrack={
    title:"The Eagle flies alone",
    author:"Arch Enemy",
    duration:4.51
  }

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
