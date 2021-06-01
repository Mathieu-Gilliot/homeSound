import { Component, OnInit } from '@angular/core';
import { ITrack } from './Interface/Itrack';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor() { }

  tracks : Array<ITrack> = [
    {
      title:"The eagle flies alone",
      duration: 4.59,
      author: "Arch Enemy"
    },
    {
      title:"War Eternal",
      duration: 3.25,
      author: "Arch Enemy"
    },
    {
      title:"The eagle flies alone",
      duration: 4.59,
      author: "Arch Enemy"
    },
    {
      title:"War Eternal",
      duration: 3.25,
      author: "Arch Enemy"
    }, {
      title:"The eagle flies alone",
      duration: 4.59,
      author: "Arch Enemy"
    },
    {
      title:"War Eternal",
      duration: 3.25,
      author: "Arch Enemy"
    },    {
      title:"The eagle flies alone",
      duration: 4.59,
      author: "Arch Enemy"
    },
    {
      title:"War Eternal",
      duration: 3.25,
      author: "Arch Enemy"
    },
    {
      title:"The eagle flies alone",
      duration: 4.59,
      author: "Arch Enemy"
    },
    {
      title:"War Eternal",
      duration: 3.25,
      author: "Arch Enemy"
    }, {
      title:"The eagle flies alone",
      duration: 4.59,
      author: "Arch Enemy"
    },
    {
      title:"War Eternal",
      duration: 3.25,
      author: "Arch Enemy"
    },    {
      title:"The eagle flies alone",
      duration: 4.59,
      author: "Arch Enemy"
    },
    {
      title:"War Eternal",
      duration: 3.25,
      author: "Arch Enemy"
    },
    {
      title:"The eagle flies alone",
      duration: 4.59,
      author: "Arch Enemy"
    },
    {
      title:"War Eternal",
      duration: 3.25,
      author: "Arch Enemy"
    }, {
      title:"The eagle flies alone",
      duration: 4.59,
      author: "Arch Enemy"
    },
    {
      title:"War Eternal",
      duration: 3.25,
      author: "Arch Enemy"
    }
  ]


  ngOnInit(): void {
  }

}
