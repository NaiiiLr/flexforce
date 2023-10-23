import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer} from 'rxjs';

import { CheckboxCustomEvent, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-child',
  templateUrl: 'child.component.html',
})
export class ChildComponent implements OnInit, OnDestroy {
  @Input() modal!: IonModal;

  @Output() dismissChange = new EventEmitter<boolean>();

  checkboxChanged(event: any) {
    const ev = event as CheckboxCustomEvent;
    const checked = ev.detail.checked;

    this.dismissChange.emit(checked);
  }

  running: boolean = false;
  minutes: number = 0;
  seconds: number = 0;
  private timer: Observable<number>;
  private timerSubscription: Subscription | undefined;

  constructor() {
    this.timer = timer(0, 1000); 
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  startTimer() {
    if (!this.running) {
      this.running = true;
      this.timerSubscription = this.timer.subscribe(() => {
        this.seconds++;
        if (this.seconds === 60) {
          this.minutes++;
          this.seconds = 0;
        }
      });
    }
  }

  stopTimer() {
    if (this.running && this.timerSubscription) {
      this.running = false;
      this.timerSubscription.unsubscribe();
    }
  }

  resetTimer() {
    this.running = false;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.minutes = 0;
    this.seconds = 0;
  }
}
