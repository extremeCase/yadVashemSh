import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { AvailablePlacesHour } from 'src/app/models/AvailablePlacesHour.model';
import { YsPlacesService } from 'src/app/services/YsPlaces.service';


export interface DialogData {
  numOfPeopleInvite: number;
  hour: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value = 0;
  date: Date;
  sumAvPlace!: number;
  hourbuy!: AvailablePlacesHour;
  
  constructor(public yspServ: YsPlacesService, public dialog: MatDialog) {
    this.date = new Date();
  }

  ngOnInit(): void {
    this.yspServ.getAvailablePlace().subscribe(data => { this.sumAvPlace = data; });
  }

  handleMinus() {
    this.value--;
  }
  handlePlus() {
    this.value++;
  }

  chooseHour(hour: AvailablePlacesHour) {
    this.hourbuy = hour;
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        numOfPeopleInvite: this.value,
        hour: this.hourbuy.startTime
      },
    });
  }
}
