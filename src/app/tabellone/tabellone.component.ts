import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import * as io from 'socket.io-client';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-tabellone',
  templateUrl: './tabellone.component.html',
  styleUrls: ['./tabellone.component.css']
})
export class TabelloneComponent {

  dataMessageResults: any = []
  tabKey: any = []
  tabValue: any = []
  paginaton: any = []

  minuti: any
  ore: any
  date: any;

  constructor(public dialog: MatDialog) { }

  numerotore = ""

  ngOnInit(): void {
    this.getTime()
    const socket = io.io(`https://totem-socket.adaptable.app`)

    console.log(socket.id)

    socket.emit('type', 'tab')

    socket.on('Messagio', (res: any) => {

      this.tabKey = [], this.tabValue = []

      this.getData(res)
    });

    socket.on('popup', (res) => {
      console.log(res)
      const dialogRef = this.dialog.open(PopupComponent, {
        width: '900px',
        height: '600px',
        data: res.data
      });

      dialogRef.afterOpened().subscribe(_ => {
        setTimeout(() => {
          dialogRef.close();
        }, res.awaitTime)
      });
    })

  }

  getData(obj: any) {

    this.tabKey = obj.head
    this.tabValue = obj.body
  }

  blink = true

  getTime() {
    setInterval(() => {

      if (this.blink) { this.blink = false }
      else { this.blink = true }

      const day = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
      const mouth = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novrembre", "Dicembre"]
      const data = new Date()
      this.minuti = this.addZero(data.getHours())
      this.ore = this.addZero(data.getMinutes())
      this.date = day[data.getDay()] + " " + data.getDate() + " " + mouth[data.getMonth()] + " " + data.getFullYear()

    }, 1000)
  }

  addZero(num: any) {
    if (num < 10) return "0" + num
    return num
  }
}
