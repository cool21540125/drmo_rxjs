# RxJS (很抽象, 學習要有耐心= =)

- 2020/10/06
- [RxJS-Introduction](https://rxjs-dev.firebaseapp.com/guide/overview)
- [打通 RxJS 任督二脈](https://ithelp.ithome.com.tw/articles/10237728)
- [方便使用的線上IDE-StackBlitz](https://stackblitz.com/)
- [Rx各種程式語言的應用](https://github.com/ReactiveX)
- [各種語言不同的Operators](http://reactivex.io/documentation/operators.html)
- [RxJS的Operators](https://rxjs-dev.firebaseapp.com/guide/operators)
- rxjs v6.6.3

> CDN: https://unpkg.com/@reactivex/rxjs@6.6.3/dist/global/rxjs.umd.min.js


## Basic

RxJS 是 Reactive Extensions(ReactiveX, Rx) 用來 js 的實現版本

Rx 用來處理 `Async` && `Streaming`, 此兩者為處理目標 ,可讓程式碼變得乾淨很多

> ReactiveX is a combination of the best ideas from the `Observable` pattern, the `Iterator` pattern, and `functional programming`

RxJS 的五個重點: 
- Asynchronous programming
- Stream
- Observable pattern
- Iterator pattern
- Functional programming


## Usage

1. 直接使用 CDN
2. 參考 *parcel.md*


## 名詞

- Stream
- Operators
- Observable/Subject/Stream
- Observer


## 核心步驟

1. Create : 建立 Stream/Observable/Subject
2. Combine : 透過 Operator/Operators 將 Observable 作轉換
3. Listen : Subscribe 上述的 Observable


### 1. Create Observable

```ts
// Observable 有這兩種產生方式
import { Subject } from 'rxjs';    // 自行建立 Observable
import { fromEvent } from 'rxjs';  // 透過現有 資料/事件 來建立 Observable
```

自行建立, 參考 *example1.ts*, *example2.ts*
從來源建立, 參考 *example3.ts*, *example4.ts*

### 2. Operate Observable

- 第一步也被定義成 operators 的一種, 但他們被分類為 「建立」類型
- 接收 operator, 並輸出 operator

```ts
// 「非建立」類型的 operators 都放在這邊
import { filter, map, ...} form 'rxjs/operators';
```

可用 `pipe` 來組合 operators 來處理複雜問題(把 operators 串接起來), *example5.ts*

RxJS 的 Operators 大概分成底下類型

- 建立類 Creation Operators
- 組合建立類 Join Creation Operators
- 轉換類 Transformation Operators
- 過濾類 Filtering Observables
- 組合類 Join Operators
- 多播類 Multicasting Operators
- 錯誤處理類 Error Handling Operators
- 工具類 Utility Operators
- 條件/布林類 Conditional and Boolean Operators
- 數學/聚合類 Mathematical and Aggregate Operators


### 3. Listen Observable

使用 `subscribe` 來「訂閱」Observable 的資訊 (這也是整個流程的最後一步), 這部份程式稱為 Observer

Observable 有 3 個重要方法:
- `next()` : next 之後, Listen 階段程式碼後續就會收到 新事件發生
- `error()`
- `complete()` : (無參數)

這也就是最終要處理的對象, 完整的 Observer 如下:
```ts
const observer = {
    next: (data) => { ... },
    error: (err) => { ... },
    complete: () => { ... }
};

// src 為 observable
src.subscribe(observer);  // 把 Observer 傳入 subscribe
// 幫 observable 訂閱 observer
```

上面是完整寫法, 但不會有人這樣玩, 基本上都只會處理 next, 如下:
```ts
// 寫法1
src.subscribe({
    next: (data) => { ... }
});

// 寫法2 (這個又是最常見的)
src.subscribe((data) => { ... });
```

關於 `subscribe` 呼叫後續拿到的東西, 稱作 **Subscription**, 參考 *example6.ts*

