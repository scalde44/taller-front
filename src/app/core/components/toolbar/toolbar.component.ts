import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public companies: MenuItem[] = [
    { url: '/home', nombre: 'Home' },
    { url: '/mantenimiento', nombre: 'Mantenimiento' }

  ];
  constructor() { }

  ngOnInit() {
  }

}
