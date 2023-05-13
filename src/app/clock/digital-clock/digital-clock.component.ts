import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { TimerModel } from 'src/app/models/timer.model';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {

  public currTime: string;

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.time.subscribe((time: TimerModel) => {
      this.currTime = ('0' + time.hours.toString()).substr(-2) + ':' + ('0' + time.minutes.toString()).substr(-2) + ':' + ('0' + time.seconds.toString()).substr(-2);
    })
  };
}