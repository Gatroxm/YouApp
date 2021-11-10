import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {

  @Input() texto: string = '';
  @Input() clase: string = 'h1';

  constructor() { }

  ngOnInit(): void {
  }

}
