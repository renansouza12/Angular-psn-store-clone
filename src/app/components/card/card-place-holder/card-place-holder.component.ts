import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-card-place-holder',
  templateUrl: './card-place-holder.component.html',
  styleUrls: ['./card-place-holder.component.scss']
})
export class CardPlaceHolderComponent {
  @Input() cardTitle!:string;
  @Input() cardDevices:string[] = [];
  @Input() cardPrice!:string;
}
