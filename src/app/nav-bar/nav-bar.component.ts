import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output("actualView") actualView = new EventEmitter;

  constructor() { }

  sendViewValue(value:string){
    this.actualView.emit(value);
  }

  ngOnInit(): void {
  }

}
