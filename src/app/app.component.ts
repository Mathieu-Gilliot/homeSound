import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HomeSound';
  sectionTitle:String="Bienvenue sur HomeSound";
  section:String="home";

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
}
