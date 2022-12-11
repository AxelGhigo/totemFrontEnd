import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as io from 'socket.io-client';


@Component({
  selector: 'app-totemorizontale',
  templateUrl: './totemorizontale.component.html',
  styleUrls: ['./totemorizontale.component.css']
})
export class TotemorizontaleComponent implements OnInit{
  @ViewChild('prova') prova!: ElementRef

  socket: any;
  numerator: any;

  constructor() {}

  ngOnInit(): void {
    this.socket = io.io(`localhost:3000`)
    this.socket.on('nuovoMessagio', (res: any)=> {
      console.log("messagio:"+res)
      this.numerator = res

    });
  }

  pippo(): void {
    this.socket.emit('sendMessage', this.prova.nativeElement.value)
  }


}
