import { Component, OnInit, Injectable } from '@angular/core';
import { HashLocationStrategy } from '@angular/common';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit { 
  constructor() { 
    localStorage.clear();
  }

  ngOnInit(): void {  
  }
dodaj(email:string,haslo:string){
  localStorage.setItem(email,haslo);
  console.log(localStorage);
  return false;
}

wypisz(){
  console.log(localStorage.getItem('ksiedlarski@gmail.com'));
  return false;
}
usun(nazwa:string){
localStorage.removeItem(nazwa);
console.log(localStorage);
return false;
}
}
