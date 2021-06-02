import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ITrack } from '../home-view/Interface/Itrack';

@Component({
  selector: 'app-sound-bar',
  templateUrl: './sound-bar.component.html',
  styleUrls: ['./sound-bar.component.scss']
})
export class SoundBarComponent implements OnInit {
  @Input("currentTrack") currentTrack: ITrack = {
    title: "-------",
    author: "---",
    duration: 0.00,
    id: 0,
    path: '/'
  }
  constructor() { }

  currentProgress$ = new BehaviorSubject(0);
  currentTime$ = new Subject();
  durationTime: string | undefined;

  audio = new Audio();

  playSong() {
    this.audio.setAttribute('src', this.currentTrack.path);
    this.audio.play();
    this.audio.addEventListener('timeupdate', () => {
      // Set song duration time
      if (!this.durationTime) {
        this.setSongDuration();
      }

      // Emit converted audio currenttime in user friendly ex. 01:15
      const currentMinutes = this.generateMinutes(this.audio.currentTime);
      const currentSeconds = this.generateSeconds(this.audio.currentTime);
      this.currentTime$.next(this.generateTimeToDisplay(currentMinutes, currentSeconds));

      
    // Emit amount of song played percents
    const percents = this.generatePercentage(this.audio.currentTime, this.audio.duration);
    if (!isNaN(percents)) {
      this.currentProgress$.next(percents);
    }
    })
  }


  playSwitch(button: HTMLImageElement) {
    if (button.getAttribute("src") == "assets/images/PlayButton.svg") {
      button.setAttribute("src", "assets/images/PauseButton.svg")

    } else {
      button.setAttribute("src", "assets/images/PlayButton.svg")
    }
  }

  // Calculate song duration and set it to user friendly format, ex. 01:15
  setSongDuration(): void {
    const durationInMinutes = this.generateMinutes(this.audio.duration);
    const durationInSeconds = this.generateSeconds(this.audio.duration);

    if (!isNaN(this.audio.duration)) {
      this.durationTime = this.generateTimeToDisplay(durationInMinutes, durationInSeconds);
    }
  }

  // Generate minutes from audio time
  generateMinutes(currentTime: number): number {
    return Math.floor(currentTime / 60);
  }

  // Generate seconds from audio time
  generateSeconds(currentTime: number): number | string {
    const secsFormula = Math.floor(currentTime % 60);
    return secsFormula < 10 ? '0' + String(secsFormula) : secsFormula;
  }

  generateTimeToDisplay(currentMinutes: number, currentSeconds: string | number): string {
    return `${currentMinutes}:${currentSeconds}`;
  }

  // Generate percentage of current song
  generatePercentage(currentTime: number, duration: number): number {
    return Math.round((currentTime / duration) * 100);
  }


  ngOnInit(): void {
  }

}
