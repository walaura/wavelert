# Wavelert

Windows 98 style javascript prompts!

<div align=center>

![lol](https://raw.github.com/walaura/Wavelert/master/screenshot.gif)

</div>

## But…why?

Regular alerts just look worse and less cool than they used to. Also, I wanted to use ES6 syntax for _something_

## Promises

You can build alerts & confirms as promises that accept or reject depending on the button that was pressed like this, the promisified methods return a function that when called will display the window visually and returns a promise

```js
import { Confirm, Alert } from 'wavelert/promisified';

const promisifiedAlert = Confirm({ children: 'are you sure?' });
promisifiedAlert()
	.then(() => {
		Alert({
			children: '✨ all is good ✨',
			theme: 'pink',
		})(); /*creating it returns a function that opens it so you gotta call it*/
	})
	.catch(() => {
		Alert({ children: '💩 you dismissed the alert 💩' })();
	});
```

## HTML Elements

You can generate HTML elements for all items by calling them directly and passing props

```js
import { Alert, WaveWindow } from 'wavelert';

const $window = WaveWindow({
	theme: 'pink',
	children: Alert({
		children: '✨ all is good ✨',
	}),
});

document.appendChild($window);
```

## Legacy browser usage

All of these things are also in `window.wavelert` if you need them, promisified methods live in `window.wavelert.promisified`

Check the [live demo](http://walaura.github.io/wavelert/) for details.

```js
const = {Confirm, Alert} = window.wavelert.promisified;

document.querySelector('#🆒').addEventListener('click', () => {
	Confirm({
		title: 'Wololo',
		dark: true,
		icon: 'alert',
	})
	.then(() => 
		Alert({ children: '✨ all is good ✨' });
	)
	.catch(() => 
		Alert({ children: '💩 you dismissed the alert 💩' });
	);
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
