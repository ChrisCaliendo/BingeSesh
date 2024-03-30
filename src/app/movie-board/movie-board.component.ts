import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-board',
  templateUrl: './movie-board.component.html',
  styleUrls: ['./movie-board.component.css']
})
export class MovieBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movies = [
    {
      title: "The Batman",
      imageUrl: "/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    },
    {
      title: "Superman",
      imageUrl: "/d7px1FQxW4tngdACVRsCSaZq0Xl.jpg"
    },
    {
      title: "Spider-Man",
      imageUrl: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg"
    },
    {
      title: "The Flashiest Flash there ever was",
      imageUrl: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
    },
    {
      title: "Baby Driver",
      imageUrl: "/rmnQ9jKW72bHu8uKlMjPIb2VLMI.jpg"
    },
    {
      title: "Gotham",
      imageUrl: "/1483zO2trK7YoqD2qO1fxmHJrTP.jpg"
    }
  ] 

}
