import { Component } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx'
// make sure google is undefined error isnt there
declare let google: any;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  map: any;
  myLatLng = { lat: 34.074890, lng: -118.308205 };
  currentPosition;
  constructor() {}
  @ViewChild('map', {read: ElementRef, static: false})
  mapRef: ElementRef;

  // ionic lifestyle method each time page opens the code will run and create a new map
  ionViewDidEnter(){
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(33.946530576355585, -118.30882977911254);
    const options = {
      center:location,
      zoom:15,
      disableDefaultUI:false
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    const marker = new google.maps.Marker({
      position: this.myLatLng,
      title: 'Sup Chupapi'
    });
    marker.setMap(this.map);
    this.map.addListener('click', (mapsMouseEvent) => {
      this.currentPosition = mapsMouseEvent.latLng.toJSON();
      this.addCursor({lat: this.currentPosition.lat,lng: this.currentPosition.lng});
    });
  }
  addCursor(cursorObj: any){
    const marker = new google.maps.Marker({
      position: cursorObj
    });
    marker.setMap(this.map);
    const circle = new google.maps.Circle({
      map: this.map,
      radius: 1600,
      fillColor: '#0095FF'
    });
    circle.bindTo('center',marker, 'position');
  }


}



// popover test
