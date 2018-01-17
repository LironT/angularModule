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

	icons: any;
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
		this.icons = secdoGridService.getDefaultIcons();
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

	postProcessPopup(params) {
		switch (params.type){
			case 'columnMenu':
				SecdoGridComponent.processColumnMenu(params);
				break;
			case 'contextMenu':
			case 'aggFuncSelect':
			case 'popupCellEditor':
				break;
		}

		// the popup we are showing
		// ePopup: HTMLElement;
		//
		// The different types are: 'contextMenu', 'columnMenu', 'aggFuncSelect', 'popupCellEditor'
		// type: string;
		//
		// if popup is for a column, this gives the Column
		// column?: Column,
		//
		// if popup is for a row, this gives the RowNode
		// rowNode?: RowNode,
		//
		// if the popup is as a result of a button click (eg menu button),
		// this is the component that the user clicked
		// eventSource?: HTMLElement;
	};

	static processColumnMenu(params){
		const popupHtml = params.ePopup;

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
* install open sans font
*/