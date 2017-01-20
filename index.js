/** @jsx dom */
import deepEqual from 'deep-equal';
import dom from 'magic-virtual-element';
import imagesloaded from 'imagesloaded';
import objectOmit from 'object-omit';
import Packery from 'packery';

const propTypes = {
	children: {
		type: 'array'
	},
	component: {
		type: 'string'
	},
	options: {
		type: 'object'
	}
};

const defaultProps = {
	component: 'div'
};

const afterRender = ({props}, el) => {
	const {options} = props;

	imagesloaded(el, () => {
		const packery = new Packery(el, options);
		let resizeTimer;

		packery.layout();

		window.addEventListener('resize', () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => packery.layout(), 100);
		});
	});
};

const shouldUpdate = ({props}, nextProps) => !deepEqual(props, nextProps);

const render = ({props}) => {
	const {children, component} = props;
	return dom(component, objectOmit(props, Object.keys(propTypes)), children);
};

export default {afterRender, defaultProps, propTypes, render, shouldUpdate};
