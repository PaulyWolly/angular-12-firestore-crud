import { Component, OnInit } from '@angular/core';
import Tutorial from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial: Tutorial = new Tutorial();
  submitted = false;
  message = '';
  title = false;
  description = false;

  constructor(
    private tutorialService: TutorialService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.message = '';
  }

  saveTutorial(): void {
    this.tutorialService.create(this.tutorial).then(() => {

      this.submitted = true;

      setTimeout(() => {  this.router.navigate(['/tutorials']); }, 3000);

    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }

  getValues(title: string) {
    console.log('title: ' + title)
  }

}
