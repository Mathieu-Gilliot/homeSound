import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {

  files:any;
  constructor() { }
  getFilesFromFolder(files:any){
    console.log(files.files)
  }
  ngOnInit(): void {
  }

}
