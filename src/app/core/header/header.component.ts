import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, Observable, of, tap, switchMap } from 'rxjs';
import { SearchService } from 'src/app/service/search.service';
import { Animations } from './animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    Animations.menuToggler,
    Animations.openCloseNav,
    Animations.openCloseDropdown,
    Animations.rotateCaret,
    Animations.openCloseMedia,
    Animations.toggleNavSearch,
    Animations.rotateIcon,
  ]
})
export class HeaderComponent implements OnInit {
  isToggler = true;
  navMenuOpen = false;
  body = document.querySelector("body") as HTMLBodyElement;

  dropdownOpen = false;
  navMediaOpen = false;

  navbarSearchOpen = false;
  state: string = 'true';
  model!: Observable<any>;
  searchFailed = false;
  searching = false;

  // nav-sidebar
  toggleNavMenu(): void {
    this.isToggler = !this.isToggler;
    this.navMenuOpen = !this.navMenuOpen;
    this.bodyScroll();
    this.closeSearch();
  }

  clickedOutsideNavMenu(): void {
    this.navMenuOpen = false;
    // this.bodyScroll();
    this.body.style.overflow = "auto";
  }

  closeInsideNav(): void {
    this.navMenuOpen = !this.navMenuOpen;
    // this.bodyScroll();
    this.body.style.overflow = "auto";
  }

  bodyScroll() {
    if(this.navMenuOpen) {
      this.body.style.overflow = "hidden";
    } else {
      this.body.style.overflow = "auto";
    }
  }

  // dropdown
  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
    this.closeSearch();
  }

  clickedOutsideDropdown():void {
    this.dropdownOpen = false;
  }

  // nav-media
  toggleMediaMenu(): void {
    this.navMediaOpen = !this.navMediaOpen;
    this.closeSearch();
  }

  clickedOutsideMedia():void {
    this.navMediaOpen = false;
  }
  
  // search
  toggleNavSearch(): void {
    this.navbarSearchOpen = !this.navbarSearchOpen;
    this.state = (this.state === 'true' ? 'false' : 'true');
  }

  closeInsideSearch(): void {
    this.closeSearch();
  }

  closeSearch() {
    this.navbarSearchOpen = false;
    if(this.state === 'false') {
      this.state = (this.state === 'false' ? 'true' : 'false');
    }
  }

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  selectCategory(event: Event): void {
    this.searchService.setCategory((event.target as HTMLSelectElement).value)
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 2 ? [] : this.searchService.search(term).pipe(
        tap(() => {
          this.searching = false;
          this.searchFailed = false;
        }),
        catchError(() => {
          this.searching = true;
          this.searchFailed = false;
          return of([]);
        }))
      ),
      tap(() => this.searching = false)      
    );

  formatter = (x: {title: string}) => x.title;
}
