import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey: string = 'fb4b364d4422884cdbd5d864fb8cafa0';
  searchMoviesUrl: string = 'https://api.themoviedb.org/3/search/movie';
  latestMoviesUrl: string = 'https://api.themoviedb.org/3/movie/latest';
  popularMoviesUrl: string = 'https://api.themoviedb.org/3/movie/popular';
  popularPeopleUrl: string = 'https://api.themoviedb.org/3/person/popular';
  movieGenreUrl: string = 'https://api.themoviedb.org/3/genre/movie/list';
  nowPlayingMoviesUrl: string =
    'https://api.themoviedb.org/3/movie/now_playing';

  watchlist: any[] = [];

  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: string): any {
    return this.http.get(this.searchMoviesUrl, {
      params: {
        api_key: this.apiKey,
        query: searchTerm,
      },
    });
  }

  getPopularMovies(): any {
    return this.http.get(this.popularMoviesUrl, {
      params: {
        api_key: this.apiKey,
      },
    });
  }

  getNowPlayingMovies(): any {
    return this.http.get(this.nowPlayingMoviesUrl, {
      params: {
        api_key: this.apiKey,
      },
    });
  }

  getPopularPeople(): any {
    return this.http.get(this.popularPeopleUrl, {
      params: {
        api_key: this.apiKey,
      },
    });
  }

  getDescription = (): any => {
    console.log('description should pop up here');
    return this.http.get(this.searchMoviesUrl, {
      params: {
        api_key: this.apiKey,
      },
    });
  };

  addMovieToWatchlist(movie: any): void {
    this.watchlist.push(movie);
  }

  retrieveWatchList(): any[] {
    return this.watchlist;
  }

  checkWatchlist(movie: any): boolean {
    return this.watchlist.includes(movie);
  }
}
