import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { NavBarSignInComponent } from 'src/app/components/nav-bar/nav-bar-sign-in/nav-bar-sign-in.component';
import { MenuBurgerComponent } from 'src/app/components/nav-bar/menu-burger/menu-burger.component';
import { ContentComponent } from 'src/app/components/content/content.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { CardLabelComponent } from 'src/app/components/card/card-label/card-label.component';
import { CardPlaceHolderComponent } from 'src/app/components/card/card-place-holder/card-place-holder.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    NavBarSignInComponent,
    MenuBurgerComponent,
    ContentComponent,
    CardComponent,
    CardLabelComponent,
    CardPlaceHolderComponent

  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
