import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  currentData: string;

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.dataServiceService.currentData.subscribe(message => {
      this.currentData = message
    });
  }

  getServiceTestData() {
    this.dataServiceService.getTestData();
  }
}