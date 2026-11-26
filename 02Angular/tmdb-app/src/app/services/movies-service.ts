import { HttpClient, HttpParams } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PopularMoviesResponse } from '../models/movie.interface';

@Service()
export class MoviesService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.tmdbBaseUrl;

  getPopularMovies(page = 1, language = 'es-ES'): Observable<PopularMoviesResponse> {
    const params = new HttpParams().set('page', page.toString()).set('language', language);

    return this.http.get<PopularMoviesResponse>(`${this.baseUrl}/movie/popular`, { params });
  }

  getPosterUrl(posterPath: string | null): string | null {
    return posterPath ? `${environment.tmdbImageBaseUrl}${posterPath}` : null;
  }
}
