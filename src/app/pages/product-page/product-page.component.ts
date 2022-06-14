import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
films: any[]= [];

albums: any[]= [
  {
    id: 0,
    nom: "The dark side of the moon",
    artiste:"Pink Floyd",
    annee: 1973,
    img: "",
    details:""
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
