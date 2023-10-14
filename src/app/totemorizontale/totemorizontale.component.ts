import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as io from 'socket.io-client';


@Component({
  selector: 'app-totemorizontale',
  templateUrl: './totemorizontale.component.html',
  styleUrls: ['./totemorizontale.component.css']
})
export class TotemorizontaleComponent implements OnInit {
  @ViewChild('prova') prova!: ElementRef

  socket: any;
  numerator: any;
  stampa: any;
  selectedTab: any


  dataMessageResults: any = []
  tabKey: any = []
  tabValue: any = []
  paginaton: any = []
  tabs: any = []

  typeColl: any = ["priorità", "type", "number", "data", "room", "stato"]

  constructor() { }

  ngOnInit(): void {
    this.socket = io.io(`https://master--classy-frangollo-6e2df8.netlify.app:3000`)

    this.socket.emit('type', 'totem')

    this.socket.on('popup', (res: any) => {
      console.log("messagio:" + res)
      this.numerator = res
      this.stampa = JSON.stringify(res);
    });

    this.socket.on('user', (res: any) => { this.tabs = res; console.log(this.tabs) })

    this.socket.on('sendSelecetedTab', (t: any) => {
      console.log('sendSelecetedTab', t)

      this.tabKey = t.tab.head
      this.tabValue = t.tab.body
      this.selectedTab = t.user
    })
  }

  setTab(t: any) { this.socket.emit('takeSelectedtab', t) }


  getData(obj: any) {
    this.tabKey = obj.head
    this.tabValue = obj.body
  }

  fielModifie(e: any) {
    this.tabValue[e.target.id.split('.')[0]][e.target.id.split('.')[1]].value = e.target.value

    this.sendNewMsg()
  }

  addRow() {
    let arr: any = []
    this.tabKey.forEach((e: any) => {
      arr.push({ "value": "" })
    })
    console.log(arr)
    this.tabValue.push(arr)

    console.log(this.tabValue)
    this.sendNewMsg()
  }

  removeRow(i: any) {
    this.tabValue.splice(i, 1)
    this.sendNewMsg()
  }

  callPopUp(i: any) {
    this.socket.emit('sendpopup', {
      "numerator": this.tabValue[i][this.tabKey.indexOf('number')].value,
      "urgenza": this.tabValue[i][this.tabKey.indexOf('priorità')].value,
      "colore": this.tabValue[i][this.tabKey.indexOf('number')].color,
    })
  }

  addColl(e: any) {
    console.log(e.target.innerText)
    this.tabKey.push(e.target.innerText)
    this.tabValue.map((e: any) => e.push({ "value": "" }))

    this.sendNewMsg()
  }

  removeColl(i: any) {
    this.tabValue = this.tabValue.map((e: any) => { e.splice(i, 1); return e })
    this.tabKey.splice(i, 1)

    this.sendNewMsg()
  }

  moveCollLeft(i: any) {
    this.tabKey = this.scambia(this.tabKey, i - 1, i)

    this.tabValue.map((e: any) => {
      e = this.scambia(e, i - 1, i)
    })

    this.sendNewMsg()
  }
  moveCollRight(i: any) {
    this.tabKey = this.scambia(this.tabKey, i + 1, i)

    this.tabValue.map((e: any) => {
      e = this.scambia(e, i + 1, i)
    })

    this.sendNewMsg()
  }

  sendNewMsg() {
    console.log(this.selectedTab)
    this.socket.emit('newMsg', {
      "head": this.tabKey, "body": this.tabValue, "selectedTab": this.selectedTab
    })
  }

  scambia(T: any, v: any, n: any) {
    const x = T[n];
    T[n] = T[v];
    T[v] = x;
    return T
  }
}
