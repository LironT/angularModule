import {Component, OnInit} from '@angular/core';
import {RedComponentComponent} from 'app/red-component/red-component.component';
import {Http} from '@angular/http';
import {gridData} from "./data";

@Component({
  selector: 'secdo-ng',
  templateUrl: './secdo-ng.component.html',
  styleUrls: ['./secdo-ng.component.scss']
})
export class SecdoNgComponent implements OnInit {
  columnDefs: any[] = [];
	rowData: any = [];

  constructor(private http: Http) {}

  ngOnInit() {
		this.columnDefs = [
			{ headerName: 'Athlete', field: 'athlete', cellRendererFramework: RedComponentComponent, filter: 'agTextColumnFilter', filterParams: {apply: true} },
			{ headerName: 'Age', field: 'age', width: 90, suppressSorting: true, filter: 'agNumberColumnFilter', filterParams: {apply: true} },
			{ headerName: 'Country', field: 'country', width: 120, filter: 'agSetColumnFilter', filterParams: { selectAllOnMiniFilter: true } },
			{ headerName: 'Year', field: 'year', width: 90, suppressSorting: true },
			{ headerName: 'Date', field: 'date', width: 100, filter: 'agDateColumnFilter', filterParams: { filterOptions: ['inRange'] } },
			{ headerName: 'Sport', field: 'sport', width: 90, suppressSorting: true },
			{ headerName: 'Gold', field: 'gold', width: 115 },
			{ headerName: 'Silver', field: 'silver', width: 90, suppressSorting: true },
			{ headerName: 'Bronze', field: 'bronze', width: 115 },
			{ headerName: 'Total', field: 'total', width: 90 }
		];

		this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json')
			.subscribe(data => {
				this.rowData = data;
			}, error => {
				this.rowData = gridData;
			});
	}
}