import { Injectable } from '@angular/core';
import { IceCream } from '../models/ice-cream';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IceCreamService {
  private icecreams: IceCream[] = [];

  constructor() {}
  getIceCream() {
    this.icecreams.push(new IceCream('88', 'assets/glassbilder/88.png'));
    this.icecreams.push(
      new IceCream('Ben And Jerrys', 'assets/glassbilder/benAndJerrys.jpg')
    );
    this.icecreams.push(
      new IceCream('Calippo', 'assets/glassbilder/calippoCola.jpg')
    );
    this.icecreams.push(
      new IceCream('Cornetto', 'assets/glassbilder/cornetto.jpg')
    );
    this.icecreams.push(
      new IceCream('Magnum', 'assets/glassbilder/magnum.jpg')
    );
    this.icecreams.push(
      new IceCream('Magnum Mandel', 'assets/glassbilder/magnumMandelPaket.jpg')
    );
    this.icecreams.push(
      new IceCream('Piggelin', 'assets/glassbilder/piggelin.jpg')
    );
    this.icecreams.push(
      new IceCream('Sandwich', 'assets/glassbilder/sandwich.png')
    );
    this.icecreams.push(
      new IceCream('TipTop', 'assets/glassbilder/tiptop.jpg')
    );
    this.icecreams.push(
      new IceCream('Twister', 'assets/glassbilder/twister.jpg')
    );

    return this.icecreams;
  }
}
