import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  @Input() post: BlogPost;
  fullSummary: string;
  truncatedSummary:string;
  showFullText: boolean = true;


  constructor(private truncatePipe: TruncatePipe) { 
  }

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.truncatedSummary = this.post.summary = this.truncatePipe.transform(this.post.summary,30);
  }

  showFullSummary(){
    console.log("On click");
    if(this.showFullText){
      this.post.summary = this.fullSummary;
      this.showFullText = false;
    }else{
      this.post.summary = this.truncatedSummary;
      this.showFullText = true;
    }
  }

  toggleFav(){
    console.log("Toggle Fav "+this.post.isFav);
    this.post.isFav = !this.post.isFav;
  }
}