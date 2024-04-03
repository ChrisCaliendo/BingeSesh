import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show';

@Component({
  selector: 'app-movie-board',
  templateUrl: './movie-board.component.html',
  styleUrls: ['./movie-board.component.css']
})
export class MovieBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movies: Show[] = [
    {
      title: "The Batman",
      imageUrl: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      description: null
    },
    {
      title: "Superman",
      imageUrl: "/d7px1FQxW4tngdACVRsCSaZq0Xl.jpg",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Spider-Man",
      imageUrl: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
      description: null
    },
    {
      title: "The Flashiest Flash there ever was",
      imageUrl: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      description: null
    },
    {
      title: "Baby Driver",
      imageUrl: "/rmnQ9jKW72bHu8uKlMjPIb2VLMI.jpg",
      description: null
    },
    {
      title: "Gotham",
      imageUrl: "/1483zO2trK7YoqD2qO1fxmHJrTP.jpg",
      description: null
    }
  ] 

}
