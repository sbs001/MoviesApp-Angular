import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster',
})
export class PosterPipe implements PipeTransform {
  transform(poster: string | null): string {
    return poster != null
      ? 'https://image.tmdb.org/t/p/w500' + poster
      : './assets/no-image.jpg';
  }
}
