import { Component } from '@angular/core';
import {
  AsyncPipe,
  CommonModule,
  NgFor,
  NgIf,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    NgFor,
    AsyncPipe,
    NgSwitchCase,
    NgSwitchDefault,
  ],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss',
})
export class TemplateControlFlowComponent {
  public isTrue = true;

  public itens = [{ name: 'Luiz Swagger' }];

  public switchCondition = 'A';

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
    'item 4',
  ]).pipe(delay(3000));

  public handleView() {
    this.isTrue = !this.isTrue;
  }

  public trackByFn(index: number) {
    return index;
  }

  public addNewName(value: string) {
    return this.itens.push({ name: value });
  }
}
