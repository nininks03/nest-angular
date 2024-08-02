import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  department=[
    {
      id:1,
      Title: "Areospace & Defence",
      Image: "../../../assets/areospace.jpg",
    },
    {
      id:2,
      Title: "Banking & Financial Service",
      Image: "../../../assets/banking.jpg",
    },
    {
      id:3,
      Title: "Healthcare",
      Image: "../../../assets/healthcare.jpg",
    },
    {
      id:4,
      Title: "Locomotive",
      Image: "../../../assets/locomotive.jpg",
    },
    {
      id:5,
      Title: "Mobility",
      Image: "../../../assets/mobility.jpg",
    },
    {
      id:6,
      Title: "Industrial",
      Image: "../../../assets/industrial.png",
    },
    {
      id:7,
      Title: "Insurance",
      Image: "../../../assets/insurance.jpg",
    },
    {
      id:8,
      Title: "GIS",
      Image: "../../../assets/gis.jpg",
    },
  ]

}
