import { OnInit } from '@angular/core';
import { SecdoNgService } from './secdo-ng.service';
export declare class SecdoNgComponent implements OnInit {
    private appsrvc;
    title: string;
    constructor(appsrvc: SecdoNgService);
    ngOnInit(): void;
}
