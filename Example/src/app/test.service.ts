import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor() { }

  public sharedValue = 5;
  
}
