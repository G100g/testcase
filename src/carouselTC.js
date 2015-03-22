angular
	.module('g100gCarousel', [])
	.directive('ngCarousel', ['$window', '$interval', function ($window, $interval) {
		
		return {
			
			restrict: 'E',						
			template: '<div class="ng-carousel-track" ng-transclude></div><button class="prev">&lt;</button><button class="next">&gt;</button>',
			transclude: true,
			
			link: function (scope, element, attrs) {
				
				// Setup Class
				
				var totalWidth = 0,
					singleWidth = 0,
					$images = element.find('img'),
					$track = element.find('.ng-carousel-track'),
					
					$btnNext = element.find('.next'),
					$btnPrev = element.find('.prev'),
					
					SI,
					
					$win = $($window),
					ratio = attrs.height / attrs.width;
					
					
				scope.currentIndex = 0;
				
				function updateImagesSize() {
					
					var i,
						t,
						$img;
											
					for(i = 0, t = $images.length; i < t; i++) {
						
						$img = $($images[i]);
						
						$img.width(singleWidth);
						
					}
					
				}
							
				function updateTrackSize() {
															
					$track.width(totalWidth);
					
				}
				
				function updateSizes() {
					
					// Single Size
					singleWidth = element.width();
					
					// Track Size
					totalWidth = singleWidth * $images.length;
					
					element.height(singleWidth * ratio);
					
					
				}
				
				function goTo(index) {
					
					var left = 0;
										
					left = (singleWidth * index) * -1;
					
					$track.css({
								transform: 'translateX(' + left + 'px)'
							});
					
					scope.currentIndex = index;
					
					$images.removeClass('current');
					$images.eq(scope.currentIndex).addClass('current');
					
					preloadImage();
					
					
				}
				
				function goToNext() {
					
					var nextIndex = scope.currentIndex + 1;
					
					if (nextIndex >= $images.length) {
						
						nextIndex = 0;
						
					}
					
					goTo(nextIndex);
					
				}
				
				function goToPrev() {
					
					var nextIndex = scope.currentIndex - 1;
					
					if (nextIndex < 0) {
						
						nextIndex = $images.length - 1;
						
					}
					
					goTo(nextIndex);
					
				}
				
				function preloadImage() {
					
					var $img = $($images[scope.currentIndex]),
						onLoad;
					
					if ($img.data('loadState') === undefined) {
						
						// Start preloadingimage
						
						$img.data('loadState', 'loading');
						
						onLoad = function () {
							
							$img.off('load', onLoad);							
							$img.data('loadState', 'loaded');
							$img.addClass('loaded');
							
						};						
						
						$img.on('load', onLoad);
						
						$img.attr('src', $img.data('origin-src'));
						
					}
					
				}
				
				function stopPlay() {
					
					$interval.cancel(SI);
				}
				
				function startPlay() {
					
					SI = $interval(function () {
					
						goToNext();
					
					}, attrs.timeout);
					
				}
				
				function onResizeWindow() {
					
					updateSizes();
					updateImagesSize();
					updateTrackSize();
					
					goTo(scope.currentIndex);
					
				}
				
				// Setup ELements
				element.addClass('ng-carousel');
				
				// Init Sizes
												
				updateSizes();
				updateImagesSize();
				updateTrackSize();
				
				
				// Attach Events
				
				$btnNext.on('click', function (e) {
					
					e.preventDefault();
					
					stopPlay();
					
					goToNext();
					
					startPlay();
					
				});
				
				$btnPrev.on('click', function (e) {
					
					e.preventDefault();
					
					stopPlay();
					
					goToPrev();
					
					startPlay();
					
				});
				
				
				// Show First Slide
				
				goTo(scope.currentIndex);
				
				$win.on('resize', onResizeWindow);
				
				startPlay();
								
			}
			
		};
		
	}])
;
