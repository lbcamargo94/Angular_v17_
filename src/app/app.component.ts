import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindingComponent],
  template: `
    <!-- <router-outlet></router-outlet> -->
    <h1>Versão 17 Angular</h1>
    <!-- FORMA ANTIGA <app-new-component> </app-new-component> -->
    <app-new-component />
    <app-template-binding />
  `,
})
export class AppComponent {}
