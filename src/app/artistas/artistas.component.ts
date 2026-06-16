import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';

interface Artist {
  name: string;
  genre: string;
  badge: string;
  followers: string;
  songs: number;
  albums: number;
  img: string;
  gradA: string;
  gradB: string;
  country: string;
  verified: boolean;
}

@Component({
  selector: 'app-artistas',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.css'
})
export class ArtistasComponent {
  filters = ['Todos', 'Pop', 'Rock', 'R&B', 'Trap', 'Indie', 'Hip-Hop'];
  activeFilter = 'Todos';

  allArtists: Artist[] = [
    { name: 'Luna Oscura',    genre: 'Pop',    badge: 'badge-pop',    followers: '12.4M', songs: 86,  albums: 5,  img: 'https://picsum.photos/seed/artluna/400/400',    gradA: '#7c3aed', gradB: '#f472b6', country: '🇲🇽', verified: true  },
    { name: 'Bad Rhythm',     genre: 'Trap',   badge: 'badge-trap',   followers: '9.8M',  songs: 142, albums: 3,  img: 'https://picsum.photos/seed/artbad/400/400',     gradA: '#06b6d4', gradB: '#7c3aed', country: '🇵🇷', verified: true  },
    { name: 'Marco Steel',    genre: 'Rock',   badge: 'badge-rock',   followers: '7.2M',  songs: 210, albums: 8,  img: 'https://picsum.photos/seed/artmarco/400/400',   gradA: '#ef4444', gradB: '#f97316', country: '🇬🇧', verified: true  },
    { name: 'Sofia Ríos',     genre: 'R&B',    badge: 'badge-rb',     followers: '5.6M',  songs: 64,  albums: 4,  img: 'https://picsum.photos/seed/artsofia/400/400',   gradA: '#a855f7', gradB: '#ec4899', country: '🇨🇴', verified: false },
    { name: 'The Parallax',   genre: 'Indie',  badge: 'badge-indie',  followers: '4.1M',  songs: 78,  albums: 6,  img: 'https://picsum.photos/seed/artpara/400/400',    gradA: '#f59e0b', gradB: '#ef4444', country: '🇦🇺', verified: true  },
    { name: 'K-Flow Dios',    genre: 'Hip-Hop',badge: 'badge-hiphop', followers: '3.7M',  songs: 195, albums: 7,  img: 'https://picsum.photos/seed/artkflow/400/400',   gradA: '#fbbf24', gradB: '#f97316', country: '🇺🇸', verified: false },
  ];

  get artists(): Artist[] {
    if (this.activeFilter === 'Todos') return this.allArtists;
    return this.allArtists.filter(a => a.genre === this.activeFilter);
  }

  setFilter(f: string) { this.activeFilter = f; }
}
