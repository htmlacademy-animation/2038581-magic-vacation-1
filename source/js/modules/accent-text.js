import splitTextNode from './split-text-node.js';

export default () => {
	const mainHeader = document.getElementsByClassName('intro__title')[0];
	const mainHeaderAnimation = { containerClass: 'delay_0' , letterClasses: [
		'delay_150', 'delay_50', 'delay_0', 'delay_50', 'delay_100', 'delay_50', 'delay_0', 'delay_250', 'delay_100', 'delay_0', 'delay_100', 'delay_0', 'delay_0',
		'delay_350', 'delay_400', 'delay_350', 'delay_300', 'delay_350','delay_300'] };
	splitTextNode(mainHeader, mainHeaderAnimation);
	
	const dates = document.getElementsByClassName('intro__date')[0];
	const datesAnimation = { containerClass: 'delay_700' , letterClasses: [
		'delay_850', 'delay_800', 'delay_700' , 'delay_750', 'delay_700', 'delay_750', 'delay_750', 'delay_750', 'delay_800', 'delay_900', 'delay_700',
		'delay_800', 'delay_700', 'delay_700', 'delay_850', 'delay_850', 'delay_750'] };
	splitTextNode(dates, datesAnimation);
	
	const story = document.getElementsByClassName('slider__item-title')[0];
	const storyAnimation = { containerClass: 'delay_0' , letterClasses: ['delay_150', 'delay_50', 'delay_0' , 'delay_50', 'delay_100', 'delay_50', 'delay_0'] };
	splitTextNode(story, storyAnimation);
	
	const prizes = document.getElementsByClassName('prizes__title')[0];
	const prizesAnimation = { containerClass: 'delay_0' , letterClasses: ['delay_100', 'delay_50', 'delay_0' , 'delay_50', 'delay_100'] };
	splitTextNode(prizes, prizesAnimation);
	
	const rules = document.getElementsByClassName('rules__title')[0];
	const rulesAnimation = { containerClass: 'delay_0' , letterClasses: ['delay_200', 'delay_100', 'delay_50' , 'delay_0', 'delay_150', 'delay_50' , 'delay_0'] };
	splitTextNode(rules, rulesAnimation);
	
	const game = document.getElementsByClassName('game__title')[0];
	const gameAnimation = { containerClass: 'delay_0' , letterClasses: ['delay_150', 'delay_100', 'delay_0' , 'delay_50'] };
	splitTextNode(game, gameAnimation);
};
