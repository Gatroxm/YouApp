import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-you',
  templateUrl: './button-you.component.html',
  styleUrls: ['./button-you.component.scss']
})
export class ButtonYouComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() clase: string = 'you-btn-primary-xl';
  @Input() link: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
