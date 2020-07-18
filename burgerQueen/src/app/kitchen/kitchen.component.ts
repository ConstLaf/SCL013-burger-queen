import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../services/summary.service';
import { ConectionService, ClientOrder } from '../services/conection.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  clientInfo: any;
  ordersObserverData: ClientOrder[];
  selectedOrdersArray = [];
  product: any;
  quantity: any;

  constructor(private conection: ConectionService, public summaryConection: SummaryService ) {
    this.conection.waiterOrder().subscribe(
      orders => {
        this.ordersObserverData = orders;
        console.log(this.ordersObserverData)
      }
    );
  }

  ngOnInit(): void {
  }

  /* waiterOrder(){ //Ocupar esta función para cuando retomemos firebase
    return this.ordersObserverData;
  } */

}

  /* waiterOrder(){ //Ocupar esta función para cuando retomemos firebase
    return this.ordersObserverData;
  } */
