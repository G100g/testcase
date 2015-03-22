describe('Carousel TC', function () {
	
	var _element,
		$scope;
		
	beforeEach(module('g100gCarousel'));
	beforeEach(inject(function ($compile, $rootScope) {
		
		$scope = $rootScope;
		_element = angular.element('<ng-carousel timeout="5000" width="1050" height="700"></ng-carousel>');
		$compile(_element)($rootScope);
		
	}));
	
	it('Should have ng-carousel class', function () {
		
		expect(_element.hasClass('ng-carousel')).toBe(true);
		
	});
	
	it('Should have div with ng-carousel-track class', function () {
		
		var $track = _element.find('div.ng-carousel-track');
		
		expect($track.length).toBe(1);
		
	});
	
});

