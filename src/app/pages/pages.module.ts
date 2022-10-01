import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MiscModule } from '../misc/misc.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, MiscModule],
  exports: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    PageNotFoundComponent,
  ],
})
export class PagesModule {}
