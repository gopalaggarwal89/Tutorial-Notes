import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { TruncatePipe } from './truncate.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { BlogDataService } from './blog-data.service';
import { HighlightDirective } from './highlight.directive';
import { HighlightWithInputDirective } from './highlight-with-input.directive';
import { ShellComponent } from './shell/shell.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTileComponent,
    BlogListComponent,
    TruncatePipe,
    PaginatorComponent,
    HighlightDirective,
    HighlightWithInputDirective,
    ShellComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TruncatePipe, BlogDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
