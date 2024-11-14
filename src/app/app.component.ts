import { Component } from '@angular/core';
import { NewCompComponent } from './new-comp/new-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NewCompComponent],
  template: `
    <h1>Marvellous Infosystems</h1>
    <textarea placeholder="Enter your feedback here"></textarea>
    <app-new-comp></app-new-comp>
  `,
  styles: ['h1 {color:blue;}']
})
export class AppComponent {
  title = 'AngularAssignment6';
}
