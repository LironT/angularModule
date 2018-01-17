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

			// suppressMenu: true,
			// suppressMenuMainPanel: true,
			// groupHeaders: true,
			// suppressRowClickSelection: true,
			// suppressMenuFilterPanel: true,
			// enableRangeSelection: true,
			rowSelection: 'multiple',
			suppressRowClickSelection: true
			// toolPanelSuppressValues: true,
			// suppressNoRowsOverlay: true,
			// toolPanelSuppressRowGroups: true,

			// rowModelType: 'infinite',

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