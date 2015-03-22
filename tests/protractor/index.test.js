var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(cls) !== -1;
    });
};

describe("Carousel TC", function () {
	
	beforeEach(function () {
		browser.get('./');			
	});
	
	it("should have track", function () {
      expect(element(by.css('div.ng-carousel-track')).isPresent()).toBe(true);
    });
    
    it("should have buttons", function () {
      
      expect(element(by.css('.ng-carousel button.next')).isPresent()).toBe(true);
      expect(element(by.css('.ng-carousel button.prev')).isPresent()).toBe(true);
      
    });	
	
	it("should change slide clicking next button", function () {
      
      var images;
      
      images = $$('.ng-carousel img');
      
      expect(images.count()).toBe(3);
      
      expect(hasClass(images.get(0), 'current')).toBe(true);
      expect(hasClass(images.get(1), 'current')).toBe(false);
      expect(hasClass(images.get(2), 'current')).toBe(false);
      
      // click Next
      
      element(by.css('.ng-carousel button.next')).click();
      
      expect(hasClass(images.get(0), 'current')).toBe(false);
      expect(hasClass(images.get(1), 'current')).toBe(true);
      expect(hasClass(images.get(2), 'current')).toBe(false);
      
    });	
	
});

