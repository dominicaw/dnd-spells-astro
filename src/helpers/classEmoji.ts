import type { ClassEmoji } from '../interfaces/classEmoji';

export const classEmoji: ClassEmoji = {
	barbarian: '🤬',
	bard: '👩🏻‍🎤',
	druid: '🌻',
	fighter: '🗡',
	cleric: '✨',
	paladin: '😇',
	monk: '👊',
	ranger: '🏹',
	rogue: '😶‍🌫️',
	sorcerer: '🔮',
	wizard: '🧙',
	warlock: '😈'
};

export const classEmojiSorter: Function = (
	className: string,
	classEmoji: ClassEmoji
) => {
	if (className in classEmoji) {
		return classEmoji[className];
	}
	return '🤷‍♀️';
};
