import {Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation} from "@angular/core";
import {IHeaderAngularComp} from "ag-grid-angular/main";
import {ParamsHeaderInt} from "./secdo-header.interface";

@Component({
	templateUrl: './secdo-header.component.html',
	styleUrls: ['./secdo-header.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnDestroy, IHeaderAngularComp {
	public params: ParamsHeaderInt;
	public sorted: string;
	public isFiltered = false;
	private elementRef: ElementRef;

	@ViewChild('menuButton', {read: ElementRef}) public menuButton;

	constructor(elementRef: ElementRef) {
		this.elementRef = elementRef;
	}

	agInit(params: ParamsHeaderInt): void {
		this.params = params;
		this.params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
		this.params.column.addEventListener('filterChanged', this.onFilterChanged.bind(this));
		this.onSortChanged();
	}

	ngOnDestroy() {
		console.log(`Destroying HeaderComponent`);
	}

	onMenuClick() {
		this.params.showColumnMenu(this.menuButton.nativeElement);
	}

	onHeaderSortRequested(event) {
		if (this.params.enableSorting){
			let order = this.sorted === 'asc' ? 'desc' : 'asc';
			this.params.setSort(order, event.shiftKey);
		}
	};

	onSortRequested(order, event) {
		this.params.setSort(order, event.shiftKey);
	};

	onSortChanged() {
		if (this.params.column.isSortAscending()) {
			this.sorted = 'asc'
		}
		else if (this.params.column.isSortDescending()) {
			this.sorted = 'desc'
		}
		else {
			this.sorted = ''
		}
	};

	onFilterChanged(params) {
		this.isFiltered = params.column.filterActive;
		console.log('params', params);
	};
}