import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private dark = false;

  toggleTheme() {
    this.dark = !this.dark;
    document.documentElement.classList.toggle('dark-theme', this.dark);
  }
}
