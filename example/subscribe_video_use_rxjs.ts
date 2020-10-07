/*
使用 RxJS 替代 觀察者模式 的寫法
*/
import { Subject, Subscription } from 'rxjs';

const youtuber1$ = new Subject();
youtuber1$.next('駭客任務');

const observerA = {
    next: (name: string) => {
        console.log(`我是觀察者 B，我收到影片 ${name} 上架通知了`);
    },
    error: () => {},
    complete: () => {},
}

// 把 Observer 加入 被通知清單
// Observer 訂閱某個 Observable, 並把資料交給 Observer 處理
const observerASubscription: Subscription = youtuber1$.subscribe(observerA);
// 未來可用 observerASubscription 來實現 退訂

youtuber1$.next('侏羅紀公園');

const observerBSubscription = youtuber1$.subscribe(name => {
    console.log(`我是觀察者 B，我收到影片 ${name} 上架通知了`);
});

youtuber1$.next('惡靈古堡');

observerASubscription.unsubscribe();

youtuber1$.next('復仇者聯盟');