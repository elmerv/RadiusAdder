import { Component } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';

// make sure google is undefined error isnt there
declare var google: any;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  map:any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  constructor() {}

  // ionic lifestyle method each time page opens the code will run and create a new map
  ionViewDidEnter(){
    this.ShowMap();
  }

  ShowMap() {
    const location = new google.maps.LatLng(33.946530576355585, -118.30882977911254)
    const options = {
      center:location,
      zoom:15,
      disableDefaultUI:true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

}
