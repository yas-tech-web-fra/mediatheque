import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Film from 'src/app/models/Film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  //donne le chemin de api
  private apiUrl = 'http://localhost:3000';
  //injection dans le constructeur du service
  constructor(private httpClient: HttpClient) {}

  //l observable permet de regarder si quelque chose s'est passe un changement?
  getFilms(): Observable<Film[]> {
    //tu recupere la variable httpClient et tu va recuperer un tableau de films
    // adresse API qu'on lui passe en paramètre)
    return this.httpClient.get<Film[]>(`$ {this.apiUrl}/films`);
  }

  //la meme méthode mais cette fois on lui passe l'ID du Film qu'on souhaite récupérer
  getFilm(id: number): Observable<Film> {
    return this.httpClient.get<Film>(`$ {this.apiUrl}/films/${id}`);
  }
  //create 1objet de type Film
  createFilm(film: Film): Observable<Film> {
    return this.httpClient.post<Film>(`$ {this.apiUrl}/films`, film);
  }

  updateFilm(film: Film): Observable<Film> {
    return this.httpClient.put<Film>(`$ {this.apiUrl}/films/${film.id}`, film);
  }

  deleteFilm(id: number): Observable<Film> {
    return this.httpClient.delete<Film>(`$ {this.apiUrrl}/films/${id}`);
  }
}
