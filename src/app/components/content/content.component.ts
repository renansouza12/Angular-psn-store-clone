import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss',
  'content.responsive.component.scss']
})
export class ContentComponent {
 @Input() contentCover!:string;
 @Input() contentTitle!:string;
}
