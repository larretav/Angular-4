import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropertybinding',
  templateUrl: './ejpropertybinding.component.html',
  styleUrls: ['./ejpropertybinding.component.css']
})
export class EjpropertybindingComponent implements OnInit {
  texto = "Escribe algo prro...";

  constructor() {
    setTimeout(() => {
      this.texto = 'por favor';
    }, 300);
   }

  ngOnInit() {
  }

}
