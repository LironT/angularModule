import { Injectable } from '@angular/core';

@Injectable()
export class SecdoNgService {
  private emptyTextDisplay: string = "from service";

  get(): string{
    return this.emptyTextDisplay;
  }

  set(emptyTextDisplay: string){
    this.emptyTextDisplay = emptyTextDisplay;
  }
}