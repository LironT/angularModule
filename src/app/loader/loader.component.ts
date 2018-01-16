import {Component, Input} from "@angular/core";

@Component({
  selector: 'dots-loader',
  styleUrls: ['./loader.component.scss'],
  templateUrl: './loader.component.html'
})
export class LoaderComponent {
	@Input() showLoader: boolean = true;
	@Input() numOfDots: number = 6;

	dotsArr: any[];

	constructor(){
		this.dotsArr = Array(this.numOfDots);
	}
}