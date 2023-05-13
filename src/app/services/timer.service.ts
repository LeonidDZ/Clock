import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimerModel } from '../models/timer.model';

@Injectable({providedIn: 'root'})
export class TimerService {
  
  public spotAngle: number = 0; //-90;

  constructor(){}
  
  public time = new Observable<TimerModel>(observer => {
    setInterval(() => observer.next(
        new TimerModel()
      ), 1000);
  });
}
