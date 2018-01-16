import {Component, Input, ViewEncapsulation} from "@angular/core";

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
export class SecdoGridComponent {
	@Input() gridOptions: GridOptions;
	@Input() rowData: any[];

	@Input() showToolPanel: boolean = false;
	@Input() enableSorting: boolean = true;
	@Input() enableFilter: boolean = true;
	@Input() enableColResize: boolean = true;
	@Input() enableSelection: boolean = true;

	private gridApi;
	private gridColumnApi;

	_columnDefs: any[];
	loader: boolean;
	frameworkComponents: any;
	defaultColDef: any = { menuTabs: ['filterMenuTab'], headerComponentParams: { menuIcon: 'fa-filter' } };

	@Input()
	set columnDefs(columnDefs: any[]) {
		this._columnDefs = columnDefs;
		if (this.enableSelection){
			this.secdoGridService.getCheckboxColumn(this._columnDefs);
		}
	}

	constructor(private secdoGridService: SecdoGridService) {
		this.frameworkComponents = { agColumnHeader: HeaderComponent };
		this.gridOptions = secdoGridService.getEmptyGridOptions();
	}

	onGridReady(params) {
		this.loader = true;
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		params.api.sizeColumnsToFit();
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
* */

/*
* ToDO:
*
* 1 filters
* 2 sort
* 3 disable row selection to when select all is selected
* 4 infinite scroll
*
*/