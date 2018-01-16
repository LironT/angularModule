import {Injectable} from '@angular/core';
import {GridOptions} from "ag-grid";

@Injectable()
export class SecdoGridService {
	getEmptyGridOptions(): GridOptions{
		return <GridOptions>{
			animateRows: true,
			enableFilter: true,
			enableSorting: true,
			enableColResize: true,

			rowHeight: 40,
			headerHeight: 60,

			// suppressMenu: true,
			// suppressMenuMainPanel: true,
			// groupHeaders: true,
			// suppressRowClickSelection: true,
			// suppressMenuFilterPanel: true,
			// enableRangeSelection: true,
			rowSelection: 'multiple',
			// toolPanelSuppressValues: true,
			// suppressNoRowsOverlay: true,
			// toolPanelSuppressRowGroups: true,


			// enableServerSideSorting: true,
			// enableServerSideFilter: true,
			// headerCellRenderer: (!vm.headers) ? headerRightClickCellRendererFunc : vm.headers,
			// getContextMenuItems: openContextMenu,
			// onSelectionChanged: onSelectionChanged,
			// processCellForClipboard: AggridService.processCellClipboardHandler,
			// getRowClass: getRowClassFunc,
			// sortingOrder: [ 'desc', 'asc' ],
			// icons: {
			// 	sortAscending: '<span class="hide-sort-sign"></span>',
			// 	sortDescending: '<span class="hide-sort-sign"></span>',
			// 	filter: '<span class="hide-sort-sign"></span>',
			// 	menu: '<span class="secdo-grid-menu"></span>',
			// 	checkboxChecked: '<span class="secdo-aggrid-checkbox-checked"></span>',
			// 	checkboxUnchecked: '<span class="secdo-aggrid-checkbox-unchecked"></span>',
			// 	checkboxIndeterminate: '<span class="secdo-aggrid-checkbox-intermediate"></span>'
			// },
		};
	}

	getCheckboxColumn(columnDef): void{
		const checkboxColumn = {
			headerName: '',
			field: 'selected',
			headerCheckboxSelection: true,
			checkboxSelection: true,
			width: 30,
			suppressMenu: true,
			suppressResize:true,
			suppressFilter: true,
			suppressSorting: true,
			suppressSizeToFit: true
		};
		columnDef.splice(0, 0, checkboxColumn);
	}
}