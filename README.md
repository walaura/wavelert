# Wavelert
Windows 98 style javascript prompts.
![lol](https://raw.github.com/lawwrr/Wavelert/master/screenshot.gif)

## But…why?
Regular alerts just look worse and less cool than they used to. Also, I wanted to use ES6 syntax for *something*

## Browser usage
Add wavelert.js after jquery. Wavelert requires jQuery because I'm too lazy to use queryselector so you'll have to deal with that, sorry.

See index.html for details

	$('.🆒').on('click',function(){
		wavelert.confirm({
			title: 'Wololo',
			dark: true,
			icon: 'alert'
		}).success(function(){
            wavelert.alert('✨ all is good ✨');
        }).fail(function(){
            wavelert.alert('💩 you dismissed the alert 💩');
		})
	});

## Building
Just install gulp if you don't have it already

	sudo npm install --global gulp

Then gulp everything whenever you want to see changes

	sudo npm install
	gulp
