# Wavelert
Windows 98 style javascript promts
![lol](https://raw.github.com/lawwrr/Wavelert/master/screenshot.gif)

## But…why?
Regular alerts just look worse and less cool than they used to. Also, I wanted to use ES6 syntax for *something*

## Browser usage
Add wavelert.js after jquery. Wavelert requires jQuery because I'm too lazy to use queryselector so you'll have to deal with that, sorry.

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

## Building
Npm install. You'll need gulp as a global too _or at least I think you need it, maybe try node gulpfile.js just in case that works, you never know_. After that's done just use «gulp»
