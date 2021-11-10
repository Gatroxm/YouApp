import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.scss']
})
export class TextoComponent implements OnInit {

  @Input() texto: string='';
  @Input() clase: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
