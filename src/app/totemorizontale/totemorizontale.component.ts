import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

import { BaseObj } from '../int/base-obj';
import { MsgTab } from '../int/msg-tab';

import { Common } from '../lib/common';


@Component({
  selector: 'app-totemorizontale',
  templateUrl: './totemorizontale.component.html',
  styleUrls: ['./totemorizontale.component.css'],
})
export class TotemorizontaleComponent extends Common implements OnInit {


  socket!: io.Socket;
  selectedTab!: string;

  tabKey: string[] = []
  tabValue: Array<BaseObj>[] = []
  tabs: MsgTab[] = []

  ngOnInit(): void {
    this.socket = io.io(`localhost:3000`)

    this.socket.emit('type', 'totem')

    this.socket.on('user', (res: MsgTab[]) => this.tabs = res)

    this.socket.on('sendSelecetedTab', (t: MsgTab) => {

      this.tabKey = t.tab.head
      this.tabValue = t.tab.body
      this.selectedTab = t.user
    })
  }

  setTab(t: MsgTab) { this.socket.emit('takeSelectedtab', t) }

  fielModifie(e: Event) {
    const xy = (<HTMLInputElement>e.target).id.split('.').map(Number)
    this.tabValue[xy[0]][xy[1]].value = (<HTMLInputElement>e.target).value

    this.sendNewMsg()
  }

  addRow() {
    let arr: BaseObj[] = []
    this.tabKey.forEach((e: string) => arr.push(this.insertClassType(e)))
    this.tabValue.push(arr)
    this.sendNewMsg()
  }

  removeRow(i: number) {
    this.tabValue.splice(i, 1)
    this.sendNewMsg()
  }

  callPopUp(i: number) {
    this.socket.emit('sendpopup', {
      "numerator": this.tabValue[i][this.tabKey.indexOf('number')].value,
      "urgenza": this.tabValue[i][this.tabKey.indexOf('priorità')].value,
      "colore": this.tabValue[i][this.tabKey.indexOf('number')].color,
    })
  }

  addColl(e: Event) {
    this.tabKey.push((<HTMLInputElement>e.target).innerText)
    this.tabValue.forEach((event: BaseObj[]) => event.push(this.insertClassType((<HTMLInputElement>e.target).innerText)))

    this.sendNewMsg()
  }

  removeColl(i: number) {
    this.tabValue.forEach((e: BaseObj[]) => e.splice(i, 1))
    this.tabKey.splice(i, 1)

    this.sendNewMsg()
  }

  moveCollLeft(i: number) {
    this.tabKey = this.scambia(this.tabKey, i - 1, i)

    this.tabValue.forEach((e: BaseObj[]) => {
      this.scambia(e, i - 1, i)
    })

    this.sendNewMsg()
  }

  moveCollRight(i: number) {
    this.tabKey = this.scambia(this.tabKey, i + 1, i)

    this.tabValue.forEach((e: BaseObj[]) => {
      this.scambia(e, i + 1, i)
    })

    this.sendNewMsg()
  }

  sendNewMsg() {
    console.log(this.tabValue)
    this.socket.emit('newMsg', {
      "head": this.tabKey, "body": this.tabValue, "selectedTab": this.selectedTab
    })
  }
}

