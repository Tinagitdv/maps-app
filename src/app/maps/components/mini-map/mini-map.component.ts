import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'maps-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {

  @Input() lngLat?: [number, number];

  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap || !this.divMap.nativeElement) throw "Map div not found";
    if (!this.lngLat) throw "LngLat can't be null";

    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 15,
      interactive: false,
    });

    const marker = new Marker({
      color: '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16)),
    })
      .setLngLat(this.lngLat)
      .addTo(map);
  }
}
