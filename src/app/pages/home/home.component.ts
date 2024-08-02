import { Component } from '@angular/core';
import { CarouselComponent } from '../../unit/carousel/carousel.component';
import { AccordionComponent } from '../../unit/accordion/accordion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,AccordionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
