import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sekcja',
  templateUrl: './sekcja.component.html',
  styleUrls: ['./sekcja.component.css']
})
export class SekcjaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  nazwy:string [] = 
  ['O nas','Karnet dopasowany do Ciebie','Dostęp 24/7','Zajęcia fitness','Dużo dobrego sprzętu']
  birthday = new Date(2016, 10, 15);
}
