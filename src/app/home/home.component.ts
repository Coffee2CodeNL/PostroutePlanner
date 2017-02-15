import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private lat: number = 51.678418;
  private lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((postition) => {
        this.lat = postition.coords.latitude;
        this.lng = postition.coords.longitude;
      });
    }
  }
}
