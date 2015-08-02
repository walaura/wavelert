# Wavelert
Windows 98 style javascript promts

## But…why?
Regular alerts just look worse and less cool than they used to. Also, I wanted to use ES6 syntax for *something*

## Browser usage
add wavelert.js after jquery. Wavelert requires jQuery because I'm too lazy to use queryselector so you'll have to deal with that, sorry.

	$(function(){
		$('.yolo').on('click',function(){
			wavelert({
				dark: true,
				icon: 'alert'
			}).success(function(){
				console.log('🙆🏽');
			}).fail(function(){
				console.log('🙎');
			})
		});
	})
