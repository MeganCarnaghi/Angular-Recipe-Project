import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey: string = 'fb4b364d4422884cdbd5d864fb8cafa0';
  searchMoviesUrl: string = 'https://api.themoviedb.org/3/search/movie';
  latestMoviesUrl: string = 'https://api.themoviedb.org/3/search/movie/latest';
  popularMoviesUrl: string =
    'https://api.themoviedb.org/3/movie/popular';
  upcomingMoviesUrl: string =
    'https://api.themoviedb.org/3/movie/upcoming';

  constructor(private http: HttpClient) {}

  getPopularMovies = (): any => {
    console.log('I heard this');
    return this.http.get(this.popularMoviesUrl, {
      params: {
        api_key: this.apiKey
      }
    })
  }

  

}
