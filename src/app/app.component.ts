import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, interval, take, map, Subscription, find, filter, tap, 
  fromEvent, takeUntil, takeWhile, skipUntil, skipWhile,
concatMap, forkJoin, Subject, BehaviorSubject, ReplaySubject } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'angularrxjs';
  sub: Subscription | undefined

  ngOnInit(): void {
    // simple subscription
    //of(1, 2, 3, 4, 5).subscribe(d => console.log(d))

    // interval
    // interval(1000).pipe(
    //   take(7),
    //   map(i => [1,2,3,7,9,8,9][i])
    // ).subscribe(data => console.log(data))

    // find - first to find
    // this.sub = of(1, 2, 3, 4, 5, 6).pipe(
    //   find(x => x > 2)
    // ).subscribe(data => console.log(data))

    // filter
    // this.sub = of(1, 2, 3, 4, 5, 6).pipe(
    //   filter(x => x > 2)
    // ).subscribe(data => console.log(data))

    // map
    // of(1, 2, 3, 4, 5, 6).pipe(
    //   map(x => x * 5)
    // ).subscribe(data => console.log(data))

    // tap
    // of(1, 2, 3, 4, 5, 6).pipe(
    //   filter(x => x > 3),
    //   tap(x => console.log(x))
    // ).subscribe()

    // take
    // of(1, 2, 3, 4, 5, 6).pipe(
    //   filter(x => x > 2),
    //   take(3), 
    // ).subscribe(data => console.log(data))


    const click = fromEvent(document, 'click');

    // takeUntil
    // interval(1000).pipe(
    //   takeUntil(click)
    // ).subscribe(data => console.log(data))

    // skipUntil
    // interval(1000).pipe(
    //   skipUntil(click)
    // ).subscribe(data => console.log(data))

    // skipWhile
    // of(1, 2, 3, 4, 5, 6).pipe(
    //   //filter(x => x > 2 && x < 6),
    //   skipWhile(x => x <=2 || x >= 6)
    // ).subscribe(data => console.log(data))

    const obs1 = of(1, 2, 3)
    const obs2 = of(4, 5, 6)
    const obs3 = of(7, 8, 9)
    
    // concatMap
    // obs1.pipe(concatMap(x => obs2.pipe(
    //   map(y => x*y)
    // ))).subscribe(data => console.log(data))

    // forkJoin([obs1, obs2, obs3]).subscribe(data => console.log(data))

    // Subject - last, ReplaySubject - buffer 3, BehaviorSubject - last 2

    


  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
