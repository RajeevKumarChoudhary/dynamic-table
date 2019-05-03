import { Component, OnInit, ViewChild } from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  formData = [
    { "country": "India", "capital": "New Delhi" },
    { "country": "USA", "capital": "Washington DC" },
    { "country": "United Kingdom", "capital": "London" },
    { "country": "France", "capital": "Paris" },
    { "country": "Russia", "capital": "Moscow" }
  ];
  rows: Array<any> = [
    {},
    {}
  ];
  private data: any = {};
  columns: Array<any> = [];
  private data1: any = {};
  filterdOptions;

  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  ngOnInit() {
  }
  addRow() {
    this.rows.push(this.data);
    this.data = {};
  }
  removeRow(index) {
    if (this.rows.length > 2)
      this.rows.splice(index, 1);
  }

  addColumn() {
    this.columns.push(this.data1);
    this.data1 = {};
  }

  removeColumn(index) {
    this.columns.splice(index, 1);
  }

  onKeyCapital(event, index) {
    var matchedData = this.formData.filter(item => {
      return item.capital.indexOf(event) > -1
    })
    this.rows[index].country = matchedData[0].country;
    this.filterdOptions = this.formData;
  }

  onKeyCountry(event, index) {
    var matchedData = this.formData.filter(item => {
      return item.country.indexOf(event) > -1
    })
    this.rows[index].capital = matchedData[0].capital;
    this.filterdOptions = this.formData;
  }

  filterCountryData(input: string, i) {
    this.filterdOptions = this.formData.filter(item => {
      return item.country.toLowerCase().indexOf(input.toLowerCase()) > -1
    });

  }
  filterCapitalData(input: string, i) {
    this.filterdOptions = this.formData.filter(item => {
      return item.capital.toLowerCase().indexOf(input.toLowerCase()) > -1
    });
  }
}
