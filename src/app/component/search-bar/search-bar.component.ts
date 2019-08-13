import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { NameInfoService } from 'src/app/service/name-info.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  @Output() onSelectedOption = new EventEmitter();

  constructor(private infoservice: NameInfoService) { }

  ngOnInit() {
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.infoservice.names.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
    this.onSelectedOption.emit(this.infoservice.names);
  }

  remove(name: string): void {
    const index = this.infoservice.names.indexOf(name);

    if (index >= 0) {
      this.infoservice.names.splice(index, 1);
    }
    this.onSelectedOption.emit(this.infoservice.names);
  }
}
