import { createElement } from './util';
import {
	window as windowCss,
	titleButton,
	windowTitle,
	wrapper,
} from './WaveWindow.css';
import closeIcon from './static/close.gif';

let maxZIndex = 10;

const createTitle = ({ title, onMove, onMoveStart, onClose }) => {
	let mousedown = false;
	let pos = [0, 0];

	const $title = createElement('header', { class: windowTitle }, [
		title,
		createElement(
			'button',
			{
				class: titleButton,
				onClick: onClose,
			},
			createElement('img', { src: closeIcon })
		),
	]);

	$title.addEventListener('mousedown', ev => {
		pos = [ev.pageX, ev.pageY];
		onMoveStart();
		mousedown = true;
	});
	window.addEventListener('mouseup', () => {
		mousedown = false;
	});
	window.addEventListener('mousemove', ({ pageX, pageY }) => {
		if (mousedown) {
			const [originalX, originalY] = pos;
			onMove(pageX - originalX, pageY - originalY);
		}
	});

	return $title;
};

const WaveWindow = ({
	title,
	dark,
	width,
	height,
	onClose,
	theme,
	children,
}) => {
	let position = [0, 0];
	let lockedPosition = [...position];

	const $window = createElement('dialog', { class: windowCss, tabIndex: 0 }, [
		createElement('main', {}, children),
	]);
	const $title = createTitle({
		title,
		onMoveStart: () => {
			lockedPosition = [...position];
		},
		onMove: (x, y) => {
			position = [lockedPosition[0] + x, lockedPosition[1] + y];
			$window.style.transform = `translateX(${position[0]}px) translateY(${
				position[1]
			}px)`;
		},
		onClose,
	});
	$window.prepend($title);
	const $wrapper = createElement(
		'div',
		{ class: wrapper, 'data-dark': dark, 'data-theme': theme },
		[$window]
	);
	if (width) {
		$window.style.width = width + 'px';
	}
	if (height) {
		$window.style.height = height + 'px';
	}

	$wrapper.activate = () => {
		requestAnimationFrame(() => {
			const $firstButton = $window.querySelector('main button');
			if ($firstButton) {
				$firstButton.focus();
			} else {
				$window.focus();
			}
		});
	};

	$window.addEventListener('focus', () => {
		maxZIndex++;
		$wrapper.style.zIndex = maxZIndex;
	});

	return $wrapper;
};

export { WaveWindow };
