import { Component, OnInit } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import { TimerService } from '../../services/timer.service';
import { TimerModel } from 'src/app/models/timer.model';


@Component({
  selector: 'app-seconds',
  templateUrl: './seconds.component.html',
  styleUrls: ['./seconds.component.scss'],
  providers:[TimerService],
  animations:[
    trigger('currentNext',[
      state('next', style({ 
        'transform': 'rotate({{angle}}deg)',
        '-o-transform': 'rotate({{angle}}deg)',
        '-ms-transform': 'rotate({{angle}}deg)',
        '-moz-transform': 'rotate({{angle}}deg)',
        '-webkit-transform': 'rotate({{angle}}deg)',
        'transform-origin': 'bottom center'
      }),
      {'params': {'angle': '0','dX': -5, 'dY': 3,'shadowX': -15, 'shadowY': 9.18}}),
    ])
  ]
})
export class SecondsComponent implements OnInit {
    state: string = 'current';
    angle: number = 0;
    nextAngle: number = 0;
    nextShadowX: number = 0;
    nextShadowY: number = 0;
    nextDX: number = 0;
    nextDY: number = 0;
    dK: number = 5;
    handHeight: number = 230;
    spotHeight: number = 15;

    constructor(private timer: TimerService){}

    ngOnInit(): void {
      this.timer.time.subscribe((time: TimerModel) => {
        this.nextAngle = time.seconds * 6;
        var rad = (this.nextAngle + this.timer.spotAngle) * 2 * Math.PI / 360;
        this.nextShadowX = Math.sin(rad) * this.spotHeight;
        this.nextShadowY = Math.cos(rad) * this.spotHeight;
        this.nextDX = Math.sin(rad) * this.dK;
        this.nextDY = Math.cos(rad) * this.dK;
        this.nextDY = this.nextDY < 0 ? 0 : this.nextDY;
  
        this.state = 'next';
      }) 
    };
}
