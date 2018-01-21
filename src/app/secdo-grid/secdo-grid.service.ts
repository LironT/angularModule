import {Injectable} from '@angular/core';
import {GridOptions} from "ag-grid";

@Injectable()
export class SecdoGridService {
	getEmptyGridOptions(): GridOptions{
		return <GridOptions>{
			animateRows: false,
			enableFilter: true,
			enableSorting: true,
			enableColResize: true,

			rowHeight: 40,
			headerHeight: 60,

			enableRangeSelection: true,
			rowSelection: 'multiple',
			suppressRowClickSelection: true,
			suppressNoRowsOverlay: true,

			// rowModelType: 'infinite',
			// enableServerSideSorting: true,
			// enableServerSideFilter: true,
			// getContextMenuItems: openContextMenu,
			// onSelectionChanged: onSelectionChanged,
			// processCellForClipboard: AggridService.processCellClipboardHandler,
			// getRowClass: getRowClassFunc,
		};
	}

	getDefaultIcons(): any {
		return {
			sortAscending: '<i class="fa fa-long-arrow-down"/>',
			sortDescending: '<i class="fa fa-long-arrow-up"/>',
			checkboxChecked: '<i class="secdo-aggrid-checkbox checked"/>',
			checkboxUnchecked: '<i class="secdo-aggrid-checkbox unchecked"/>',
			checkboxIndeterminate: '<i class="secdo-aggrid-checkbox intermediate"/>'
		};
	}

	getCheckboxColumn(columnDef): void{
		const checkboxColumn = {
			width: 35,
			headerName: '',
			field: 'selected',
			suppressMenu: true,
			suppressResize:true,
			suppressFilter: true,
			suppressSorting: true,
			suppressSizeToFit: true,
			checkboxSelection: true,
			headerCheckboxSelection: true,
			headerCheckboxSelectionFilteredOnly: true
		};
		columnDef.splice(0, 0, checkboxColumn);
	}
}