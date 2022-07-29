import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Oooooh, look, photos';
  image1 = 'https://images.boattrader.com/resize/1/15/75/7971575_20210731110206239_1_LARGE.jpg';
  image2 = 'https://static4.depositphotos.com/1015060/463/i/950/depositphotos_4635323-stock-photo-sailboats-at-sea.jpg';
  image3 = 'https://www.sailtahiti.com/wp-content/uploads/2021/12/Garcia-Passoa-54-feature.jpeg';

  constructor() { }

  ngOnInit() {
  }

}