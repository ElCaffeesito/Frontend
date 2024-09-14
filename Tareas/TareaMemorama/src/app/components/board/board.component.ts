import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  selectedCards: any[] = [];
  canClick: boolean = true;
  gameCompleted: boolean = false;
  private url: string = 'https://raw.githubusercontent.com/ElCaffeesito/PokemonSprites/refs/heads/main/Pokemon/'
  private cover: string[] = ['493', '493-bug', '493-dark', '493-dragon', '493-electric', '493-fightig', '493-fire', 
                             '493-flying', '493-ghost', '493-grass', '493-ground', '493-ice', '493-normal', '493-poison',
                             '493-psychic', '493-rock', '493-steel', '493-water', '493']
  private randomCover: number =  Math.floor(Math.random() * 17)

  imagenes = [
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}444.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}323.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}543.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}643.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}562.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}412.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}531.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}342.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}212.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}232.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}111.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}333.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}444.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}323.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}543.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}643.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}562.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}412.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}531.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}342.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}212.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}232.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}111.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
    { inicial: `${this.url}${this.cover[this.randomCover]}.png`, alternativa: `${this.url}333.png`, actual: `${this.url}${this.cover[this.randomCover]}.png`, matched: false },
  ];

  cambiarImagen(imagen: any): void {
    if (this.canClick && !imagen.matched && this.selectedCards.length < 2) {
      imagen.actual = imagen.alternativa;
      this.selectedCards.push(imagen);

      if (this.selectedCards.length === 2) {
        this.compareCards();
      }
    }
  }

  compareCards(): void {
    const [firstCard, secondCard] = this.selectedCards;

    this.canClick = false;

    if (firstCard.alternativa === secondCard.alternativa) {
      // Por si las tarjetas coinciden
      firstCard.matched = true;
      secondCard.matched = true;
    } else {

      // Por si las tarjetas no coinciden
      setTimeout(() => {
        firstCard.actual = firstCard.inicial;
        secondCard.actual = secondCard.inicial;
      }, 1000);
    }

    // Limpia el array de imagenes y deja dar click otra vez
    setTimeout(() => {
      this.selectedCards = [];
      this.canClick = true;
      this.checkGameCompletion();
    }, 1000);
  }

  checkGameCompletion(): void {
    const allMatched = this.imagenes.every(card => card.matched);

    if (allMatched && !this.gameCompleted) {
      this.gameCompleted = true;
      setTimeout(() => {
        if (confirm('¡Felicidades! Has completado el juego. ¿Quieres jugar nuevamente?')) {
          this.resetGame();
        }
      }, 500);
    }
  }

  resetGame(): void {
    this.selectedCards = [];
    this.canClick = true;
    this.gameCompleted = false;
  }
}
