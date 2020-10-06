// 自行使用 Subject 開始建立 新的 Observable
// 比較 example3.ts
import { Subject } from 'rxjs';

const src = new Subject();
document.addEventListener('click', evt => {
    src.next(evt);
});