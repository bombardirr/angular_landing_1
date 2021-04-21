import { Component, OnInit } from '@angular/core';
import {trigger, state, animate, style, transition, query, stagger} from '@angular/animations'
@Component({
  selector: 'app-header',
  animations: [
    trigger('flyIn', [
      transition('* => *', [
        query(':leave', [
          stagger(300, [
            animate('.5s', style({
              transform: 'translateY(-100%)'
            }))
          ])
        ]),
        query(':enter', [
          style({
            transform: 'translateY(-100%)'
          }),
          stagger(300, [
            animate('.5s', style({
              transform: 'translateY(0)'
            }))
          ])
        ])
      ])
    ])
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  headerMenu: string[] = ['Home', 'Galery', 'About']

  constructor() { }

  ngOnInit(): void {
  }

}
