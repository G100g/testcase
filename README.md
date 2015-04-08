# Carousel TC

Use this AngularJS directive for create a simple images carousel with lazy load.

## Installation

Download using Bower package manager

    bower install https://github.com/G100g/testcase.git

Include all package dependencies from bower components folder (Angular, NormalizeCSS, jQuery) 

Include **carouselTC.css**

    <link href="bower_components/CarouselTC/src/carouselTC.css" />

and **carouselTC.js** from src folder

    <script src="bower_components/CarouselTC/src/carouselTC.js"></script>

Place `ngCarousel` directive in you page and inside place `IMG` elements for every image you want your carousel show.
Use `data-origin-src` to define image url in `IMG` element. Image will be loaded on show.

You can define slideshow time between slides with `timeout` property and dimension with `width` and `height` properties.

This is an markup example:

    <ng-carousel timeout="5000" width="1050" height="700">

      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-origin-src="https://unsplash.imgix.net/photo-1423683249427-8ca22bd873$

      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-origin-src="https://unsplash.imgix.net/photo-1422513391413-ddd4f2ce33$

      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-origin-src="https://unsplash.imgix.net/photo-1417128281290-30a42da462$

    </ng-carousel>
  
Enjoy your carousel.  
  
