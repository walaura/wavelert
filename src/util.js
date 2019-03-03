export const createElement = (el, props = {}, children = []) => {
	const $el = document.createElement(el);
	Object.entries(props).forEach(([k, v]) => {
		if (k.substring(0, 2) === 'on') {
			$el.addEventListener(k.substring(2).toLowerCase(), v);
		} else {
			$el.setAttribute(k, v);
		}
	});

	if (!Array.isArray(children)) children = [children];
	children
		.filter($child => !!$child)
		.forEach($child => {
			if (typeof $child === 'string' || typeof $child === 'number') {
				$el.appendChild(document.createTextNode($child));
			} else {
				$el.appendChild($child);
			}
		});

	return $el;
};

export const withCloseWrapper = fn => () =>
	new Promise((yay, nay) => {
		const onClose = state => {
			$item.remove();
			state ? yay() : nay();
		};
		const $item = fn(onClose);
		document.body.appendChild($item);
		if ($item.activate) {
			$item.activate();
		}
	});
