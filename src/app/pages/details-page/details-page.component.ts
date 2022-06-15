import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  // a ne pas faire mais peut depanner! pas en prod!!

films = new ProductPageComponent().films;
albums = new ProductPageComponent().albums;
articles= this.films.concat(this.albums);
article! : any;
  constructor(private router: Router, private route: ActivatedRoute) { }
// les choses sont executees avant que ma vue ne soit generee
  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    if (id){
      this.article = this.articles.find((article)=> this.article.id == id);
    }
  }

}
