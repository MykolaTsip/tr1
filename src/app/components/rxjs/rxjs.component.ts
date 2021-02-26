import {Component, OnInit, AfterContentInit} from '@angular/core';
import {interval, from, of, Observable, observable, fromEvent, timer, range, Subject, BehaviorSubject, ReplaySubject} from 'rxjs';
import {filter, take, map, scan} from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  constructor() {
  }


  canDrink: Array<string> = []

  people = [
    {name: 'A', age: 25},
    {name: 'B', age: 17},
    {name: 'C', age: 19},
    {name: 'D', age: 12},
    {name: 'I', age: 13},
    {name: 'F', age: 24},
    {name: 'G', age: 26},
  ]


  //// без  реактивної бібліотеки
  btnI() {
    let displayNew = document.querySelector('.result')
    let i = 0;

    const interval = setInterval(() => {
      if (this.people[i]) {
        if (this.people[i].age >= 18) {
          this.canDrink.push(this.people[i].name)
        }
        displayNew.textContent = this.canDrink.join(' ')
        i++
      } else {
        clearInterval(interval)
      }
    }, 500)
  }


  //// через rxjs
  rxjsBtn() {
    let displayNew = document.querySelector('.result')

    interval(500)
      .pipe(
        take(this.people.length),
        filter(value => this.people[value].age >= 18),
        map(v => this.people[v].name),
        scan((acc, value) => acc.concat(value), [])
      )
      .subscribe(res => {

        displayNew.textContent = res.join(' ');
      })
  }

/////// міні приклади * of, from
  ngOnInit(): void {
    // const streamOf$ = of(1, 2, 'hello', 4, 50 )   //// послідовно віддає перечислені значення
    // streamOf$.subscribe(value => console.log(value))

    // const  streamFrom$ = from( [1, 3, 4, 'bye', 'hi'])  //// послідовно віддає масив
    // streamFrom$.subscribe(value => console.log(value))

  //   const streamFrom1$ = from([1, 3, 4, 'bye', 'hi', 234, 'ddd'])  /// послідовно віддає масиви (на кожній послідовності +1 значення)
  //     .pipe(
  //       scan((acc, value) => acc.concat(value), [])
  //     )
  //   streamFrom1$.subscribe(value => console.log(value))


    // Запис
    let streamObservable$ = new Observable(observable => {
      console.log('hello observe')

      observable.next('First value')

      setTimeout(() => {
      observable.next('value 200 ms')
      }, 200)


      // setTimeout(() => {
      //   observable.complete()
      // }, 300)

      setTimeout(() => {
        observable.error('its error')
      }, 400)

      setTimeout(() => {
        observable.next('value 300 ms')
      }, 500)
    })

    // користування

    // // streamObservable$.subscribe(
    // //   value => console.log(value),
    // //   error => console.log(error),
    // //   () => console.log('complete')
    // //   )
    //
    // //  OR
    // streamObservable$.subscribe({
    //   next(val) {
    //     console.log(val)
    //   },
    //   error(err) {
    //     console.log(err)
    //   },
    //   complete() {
    //     console.log('Complete')
    //   }
    // })



  // fromEvent(document.querySelector('canvas'), 'mousemove')  //////PROBLEM
  //   .pipe(
  //     map(e => ({
  //       x: e.offsetX,
  //       y: e.offsetY,
  //       ctx: e.target.getContext('2d')
  //     }))
  //   )
  //   .subscribe(position => {
  //     console.log(position)
  //     position.ctx.fillRect(position.x, position.y, 2, 3)
  //   })
  //
  //   const clear$ = fromEvent(document.getElementById('clear'), 'click')
  //
  //   clear$.subscribe(() => {
  //     const canvas = document.querySelector('canvas')
  //     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
  //   })



    //// інші приклади *interval, timer, range

  //  const sus = interval(400).subscribe(value => console.log(value))
  //
  //   setTimeout(() => {
  //     sus.unsubscribe()
  //   }, 5000)


    // timer(2500)
    //   .subscribe(value => console.log(value, a))
    //
    // const a = 'hahaha'

    // range(2, 10)
    //   .subscribe(value => console.log(value))




  }

//// * Subject
  clickSubject() {
    const streamSubject$ = new Subject()

    streamSubject$.subscribe(
      value => console.log('subject value: ', value ),
      error => console.log('err', error),
      () => console.log('Complete')
      )

    streamSubject$.next('H')
    streamSubject$.next('E')
    streamSubject$.next('LL')
    streamSubject$.complete()
    streamSubject$.error('O')
  }


  //// * BehaviorSubject
  clickBehsviorSubject() {
const streamBehaviorSubject$ = new BehaviorSubject('Sraka')

       streamBehaviorSubject$.subscribe(v => console.log(v))

    streamBehaviorSubject$.next('H')

       streamBehaviorSubject$.subscribe(v => console.log(v))
    streamBehaviorSubject$.next('LL')
  }

  /// * ReplaySubject
  clickReplaySubject() {
    const streamReplaySubject$ = new ReplaySubject(3)

    streamReplaySubject$.next('a')
    streamReplaySubject$.next('b')
    streamReplaySubject$.next('c')
    streamReplaySubject$.next('d')
    streamReplaySubject$.next('e')

    streamReplaySubject$.subscribe(v => console.log(v))
  }
}
