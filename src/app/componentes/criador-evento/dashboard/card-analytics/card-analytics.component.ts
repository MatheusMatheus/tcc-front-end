import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-analytics',
  templateUrl: './card-analytics.component.html',
  styleUrls: ['./card-analytics.component.scss']
})
export class CardAnalyticsComponent implements OnInit {

  @Input()
  header: string;

  @Input()
  valorEstatistica: number;

  @Input()
  periodo: string;

  data: any;

  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: '',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40],
          options: {
            legend: {
              display: false
            }
          }
        },
      ]
    };
  }

  ngOnInit(): void {
  }

  getTitulo() {
    return `${this.valorEstatistica} / ${this.periodo}`;
  }

}
