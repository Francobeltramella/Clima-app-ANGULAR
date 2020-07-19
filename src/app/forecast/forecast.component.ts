import { Component, OnInit } from '@angular/core';
import { ForestService } from '../service/forest.service';
import { showUp, showUpStaggered } from '../animations/showUp.animation';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass'],
  animations:  [showUpStaggered]
})
export class ForecastComponent implements OnInit {

  constructor( public forecastService : ForestService) { }

  ngOnInit(): void {
  }

}
