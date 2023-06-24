import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-button-arrow',
  templateUrl: './button-arrow.component.html',
  styleUrls: ['./button-arrow.component.css']
})
export class ButtonArrowComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() { }

  scrollToTop() {
    this.document.documentElement.scrollTop = 0;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollThreshold = 150;
    const button = document.querySelector('.scroll-top-btn');
    if (button) {
      if (scrollY >= scrollThreshold) {
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    }
  }

}
