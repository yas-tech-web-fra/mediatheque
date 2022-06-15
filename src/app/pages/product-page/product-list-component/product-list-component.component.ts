import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss'],
})
export class ProductListComponentComponent implements OnInit {

  @Input()
  articles: any[] = [];
  
  constructor() {}

  ngOnInit(): void {}
}
