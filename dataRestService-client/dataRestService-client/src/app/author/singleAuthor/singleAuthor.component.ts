import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Author} from '../../books/model/book';
import {BooksService} from '../../books/service/books.service';
import {Subscription} from "rxjs";
import { AuthornamesPipe } from '../../pipes/authornames.pipe';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-singleAuthor',
    templateUrl: './singleAuthor.component.html',
    styleUrls: ['./singleAuthor.component.css'],
    standalone: true,
    imports: [NgIf, AuthornamesPipe]
})
export class SingleAuthorComponent implements OnInit, OnDestroy {
  selectedAuthor!: Author | null;
  private subscription!: Subscription;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private booksService: BooksService = inject(BooksService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.subscription = this.booksService.getAuthor(id).subscribe({
        next: (data: Author) => {
          this.selectedAuthor = data;
        },
        error: (_: any) => {
          this.selectedAuthor = null;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
