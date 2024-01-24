import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  template: `
    <!-- <router-outlet></router-outlet> -->
    <h1>Curso de Angular</h1>
    <!-- FORMA ANTIGA <app-new-component> </app-new-component> -->
    <app-new-component />
  `,
})
export class AppComponent {}
