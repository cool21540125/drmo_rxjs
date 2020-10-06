import { Subject } from 'rxjs';

const src = new Subject();
src.next('abc');
src.next('xyz');

if (false) {  // Condition
    src.error('error message');
};

src.complete();