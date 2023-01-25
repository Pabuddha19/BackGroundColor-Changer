import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  constructor() {}
  color?: string;

  highlightColor(color: string) {
    this.color = color;
  }

  ngOnInit(): void {}
}
