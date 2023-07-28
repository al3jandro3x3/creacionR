import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  dia: number = new Date().getDate();
  mes: number = new Date().getMonth();
  anio: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
