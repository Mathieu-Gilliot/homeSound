import { Component } from '@angular/core';
import { ITrack } from './home-view/Interface/Itrack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HomeSound';
  sectionTitle:String="Bienvenue sur HomeSound";
  section:String="home";
  
  actualSong: ITrack = {
    title: "-------",
    author: "---",
    duration: 0.00,
    id: 0,
    path: '/'
  }
  changeView(value:string){
    this.section=value;
    if(value == "home"){
      this.sectionTitle = "Bienvenue sur HomeSound";
    }else if(value == "tous"){
      this.sectionTitle = "Tous mes morceaux";
    }else if(value == "search"){
      this.sectionTitle = "Importez vos morceaux"
    }
  }
  changeTrack(song:ITrack){
    this.actualSong = song;
  }
  
}
