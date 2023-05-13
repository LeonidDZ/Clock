import { Component, OnInit } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import { TimerService } from '../../services/timer.service';
import { IHand } from '../hand.interface';
import { TimerModel } from 'src/app/models/timer.model';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss'], animations: [
    trigger('currentNext', [
      state('next', style({
        'transform': 'rotate({{angle}}deg)',
        '-o-transform': 'rotate({{angle}}deg)',
        '-ms-transform': 'rotate({{angle}}deg)',
        '-moz-transform': 'rotate({{angle}}deg)',
        '-webkit-transform': 'rotate({{angle}}deg)',
        'transform-origin': 'bottom center'
      }),
        { 'params': { 'angle': '0', 'dX': -5, 'dY': 3, 'shadowX': -15, 'shadowY': 9.18 } }),
    ])
  ]
})
export class HoursComponent implements IHand, OnInit {
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

  constructor(private timer: TimerService) { }

  ngOnInit(): void {
    this.timer.time.subscribe((time: TimerModel) => {
      let hours = time.hours > 12 ? time.hours - 12 : time.hours;
      this.nextAngle = hours * 30;
      var rad = this.nextAngle * 2 * Math.PI / 360;
      this.nextShadowX = Math.sin(rad) * this.spotHeight;
      this.nextShadowY = Math.cos(rad) * this.spotHeight;
      this.nextDX = Math.sin(rad) * this.dK;
      this.nextDY = Math.cos(rad) * this.dK;
      this.nextDY = this.nextDY < 0 ? 0 : this.nextDY;

      this.state = 'next';
    })
  };
}
