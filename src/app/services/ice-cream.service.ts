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
    this.icecreams.push(


      new IceCream('88', 'assets/glassbilder/88.png', 'En klassiker som håller än!')
      );
    this.icecreams.push(
      new IceCream('Ben And Jerrys', 'assets/glassbilder/chocolate-fudge-brownie.png', 'Sött möter sött i denna kavalkad som är Ben and Jerrys Cookie Dough. Lite söt för min smak men perfekt vid intensivt sockersug.')

    );
    this.icecreams.push(
      new IceCream('Calippo', 'assets/glassbilder/calippoCola.jpg', 'Cola är ju en av mina favoritsmaker så denna hamnar högt på listan! Lite omständig med sin pop-up förpackning men colasmaken överväger krånglet.')
    );
    this.icecreams.push(
      new IceCream('Cornetto', 'assets/glassbilder/cornetto.jpg', 'Försöker att vara en mjukglass bland isglassarna men lyckas inte riktigt. Vill man ha en mjukglass så får man köpa en mjukglass, Cornetto kan man vara utan!')
    );
    this.icecreams.push(
      new IceCream('Magnum', 'assets/glassbilder/magnum.jpg', 'Magnum. En tidigare mastodont bland glassarna har med tiden krymt och borde numera byta namn till Medium om man ska se till storleken men smaken är den samma. Vanlij och mörk choklad, en tidlös kombo.')
    );
    this.icecreams.push(
      new IceCream('Magnum Mandel', 'assets/glassbilder/magnumMandelPaket.jpg', 'Trots den lite motsägelsefulla titlen Magnum Mini, så är dessa perfekta som efterrätt en vardagskväll när man vill unna sig något sådär mitt i veckan. Inget radikalt smakmässigt men återigen vanlig och choklad och den här gången lite mandel med som pricken över i:et.')
    );
    this.icecreams.push(
      new IceCream('Piggelin', 'assets/glassbilder/piggelin.jpg', 'En nostalgisk klassiker som vi inte verkar kunna bli av med. Jag har aldirg varit så värst förstjust i Piggelin men om den en dag försvinner skulle det uppstå ett tomrum i både frysbox och själ.')
    );
    this.icecreams.push(
      new IceCream('Sandwich', 'assets/glassbilder/sandwich.png', 'Sandwich är god och i och med sin form lätt att äta. Återigen den tidlösa combon med vanilj och choklad. Kanske lite tråkig i längden men trygg i sin beständighet.')
    );
    this.icecreams.push(
      new IceCream('TipTop', 'assets/glassbilder/tiptop.jpg', 'När den kom var det en utmanare till Daim-struten men enligt mig hade den aldrig haft en chans gentemot Daim. Dessutom blir rispuffarna mer sega än krispiga och det är väl inte tanken, eller?')
    );
    this.icecreams.push(
      new IceCream('Twister', 'assets/glassbilder/twister.jpg', 'Twister är inte så dum men kan inte säga att det är något jag brukar sukta efter i första taget. En helt ok glass men inget speciellt.')
    );

    return this.icecreams;
  }
}
