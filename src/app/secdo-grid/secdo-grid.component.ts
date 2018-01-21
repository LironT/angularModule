import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {Http} from '@angular/http';

import {GridOptions} from "ag-grid/main";
import {SecdoGridService} from "./secdo-grid.service";
import {HeaderComponent} from "./header/secdo-header.component";

@Component({
	selector: 'secdo-grid',
	styleUrls: ['./secdo-grid.component.scss'],
	templateUrl: './secdo-grid.component.html',
	providers: [SecdoGridService],
	encapsulation: ViewEncapsulation.None
})
export class SecdoGridComponent implements OnInit{
	private gridApi;
	private gridColumnApi;

	public icons: any;
	public _columnDefs: any[];
	public loader: boolean;
	public frameworkComponents: any;
	public defaultColDef: any;

	@Input() serverUrl: string;

	@Input() gridOptions: GridOptions;
	@Input() rowData: any[];

	@Input() showToolPanel: boolean = false;
	@Input() enableSorting: boolean = true;
	@Input() enableFilter: boolean = true;
	@Input() enableColResize: boolean = true;
	@Input() enableSelection: boolean = true;

	@Input()
	set columnDefs(columnDefs: any[]) {
		this._columnDefs = columnDefs;
		if (this.enableSelection){
			this.secdoGridService.getCheckboxColumn(this._columnDefs);
		}
	}

	constructor(private http: Http, private secdoGridService: SecdoGridService) {}

	ngOnInit() {
		this.frameworkComponents = { agColumnHeader: HeaderComponent };
		this.defaultColDef = { menuTabs: ['filterMenuTab'], headerComponentParams: { menuIcon: 'fa-filter' },
			filterParams: { apply: true /*, filterOptions: ['contains']*/ } };
		this.gridOptions = this.secdoGridService.getEmptyGridOptions(this.serverUrl);
		this.icons = this.secdoGridService.getDefaultIcons();
	}

	onGridReady(params) {
		this.loader = true;
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		params.api.sizeColumnsToFit();

		if (this.serverUrl) {
			this.getDataFromServer(params);
		}
	}

	getDataFromServer(params) {
		this.http.get(this.serverUrl).subscribe(data => {
			let dataSource = {
				rowCount: null,
				getRows: params => {
					let jsonData = data.json();
					let rowsThisPage = jsonData.slice(params.startRow, params.endRow);
					let lastRow = jsonData.length <= params.endRow ? jsonData.length : -1;
					params.successCallback(rowsThisPage, lastRow);
				}
			};

			params.api.setDatasource(dataSource);
		}, error => {
			this.loader = false;
		});
	}

	onModelUpdated(){
		this.loader = false;
	}

	onCellClicked(row){
		console.log(row);
	}

	selectAllRows() {
		this.gridOptions.api.selectAll();
	}

	postProcessPopup(params) {
		switch (params.type){
			case 'columnMenu':
				SecdoGridComponent.processColumnMenu(params);
				break;
			case 'contextMenu':
			case 'aggFuncSelect':
			case 'popupCellEditor':
				// if popup is for a column, this gives the Column column?: Column,
				// if popup is for a row, this gives the RowNode rowNode?: RowNode,
				break;
		}
	};

	static processColumnMenu(params){
		const popupHtml = params.ePopup;// the popup we are showing ePopup: HTMLElement

		let oldTopStr = popupHtml.style.top;
		oldTopStr = oldTopStr.substring(0, oldTopStr.indexOf('px'));
		let oldTop = parseInt(oldTopStr);
		let newTop = oldTop + 30;
		popupHtml.style.top = newTop + 'px';
	}
}

/*
* in the parent controller gridOptions.context will hold a reference to the parent as follows:
* this.gridOptions = <GridOptions>{ context: { componentParent: this } };
*
* in the child component - the angular components created dynamically in the grid
* the parent component can then be accessed as follows:
* this.params.context.componentParent
*
* * componentParent is just a name can be anything - myComponenet
*/

/*
* ToDO:
*
* 1 filters
* 3 disable row selection to when select all is selected
* 4 infinite scroll
*
* select alldoesnt work for infinite scroll - allow headerCheckboxSelection is not supported for Infinite Row Model
* install open sans font
*/