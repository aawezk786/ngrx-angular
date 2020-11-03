import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Output() reload = new EventEmitter();

  @Input() errorTitle;
  constructor() { }

  ngOnInit(): void {
  }

}
