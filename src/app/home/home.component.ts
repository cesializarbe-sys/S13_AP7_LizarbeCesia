import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  eqBars = [35, 70, 100, 55, 85, 40, 90, 60, 75, 30, 65, 88, 45];

  stats = [
    { value: '120M+', label: 'Canciones', icon: '🎵' },
    { value: '4.5M+', label: 'Artistas', icon: '🎤' },
    { value: '200M+', label: 'Usuarios', icon: '🌍' },
  ];

  featuredArtists = [
    { name: 'Luna Oscura', genre: 'Pop',  followers: '12.4M', badge: 'badge-pop',  img: 'https://picsum.photos/seed/artluna/300/300',  gradA: '#7c3aed', gradB: '#f472b6' },
    { name: 'Bad Rhythm',  genre: 'Trap', followers: '9.8M',  badge: 'badge-trap', img: 'https://picsum.photos/seed/artbad/300/300',   gradA: '#06b6d4', gradB: '#7c3aed' },
    { name: 'Marco Steel', genre: 'Rock', followers: '7.2M',  badge: 'badge-rock', img: 'https://picsum.photos/seed/artmarco/300/300', gradA: '#ef4444', gradB: '#f97316' },
  ];

  latestAlbums = [
    { title: 'Neon Nights',     artist: 'Luna Oscura', year: 2024, genre: 'Pop',  badge: 'badge-pop',  img: 'https://picsum.photos/seed/albneon/300/300', gradA: '#7c3aed', gradB: '#f472b6' },
    { title: 'Sin Fronteras',   artist: 'Bad Rhythm',  year: 2024, genre: 'Trap', badge: 'badge-trap', img: 'https://picsum.photos/seed/albsin/300/300',  gradA: '#22d3ee', gradB: '#6366f1' },
    { title: 'Distorsión Vol2', artist: 'Marco Steel', year: 2023, genre: 'Rock', badge: 'badge-rock', img: 'https://picsum.photos/seed/albdis/300/300',  gradA: '#ef4444', gradB: '#f97316' },
  ];

  vinylRings = [60, 75, 90, 105, 115, 125, 133, 140];
}
