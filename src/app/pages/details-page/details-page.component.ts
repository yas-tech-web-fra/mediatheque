import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import des services
import { AlbumService } from '../../services/services/album.service';
import { FilmService } from '../../services/services/film.service';
//import des services
import Album from '../../models/Album.model';
import Film from '../../models/Film.model';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {


  article!: Film | Album;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private filmService: FilmService
  ) {}

  // les choses sont executees avant que ma vue ne soit generee
  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');
    this.setSuscribe(type, id);
  }

  private suscribeAlbum(id: number):void{
    this .albumService.getAlbum(id).subscribe((album:Album) =>{this.article= album})
  }

  private suscribeFilm(id: number):void{
    this .filmService.getFilm(id).subscribe((film:Film) =>{this.article= film})
  }

  private setSuscribe(type:string | null, id: string|null){
    if(id && type === 'albums'){
      this.suscribeAlbum(+id);
    }else if(id && type === 'films'){
      this.suscribeFilm(+id);
    }else if (!id || !type) {
      this.router.navigate(['/not-found']);
    }
  }

}
