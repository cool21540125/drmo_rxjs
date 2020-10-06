import { Subject, Subscription } from 'rxjs';

const src = new Subject();
const subscription: Subscription = src.subscribe((data) => console.log(data));

src.next(8);  // 8
src.next(7);  // 7

subscription.unsubscribe();

src.next(6);  // (不處理了)

console.log(subscription.closed);  // true