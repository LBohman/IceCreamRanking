import { Component, OnInit } from '@angular/core';
import { IceCreamService } from 'src/app/services/ice-cream.service';
import { IceCream } from 'src/app/models/ice-cream';

@Component({
  selector: 'app-ice-cream',
  templateUrl: './ice-cream.component.html',
  styleUrls: ['./ice-cream.component.scss'],
})
export class IceCreamComponent implements OnInit {
  icecreams: IceCream[] = [];

  constructor(private service: IceCreamService) {}

  ngOnInit(): void {
    this.icecreams = this.service.getIceCream();
    console.log(this.icecreams);
  }
}
