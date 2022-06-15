import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent{

  constructor(private placesService: PlacesService, private mapService: MapService) { }

  goToMyLocation(){
    console.log("go to my location");

    if(!this.placesService.isUserLocationReady) throw Error("There is no user location.");
    if(!this.mapService.isMapReady) throw Error("No Map is available");
    

    this.mapService.flyTo(this.placesService.userLocation!);
  }
  

}
