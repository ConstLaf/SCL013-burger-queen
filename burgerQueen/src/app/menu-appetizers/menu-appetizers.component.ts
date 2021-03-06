import { Component, OnInit } from '@angular/core';
import { MenuAppetizersService } from '../services/menu-appetizers.service';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-menu-appetizers',
  templateUrl: './menu-appetizers.component.html',
  styleUrls: ['./menu-appetizers.component.css']
})
export class MenuAppetizersComponent implements OnInit {

  appetizersDataCall:any[] = [];

  constructor(
    private menuAppetizersService: MenuAppetizersService,
    public summaryConection: SummaryService){
    this.menuAppetizersService.appetizersMenu().subscribe(answer=>{
      this.appetizersDataCall = answer["appetizers"]
    })
   }

  ngOnInit(): void {
  }

  sendProduct(object){
    this.summaryConection.pushToOrder(object)
  }

}
