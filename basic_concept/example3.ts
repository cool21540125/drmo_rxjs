// 從來源事件 建立 Observable, 比較 example2.ts
import { fromEvent } from 'rxjs';

const src = fromEvent(document, 'click');