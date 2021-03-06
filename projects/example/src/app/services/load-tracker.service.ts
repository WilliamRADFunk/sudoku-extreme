import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadTrackerService {
    private loadAmount: Subject<number> = new Subject<number>();
    currLoadAmount: Observable<number> = this.loadAmount.asObservable();

    constructor() { }

    restart() {
        this.loadAmount = new Subject<number>();
        this.currLoadAmount = this.loadAmount.asObservable();
    }

    updateLoad(amt: number): void {
        if (amt >= 1) {
            this.loadAmount.next(Math.floor(amt));
        } else {
            this.loadAmount.next(amt);
        }
    }
}
