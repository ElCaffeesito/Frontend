import { Component } from '@angular/core';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(private router: Router) {
    console.log('Router: ', router)
  }

  goHome() {
    this.router.navigateByUrl('/')
  }

}
