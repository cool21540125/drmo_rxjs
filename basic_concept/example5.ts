// pipe 可以把 operators 串接起來
import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

fromEvent(document, 'click')
    .pipe(
        filter((_, index) => index % 2 === 0),
        map((evt: MouseEvent) => ({ x: evt.x, y: evt.y }))
    );