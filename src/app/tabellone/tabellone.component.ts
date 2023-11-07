import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Popup } from '../int/popup';
import { BaseObj } from '../int/base-obj';
import { Tab } from '../int/tab';
import { Common } from '../lib/common';
import { Time } from '../int/time';


import * as io from 'socket.io-client';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-tabellone',
  templateUrl: './tabellone.component.html',
  styleUrls: ['./tabellone.component.css']
})
export class TabelloneComponent extends Common {

  tabKey: string[] = []
  tabValue: Array<BaseObj>[] = []
  time: Time = {
    minuti: '00',
    ore: '00',
    date: ''
  };

  constructor(public dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
    this.getTime()
    const socket = io.io(`localhost:3000`)

    socket.emit('type', 'tab')

    socket.on('Messagio', (res: Tab) => {

      this.tabKey = res.head
      this.tabValue = res.body

      console.log(this.tabValue)

    });

    socket.on('popup', (res: Popup) => {
      console.log(res)
      const dialogRef = this.dialog.open(PopupComponent, {
        width: '900px',
        height: '600px',
        data: res.data
      });

      dialogRef.afterOpened().subscribe(_ => {
        let audio = new Audio();
        audio.src = "../../assets/audio/popup.mp3";
        audio.load();
        audio.play();
        setTimeout(() => {
          dialogRef.close();
        },
          res.awaitTime)
      });
    })

  }

  getTime() {
    setInterval(() => {
      this.time = this.setTime()
    }, 1000)
  }
}
