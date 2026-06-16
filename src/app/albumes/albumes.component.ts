import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';

interface Album {
  title: string;
  artist: string;
  year: number;
  genre: string;
  badge: string;
  tracks: number;
  duration: string;
  img: string;
  gradA: string;
  gradB: string;
  rating: number;
  trending: boolean;
}

@Component({
  selector: 'app-albumes',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './albumes.component.html',
  styleUrl: './albumes.component.css'
})
export class AlbumesComponent {
  filters = ['Todos', 'Pop', 'Rock', 'R&B', 'Trap', 'Indie', 'Hip-Hop'];
  activeFilter = 'Todos';

  allAlbums: Album[] = [
    { title: 'Neon Nights',        artist: 'Luna Oscura',  year: 2024, genre: 'Pop',    badge: 'badge-pop',    tracks: 12, duration: '45 min', img: 'https://picsum.photos/seed/albneon/400/400',    gradA: '#7c3aed', gradB: '#f472b6', rating: 4.8, trending: true  },
    { title: 'Sin Fronteras',      artist: 'Bad Rhythm',   year: 2024, genre: 'Trap',   badge: 'badge-trap',   tracks: 16, duration: '58 min', img: 'https://picsum.photos/seed/albsin/400/400',     gradA: '#06b6d4', gradB: '#6366f1', rating: 4.6, trending: true  },
    { title: 'Distorsión Vol. II', artist: 'Marco Steel',  year: 2023, genre: 'Rock',   badge: 'badge-rock',   tracks: 11, duration: '52 min', img: 'https://picsum.photos/seed/albdist/400/400',    gradA: '#ef4444', gradB: '#f97316', rating: 4.5, trending: false },
    { title: 'Velvet Soul',        artist: 'Sofia Ríos',   year: 2023, genre: 'R&B',    badge: 'badge-rb',     tracks: 10, duration: '41 min', img: 'https://picsum.photos/seed/albvelvet/400/400',  gradA: '#a855f7', gradB: '#ec4899', rating: 4.7, trending: false },
    { title: 'Cosmos & Café',      artist: 'The Parallax', year: 2022, genre: 'Indie',  badge: 'badge-indie',  tracks: 9,  duration: '38 min', img: 'https://picsum.photos/seed/albcosmos/400/400',  gradA: '#f59e0b', gradB: '#10b981', rating: 4.3, trending: false },
    { title: 'Crown Season',       artist: 'K-Flow Dios',  year: 2024, genre: 'Hip-Hop',badge: 'badge-hiphop', tracks: 18, duration: '63 min', img: 'https://picsum.photos/seed/albcrown/400/400',   gradA: '#fbbf24', gradB: '#f97316', rating: 4.9, trending: true  },
  ];

  get albums(): Album[] {
    if (this.activeFilter === 'Todos') return this.allAlbums;
    return this.allAlbums.filter(a => a.genre === this.activeFilter);
  }

  setFilter(f: string) { this.activeFilter = f; }

  getStars(rating: number): string[] {
    return Array(5).fill('').map((_, i) => i < Math.floor(rating) ? 'full' : (i === Math.floor(rating) && rating % 1 >= 0.5 ? 'half' : 'empty'));
  }
}
