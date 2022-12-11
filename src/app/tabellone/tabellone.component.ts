import { Component, Output, Renderer2, ElementRef, ViewChild } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-tabellone',
  templateUrl: './tabellone.component.html',
  styleUrls: ['./tabellone.component.css']
})
export class TabelloneComponent {
  @ViewChild('numeratori') numeratori: any;

  constructor(private renderer: Renderer2) { }

  numerotore = ""
  socket: any

  ngOnInit(): void {
    this.socket = io.io(`localhost:3000`)
    this.socket.on('nuovoMessagio', (res: any) => {
      console.log("messagio:" + res)
      const p = this.renderer.createElement('p');
      p.innerHTML = res;
      this.renderer.setAttribute(p, "id", res)
      this.renderer.appendChild(this.numeratori.nativeElement, p);
    });
  }
}
