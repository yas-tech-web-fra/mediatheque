import { Component, OnInit } from '@angular/core';
import Album from '../../models/Album.model';
import Film from '../../models/Film.model';
import { AlbumService } from '../../services/services/album.service';
import { FilmService } from '../../services/services/film.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  films: Film[] = [];
  albums: Album[] = [];
  constructor(
    private filmService: FilmService,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((films) => {
      this.films = films;
    });
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
}
