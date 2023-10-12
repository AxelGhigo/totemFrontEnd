import { Component } from '@angular/core';

@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.css']
})
export class GraficiComponent {


  charLabels: any = ["IN Attesa", "In visita", "OSS."]

  chartData: any = [
    {
      data: [2, 0,0], backgroundColor: [
        'rgba(255, 0, 0)',
        'rgba(205, 123, 0)',
        'rgba(255, 208, 0)',
      ], label: 'Seria A',
      borderRadius: 6
    },
    {
      data: [6, 1, 0], backgroundColor: [
        'rgba(255, 123, 0)',
        'rgba(255, 123, 0)',
        'rgba(255, 208, 0)'
      ], label: 'Seria B',
      borderRadius: 6,
      minBarLength: 1
    },
    {
      data: [22, 0, 2], backgroundColor: [
        'rgba(255, 208, 0)',
        'rgba(255, 123, 0)',
        'rgba(255, 208, 0)'
      ], label: 'Seria C',
      borderRadius: 6
    },
    {
      data: [1, 0, 0], backgroundColor: [
        'rgba(2, 204, 0)',
        'rgba(255, 123, 0)',
        'rgba(255, 208, 0)'
      ], label: 'Seria D',
      borderRadius: 6,
      minBarLength: 1
    },
    {
      data: [0, 0, 0], backgroundColor: [
        'rgba(255, 255, 255)',
        'rgba(255, 123, 0)',
        'rgba(255, 208, 0)'
      ], label: 'Seria E',
      borderRadius: 6
    }
  ]



  chartOption = {
    scales: {
      y: {
        grid: {
          display : false
        }
      },
      x: {
        grid: {
          color: 'white',
          borderColor : 'white'
        },
      }
    }
  }

}
