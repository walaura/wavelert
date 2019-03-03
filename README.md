# Wavelert

Windows 98 style javascript prompts.

<div align=center>

![lol](https://raw.github.com/walaura/Wavelert/master/screenshot.gif)

</div>

## But…why?

Regular alerts just look worse and less cool than they used to. Also, I wanted to use ES6 syntax for _something_

## Promises

You can build alerts & confirms as promises that accept or reject depending on the button that was pressed like this

```js
import { Confirm, Alert } from 'wavelert/promisified';

const promisifiedAlert = Confirm({ text: 'are you sure?' });
promisifiedAlert()
	.then(() => {
		Alert({
			text: '✨ all is good ✨',
			theme: 'pink',
		})(); /*creating it returns a function that opens it you you gotta call it*/
	})
	.catch(() => {
		Alert({ text: '💩 you dismissed the alert 💩' })();
	});
```

## HTML Elements

You can generate HTMl elements for all items buy calling them directly and passing props

```js
import { Alert, WaveWindow } from 'wavelert';

const $window = WaveWindow(
	{ theme: 'pink' },
	Alert({
		text: '✨ all is good ✨',
	})
);

document.appendChild($window);
```

## Legacy browser usage

All of these things are also in `window.wavelert` if you need them

Check the [live demo](http://walaura.github.io/wavelert/) for details.

```js
$('.🆒').on('click', function() {
	window.wavelert
		.Confirm({
			title: 'Wololo',
			dark: true,
			icon: 'alert',
		})
		.then(() => {
			window.wavelert.Alert({ text: '✨ all is good ✨' });
		})
		.catch(() => {
			window.wavelert.Alert({ text: '💩 you dismissed the alert 💩' });
		});
});
```

## Building wavelert

Super easy, it uses parcel

```
npm run watch
```

Create a production build with

```
npm run build
```

And build the github page with

```
npm run gh-pages
```
