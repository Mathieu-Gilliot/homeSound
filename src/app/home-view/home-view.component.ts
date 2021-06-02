import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import { ITrack } from './Interface/Itrack';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  @Output('currentTrack')currentTrack = new EventEmitter();
  
  

 
  constructor() { }
  ngOnInit(): void {

  }

  getListOfSongs(): ITrack[] {
    return [
      {
        title: "Blue",
        author: "Eiffel 65",
        duration: 3.43,
        id: 1,
        path: "assets/mp3/Eiffel 65 - Blue.mp3"
      },
      {
        title: "Welcome to the jungle",
        author: "Guns N' Roses",
        duration: 4.33,
        id: 2,
        path: "assets/mp3/Guns N' Roses - Welcome to the Jungle with lyrics!.mp3"
      },
      {
        title: "Want to want me",
        author: "Jason Derulo",
        duration: 3.47,
        id: 3,
        path: "assets/mp3/Jason Derulo - Want To Want Me (Official Video).mp3"
      },
      {
        title: "Surfing with the aliens!",
        author: "Joe Satriani",
        duration: 4.33,
        id: 4,
        path: "assets/mp3/Joe Satriani Surfing with the alien!.mp3"
      },
      {
        title: "Living on my own",
        author: "Freddie Mercury",
        duration: 3.51,
        id: 5,
        path: "assets/mp3/Living On My Own (1993 Remix) - Freddie Mercury.mp3"
      },
      {
        title: "I wanna rock",
        author: "Twisted Sister",
        duration: 2.59,
        id: 6,
        path: "assets/mp3/Twisted Sister - I Wanna Rock.mp3"
      },
      {
        title: "Vertigo",
        author: "U2",
        duration: 3.11,
        id: 7,
        path: "assets/mp3/U2 - Vertigo.mp3"
      },
      {
        title: "Can't stop rockin'",
        author: "ZZ TOP",
        duration: 3.03,
        id: 8,
        path: "assets/mp3/ZZ Top- Can't Stop Rockin' (lyrics).mp3"
      }
    ];
  }
   sendToParent(song:ITrack){
     this.currentTrack.emit(song);
   }
   tracks = this.getListOfSongs();
}



