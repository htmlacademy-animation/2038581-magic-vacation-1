export default (node, animation = {}) => {
	const outerSpan = document.createElement('span');
	outerSpan.classList = ['accent-text'];
	const text = node.textContent || '';
	const { containerClass, letterClasses } = animation;
	[...text].map((letter, index) => {
		const innerSpan = document.createElement('span');
	 	const letterBlock = document.createElement('div');
	 	
	 	innerSpan.classList = [`${containerClass} accent-text__letter-container`];
 		letterBlock.textContent = letter;
 		letterBlock.classList = [`${letterClasses[index]} accent-text__letter`];
 		innerSpan.appendChild(letterBlock);
 		outerSpan.appendChild(innerSpan);
	});
	 node.replaceChild(outerSpan, node.childNodes[0]);
};