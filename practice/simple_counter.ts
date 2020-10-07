import { stat } from 'fs';
import { nextTick } from 'process';
import { Subject, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

let startButton = document.querySelector('#start');
let countButton = document.querySelector('#count');
let errorButton = document.querySelector('#error');
let completeButton = document.querySelector('#complete');

let currentCounterLabel = document.querySelector('#currentCounter');
let evenCounterLabel = document.querySelector('#evenCounter');
let statusLabel = document.querySelector('#status');

let counter: number = 0;
let counter$: Subject<number>;

fromEvent(startButton, 'click').subscribe(() => {
    counter = 0;
    counter$ = new Subject();

    statusLabel.innerHTML = '目前狀態：開始計數';

    counter$.subscribe(data => {
        currentCounterLabel.innerHTML = `目前計數：${data}`;
    });

    const evenCounter$ = counter$.pipe(
        filter(data => data % 2 === 0)
    );
    evenCounter$.subscribe(data => {
        evenCounterLabel.innerHTML = `偶數計數：${data}`;
    });

    counter$.subscribe({
        next: data => currentCounterLabel.innerHTML = `目前計數：${data}`,
        error: msg => statusLabel.innerHTML = `目前狀態：錯誤 -> ${msg}`,
        complete: () => statusLabel.innerHTML = '目前狀態：完成'
    });

    counter$.next(counter);
});

fromEvent(countButton, 'click').subscribe(() => {
    counter$.next(++counter);
});

fromEvent(errorButton, 'click').subscribe(() => {
    const reason = prompt('請輸入錯誤訊息');
    counter$.error(reason || 'error');
});

fromEvent(completeButton, 'click').subscribe(() => {
    counter$.complete();
});