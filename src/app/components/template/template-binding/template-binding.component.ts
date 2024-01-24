import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss',
})
export class TemplateBindingComponent {
  public name = 'Jhon Doe';
  public age = 29;

  constructor() {
    setTimeout(() => {
      this.name = 'João e Maria';
    }, 5000);
  }

  public sum(val1: number, val2: number) {
    return val1 + val2;
  }

  public isDisabled = false;

  public srcImageValue =
    'https://cdn.pixabay.com/photo/2023/06/19/05/53/temple-8073501_1280.png';

  public srcImageName = 'japanese_castle';

  public srcImageAlt = 'japanese_castle';

  public isTextDecoratino = this.age >= 29 ? 'underline' : 'none';

  public add() {
    return this.age++;
  }

  public subtract() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }
}
