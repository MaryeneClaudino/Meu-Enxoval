import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enxoval',
  templateUrl: './enxoval.page.html',
  styleUrls: ['./enxoval.page.scss'],
})
export class EnxovalPage implements OnInit {

public listas = [
  {
    name:"Acessórios", 
    items:[ 
      {text: "Mamadeira"},
      {text: "Chupeta"},
      {text: "Andador"},
  ]
},

  {
    name:"Roupas", 
    items:[ 
      {text: "Mijaozinho"},
      {text: "Macacao"},
      {text: "Conjunto Pagão"},
  ]
},

  {
    name:"Higiene Pessoal", 
    items:[ 
      {text: "Toalha de Banho"},
      {text: "Fraldas"},
      {text: "Paninho de Boca"},
  ]
},
];

  constructor() { }

  ngOnInit() {
  }

}
