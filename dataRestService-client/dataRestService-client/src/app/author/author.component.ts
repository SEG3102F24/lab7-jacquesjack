import {Component, inject, OnInit} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgStyle, NgFor } from '@angular/common';
import { ActivatedRoute, Router, Routes, RouterOutlet } from '@angular/router';
import { SingleAuthorComponent } from './singleAuthor/singleAuthor.component';

export const authorRoutes: Routes = [
  {path: ':id', component: SingleAuthorComponent}
];

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.css'],
    standalone: true,
    imports: [NgStyle, FormsModule, ReactiveFormsModule, NgFor, RouterOutlet]
})
export class AuthorComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  submit(value: string): void {
    this.router.navigate(['./', value], {relativeTo: this.route}).then(r => {});
  }
 
}
