import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
	selector: 'app-red-component',
	templateUrl: './red-component.component.html'
})
export class RedComponentComponent implements ICellRendererAngularComp{
	private params: any;

	agInit(params: any): void {
		this.params = params;
	}

	refresh(params: any): boolean {
		return false;
	}
}