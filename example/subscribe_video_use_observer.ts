/*
- 每個 Observable 的目標就是 RxJS 的 Subject
- addObserver() 就是 RxJS 的 subscribe(). 都是把 Observer 加入清單內
- removeObserver() 就是 RxJS 的 unsubscribe()
- Observer 實作的 notify() 就是 RxJS 的 Observer 的 next(). 負責接收通知
- Observable 實作的 notifyObservers() 就是 Observable 的 next(). 負責發送通知
- 除了 next(), Rx 還定義了 error() && complete()
*/
const observerA = {
    notify: (name: string) => {
        console.log(`我是觀察者 A，我收到影片 ${name} 上架通知了`);
    }
}

const observerB = {
    notify: (name: string) => {
        console.log(`我是觀察者 B，我收到影片 ${name} 上架通知了`);
    }
}

const youtubeSubject = {
    observers: [],
    notifyObservers: (name: string) => {
        youtubeSubject.observers.forEach(observer => {
            observer.notify(name);
        })
    },
    addObserver: observer => {
        youtubeSubject.observers.push(observer);
    },
    removeObserver: observer => {
        youtubeSubject.observers = youtubeSubject.observers.filter(
            obs => obs !== observer
        );
    }
}

youtubeSubject.notifyObservers('駭客任務');

youtubeSubject.addObserver(observerA);
youtubeSubject.addObserver(observerB);
youtubeSubject.notifyObservers('侏羅紀公園');
