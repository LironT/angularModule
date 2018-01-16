import {Component, ElementRef, ViewChild, ViewEncapsulation} from "@angular/core";
import {IHeaderAngularComp} from "ag-grid-angular/main";
import {ParamsHeaderInt} from "./secdo-header.interface";

@Component({
	templateUrl: './secdo-header.component.html',
	styleUrls: ['./secdo-header.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements IHeaderAngularComp {
	public params: ParamsHeaderInt;
	public sorted: string;
	private that = this;
	private elementRef: ElementRef;

	@ViewChild('menuButton', {read: ElementRef}) public menuButton;

	constructor(elementRef: ElementRef) {
		this.elementRef = elementRef;
	}

	agInit(params: ParamsHeaderInt): void {
		this.params = params;
		this.params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
		this.onSortChanged();
	}

	ngOnDestroy() {
		console.log(`Destroying HeaderComponent`);
	}

	onMenuClick() {
		// this.params.showColumnMenu(this.querySelector('.customHeaderMenuButton'));
		this.params.showColumnMenu(this.menuButton.nativeElement);
	}

	onSortRequested(order, event) {
		this.params.setSort(order, event.shiftKey);
	};

	onSortChanged() {
		if (this.params.column.isSortAscending()) {
			this.sorted = 'asc'
		} else if (this.params.column.isSortDescending()) {
			this.sorted = 'desc'
		} else {
			this.sorted = ''
		}
	};


	private querySelector(selector: string) {
		return <HTMLElement>this.elementRef.nativeElement.querySelector(
			'.customHeaderMenuButton', selector);
	}
}