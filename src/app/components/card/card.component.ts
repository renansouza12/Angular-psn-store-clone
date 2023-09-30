import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss',
  'card.responsive.component.scss']
})
export class CardComponent {
  @Input() cardLabel!:string;

  @Input() cardImage!:string;
  @Input() cardTitle!:string;
  @Input() cardDevices:string[] = [];
  @Input() cardPrice!:string;
}
