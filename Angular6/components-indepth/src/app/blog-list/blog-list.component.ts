import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPost: BlogPost[][];
  currentPage: number;
  //Viewchild param is known as template reference variable
  // @ViewChild('tile') blogPostTileComponent: BlogPostTileComponent;
  @ViewChildren('tile') blogPostTileComponents: QueryList<BlogPostTileComponent>;

  constructor(private blogDataService: BlogDataService) { }

  ngOnInit() {
    this.currentPage = 0;
    this.blogPost = this.blogDataService.getData(); 
  }

  updatePageCount(newPage){
    console.log("Page number updated ");
    this.currentPage = newPage;
  }

  expandAll(){
    console.log("Expand all");
    // this.blogPostTileComponent.showFullText = true;
    this.blogPostTileComponents
    .forEach(e => e.showFullSummary());
  }

  favoriteAll(){
    this.blogPost[this.currentPage]
    .forEach(e => e.isFav = true);
  }
}