import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hanging-man',
  templateUrl: './hanging-man.component.html',
  styleUrls: ['./hanging-man.component.scss']
})
export class HangingManComponent implements OnInit {


  @Input() faults: number;
  @Input() gameFinished: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
