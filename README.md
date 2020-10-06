# RxJS (很抽象, 學習要有耐心= =)

- 2020/10/06
- [RxJS-Introduction](https://rxjs-dev.firebaseapp.com/guide/overview)
- [打通 RxJS 任督二脈](https://ithelp.ithome.com.tw/articles/10237728)

RxJS 是 Reactive Extensions(ReactiveX, Rx) 用來 js 的實現版本

也就是說, Rx 只是個架構, 他也可以拿來到 [各種程式語言的應用](https://github.com/ReactiveX)

Rx 用來處理 `Async` && `Streaming`, 此兩者為處理目標 ,可讓程式碼變得乾淨很多

> ReactiveX is a combination of the best ideas from the `Observable` pattern, the `Iterator` pattern, and `functional programming`

RxJS 的五個重點: 
- Asynchronous programming
- Stream
- Observable pattern
- Iterator pattern
- Functional programming


## Usage

1. CDN: (參考 use_cdn/) https://unpkg.com/@reactivex/rxjs@6.0.0/dist/global/rxjs.umd.min.js
2. parcel
    - sudo npm install -g parcel-bundler
    - npm init
    - npm install --save rxjs

## 名詞

- Stream
- Operators

