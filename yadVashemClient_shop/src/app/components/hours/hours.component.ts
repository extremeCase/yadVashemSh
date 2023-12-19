import { Dialog } from '@angular/cdk/dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AvailablePlacesHour } from 'src/app/models/AvailablePlacesHour.model';
import { YsPlacesService } from 'src/app/services/YsPlaces.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {

  hoursList!: AvailablePlacesHour[];
  partsOfTheDay: string = "1";
  checkedHour: number = -1;

  @Input() numOfPeople = 0;
  @Output() hourChoose = new EventEmitter<AvailablePlacesHour>();

  constructor(public ysServ: YsPlacesService) { }

  ngOnInit(): void {
    this.partsOfTheDayChange("1");
  }

  partsOfTheDayChange(partOfDay: string) {
    this.ysServ.getHoursByPartOfTheDay(this.partsOfTheDay).subscribe(data => {
      this.hoursList = data;
    })
  }

  chekHour(hour: AvailablePlacesHour, i: number) {
    console.log(hour);
    this.checkedHour = i;
    this.hourChoose.emit(hour);
  }

}
