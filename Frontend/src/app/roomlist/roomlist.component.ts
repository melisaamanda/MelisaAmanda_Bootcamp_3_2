import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {

  public roomList: Object[] = [
    {'Unit_ID' : '1', 'Unit_Name' : 'Merkuri', 'Unit_Area' : '75', 'Availability' : '0', 'Unit_Price' : '750', 'Unit_img' : 'path'},
    {'Unit_ID' : '2', 'Unit_Name' : 'Venus', 'Unit_Area' : '50', 'Availability' : '1', 'Unit_Price' : '500', 'Unit_img' : 'path'},
    {'Unit_ID' : '3', 'Unit_Name' : 'Mars', 'Unit_Area' : '55', 'Availability' : '0', 'Unit_Price' : '550', 'Unit_img' : 'path'},
    {'Unit_ID' : '4', 'Unit_Name' : 'Yupiter', 'Unit_Area' : '65', 'Availability' : '0', 'Unit_Price' : '650', 'Unit_img' : 'path'},
    {'Unit_ID' : '5', 'Unit_Name' : 'Saturnus', 'Unit_Area' : '70', 'Availability' : '1', 'Unit_Price' : '700', 'Unit_img' : 'path'},
  ];

  bookUnit(id) {

    for (var i = 0; i < this.roomList.length; i++) {
      if (this.roomList[i]['name'] == id) {
      this.roomList[i]['status'] = 1;
      break;
      }}}

  constructor() { }

  ngOnInit() {
  }

}
