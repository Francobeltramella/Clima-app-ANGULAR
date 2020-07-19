import { Component } from '@angular/core';
import { GeolocationService } from './service/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'Clima APP';

  constructor( public  geolocationService : GeolocationService){}

  ngOnInit(){
    this.geolocationService.requestGeolocation();
  }
}
