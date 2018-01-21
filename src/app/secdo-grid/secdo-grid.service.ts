import {Injectable} from '@angular/core';
import {GridOptions} from "ag-grid";

@Injectable()
export class SecdoGridService {
	getEmptyGridOptions(serverUrl:string): GridOptions{
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

			rowBuffer: 0,
			paginationPageSize: 100,
			cacheOverflowSize: 2,
			maxConcurrentDatasourceRequests: 2,
			infiniteInitialRowCount: 1,
			maxBlocksInCache: 2,
			enableServerSideSorting: !!serverUrl,
			enableServerSideFilter: !!serverUrl,
			rowModelType: serverUrl ? 'infinite' : 'inMemory'
		};
	}

	getDefaultColumn(): any {
		return {
			menuTabs: ['filterMenuTab'],
			headerComponentParams: { menuIcon: 'fa-filter' },
			filter: 'agTextColumnFilter',
			filterParams: {
				apply: true /*, filterOptions: ['contains']*/
			}
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