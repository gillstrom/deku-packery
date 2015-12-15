/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import Packery from '../';

const opts = {
	columnWidth: '.Packery-size',
	itemSelector: '.Packery-item',
	percentPosition: true,
	stamp: '.Packery-stamp'
};

const app = tree(
	<Packery class='Packery' options={opts}>
		<div class='Packery-stamp Packery-stamp--1'><img src='http://placehold.it/350x300'/></div>
		<div class='Packery-stamp Packery-stamp--2'><img src='http://placehold.it/700x150'/></div>
		<div class='Packery-size'/>
		<div class='Packery-item'><img src='http://placehold.it/350x150'/></div>
		<div class='Packery-item'><img src='http://placehold.it/350x150'/></div>
		<div class='Packery-item'><img src='http://placehold.it/350x150'/></div>
		<div class='Packery-item'><img src='http://placehold.it/350x150'/></div>
	</Packery>
);

render(app, document.body);
