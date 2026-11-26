import { DatePipe, DecimalPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapse, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from '../../models/movie.interface';
import { MoviesService } from '../../services/movies-service';

@Component({
  imports: [DatePipe, DecimalPipe, RouterLink, RouterLinkActive, NgbCollapse, NgbPagination],
  selector: 'app-popular-movies-page',
  styleUrl: './popular-movies-page.css',
  templateUrl: './popular-movies-page.html',
})
export class PopularMoviesPage implements OnInit {
  private readonly moviesService = inject(MoviesService);

  protected readonly movies = signal<Movie[]>([]);
  protected readonly loading = signal<boolean>(false);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly currentPage = signal<number>(1);
  protected readonly totalResults = signal<number>(0);
  protected readonly searchQuery = signal<string>('');
  protected readonly isNavbarCollapsed = signal<boolean>(true);

  protected readonly filteredMovies = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) {
      return this.movies();
    }
    return this.movies().filter(
      (movie) =>
        movie.title.toLowerCase().includes(query) ||
        movie.original_title.toLowerCase().includes(query) ||
        movie.overview.toLowerCase().includes(query),
    );
  });

  // TMDB API allows requesting up to page 500 (20 results per page = 10,000 items max)
  protected readonly paginationCollectionSize = computed(() =>
    Math.min(this.totalResults(), 10000),
  );

  ngOnInit(): void {
    this.loadPopularMovies(1);
  }

  protected loadPopularMovies(page: number): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.currentPage.set(page);

    this.moviesService.getPopularMovies(page).subscribe({
      next: (response) => {
        this.movies.set(response.results);
        this.totalResults.set(response.total_results);
        this.loading.set(false);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.errorMessage.set(
            'API key inválida o no configurada. Añade tu clave de TMDB en src/environments/environment.ts.',
          );
        } else {
          this.errorMessage.set(
            'No se pudieron cargar las películas populares. Inténtalo de nuevo más tarde.',
          );
        }
        this.loading.set(false);
      },
    });
  }

  protected onPageChange(page: number): void {
    this.loadPopularMovies(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  protected onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  protected toggleNavbar(): void {
    this.isNavbarCollapsed.update((collapsed) => !collapsed);
  }

  protected getPosterUrl(posterPath: string | null): string | null {
    return this.moviesService.getPosterUrl(posterPath);
  }

  protected getRatingBadgeClass(voteAverage: number): string {
    if (voteAverage >= 7) {
      return 'text-bg-success';
    }
    if (voteAverage >= 5) {
      return 'text-bg-warning';
    }
    return 'text-bg-danger';
  }
}
