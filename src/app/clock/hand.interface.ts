import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { RouterState } from '@angular/router';
import { TimerService } from '../services/timer.service';

export interface IHand {
    state: string;
    angle: number;
    nextAngle: number;
    nextShadowX: number;
    nextShadowY: number;
    nextDX: number;
    nextDY: number;
    dK: number;
    handHeight: number;
    spotHeight: number;
}