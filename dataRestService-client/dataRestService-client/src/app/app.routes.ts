import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {BooksComponent} from "./books/books.component";
import {BookComponent} from "./books/book/book.component";
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthorComponent} from "./author/author.component";
import {SingleAuthorComponent} from "./author/singleAuthor/singleAuthor.component";
import {loggedInGuard} from "./logged-in.guard";

const booksRoutes: Routes = [
  {path: ':id', component: BookComponent}
];

const authorRoutes: Routes = [
  {path: ':id', component: SingleAuthorComponent}
];

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'authors', component: AuthorComponent,
    children: authorRoutes

  },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ loggedInGuard ]
  },
  {path: 'books', component: BooksComponent,
    children: booksRoutes
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];