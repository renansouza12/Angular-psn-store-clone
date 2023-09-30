import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss',
  './menu-burger.responsive.component.scss']
})
export class MenuBurgerComponent {
  menu_burger:boolean = false;
  active:string = "disable";
  menuBurger():void{
    this.active === 'enable' ? this.active = 'disable' : this.active = 'enable';
   this.menu_burger === true ? this.menu_burger = false : this.menu_burger = true;
  }

}
