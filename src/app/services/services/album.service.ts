import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Album from 'src/app/models/Album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
 //donne le chemin de api
 private apiUrl = 'http://localhost:3000';
 //injection dans le constructeur du service
 constructor(private httpClient: HttpClient) {}

 //l observable permet de regarder si quelque chose s'est passe un changement?
 getAlbums(): Observable<Album[]> {
   //tu recupere la variable httpClient et tu va recuperer un tableau de films
   // adresse API qu'on lui passe en paramètre)
   return this.httpClient.get<Album[]>(`$ {this.apiUrl}/albums`);
 }

 //la meme méthode mais cette fois on lui passe l'ID du Film qu'on souhaite récupérer
 getAlbum(id: number): Observable<Album> {
   return this.httpClient.get<Album>(`$ {this.apiUrl}/albums/${id}`);
 }
 //create 1objet de type Film
 createAlbum(album: Album): Observable<Album> {
   return this.httpClient.post<Album>(`$ {this.apiUrl}/albums`, album);
 }

 updateAlbum(album: Album): Observable<Album> {
   return this.httpClient.put<Album>(`$ {this.apiUrl}/albums/${album.id}`, album);
 }

 deleteAlbum(id: number): Observable<Album> {
   return this.httpClient.delete<Album>(`$ {this.apiUrl}/albums/${id}`);
 }

}
