import { Component, OnInit } from '@angular/core';
import { SecdoNgService } from './secdo-ng.service';

@Component({
  selector: 'secdo-ng',
  templateUrl: './secdo-ng.component.html',
  styleUrls: ['./secdo-ng.component.css']
})
export class SecdoNgComponent implements OnInit{
  title = 'app works! ';

  constructor(private appsrvc: SecdoNgService) {}

  ngOnInit() {
    this.title += this.appsrvc.get()
  }
}