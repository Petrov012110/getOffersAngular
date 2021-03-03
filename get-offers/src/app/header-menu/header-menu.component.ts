import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  public showMenu: boolean = false;

  @Output()
  public toggleShowMenuEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public toggleShowMenu(): void {
    this.showMenu = !this.showMenu;
    this.toggleShowMenuEvent.emit(this.showMenu);
  }

}
