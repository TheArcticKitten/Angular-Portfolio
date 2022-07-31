import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    
  }

  contactScroll(): void {
    console.log('contact button pressed!')
    var element = document.getElementById("contact-location")!;
    element.scrollIntoView();
  }

  aboutScroll(): void {
    console.log('about button pressed!')
    var element = document.getElementById("about-location")!;
    element.scrollIntoView();
  }

  experienceScroll(): void {
    console.log('experience button pressed!')
    var element = document.getElementById("experience-location")!;
    element.scrollIntoView();
  }

  projectsScroll(): void {
    console.log('projects button pressed!')
    var element = document.getElementById("projects-location")!;
    element.scrollIntoView();
  }

  educationScroll(): void {
    console.log('education button pressed!')
    var element = document.getElementById("education-location")!;
    element.scrollIntoView();
  }

  skillsScroll(): void {
    console.log('skills button pressed!')
    var element = document.getElementById("skills-location")!;
    element.scrollIntoView();
  }
}
