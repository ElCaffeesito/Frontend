import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nombre = 'Coffee';
  peliculas: string[] = [
    'Shrek 1',
    'Shrek 2',
    'Shrek 3',
    'Shrek 4',
    'Shrek 5',
    'Toy Story 1',
    'Toy Story 2',
    'Toy Story 3',
  ]

  constructor() {
    setTimeout(() => {
      this.nombre = 'Pablo';
    },3000);
  }

  doOnClick(e: Event) {
    this.nombre = 'panchooooo';
    console.log('Hicisiste click en el boton!', e);
  }
}
