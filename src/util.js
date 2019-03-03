export const $element = (el, props = {}, children = []) => {
	const $el = document.createElement(el);
	Object.entries(props).forEach(([k, v]) => {
		if (k === 'onCreateElement') {
			v();
		}
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
