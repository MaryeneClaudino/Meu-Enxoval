import { Component, OnInit } from '@angular/core';
import {Map,tileLayer,marker,icon} from 'leaflet';


@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.page.html',
  styleUrls: ['./lojas.page.scss'],
})
export class LojasPage implements OnInit {
  public map: Map | undefined;

  public listaLojas = [
    {name: 'Baby & Cia', address: 'Av. Presidente Vargas, 607', lat: -32.0496677, lng: -52.1152416},
    {name: 'Ateliê do Bebê e Bazar', address: 'R. Dom Bosco, 748', lat: -32.0455124, lng: -52.1234722},
    {name: 'Li Kids Modas', address: 'R. Minas Gerais, 423', lat: -32.0435033, lng: -52.1221537},
  ];

  constructor() { 
  }

  ngOnInit() {
  }
  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    //RIO GRANDE
    //-32.0446699,-52.1087768,13.54z 
    this.map = new Map("mapId").setView([-32.0446699,-52.1087768], 13);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Mary - openstreetmap.org',
    }).addTo(this.map);

    var myIcon = icon({
    iconUrl: 'assets/local.png',
    iconSize: [28, 28],
    iconAnchor: [14, 25],
    popupAnchor: [0, -22],
    shadowUrl: 'assets/local-shadow.png',
    shadowSize: [28, 28],
    shadowAnchor: [14, 25]
    });

    for(let loja of this.listaLojas){
     marker([loja.lat, loja.lng], {icon:myIcon}).addTo(this.map).bindPopup("<center>"+loja.name+"</center>"+loja.address);
    }
  }

  ngOnDestroy() {
    if(this.map != undefined && this.map != null){
    this.map.remove();
    }
  }
}