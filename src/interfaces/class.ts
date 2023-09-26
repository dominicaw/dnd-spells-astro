export interface Class {
	name: string;
	slug: string;
	desc: string;
	hit_dice: string;
	hp_at_1st_level: string;
	hp_at_higher_levels: string;
	prof_armor: string;
	prof_weapons: string;
	prof_tools: string;
	prof_saving_throws: string;
	prof_skills: string;
	equipment: string;
	table: string;
	spellcasting_ability: string;
	subtypes_name: string;
	archetypes: Archetype[];
	document__slug: string;
	document__title: string;
	document__license_url: string;
	document__url: string;
}

interface Archetype {
	name: string;
	slug: string;
	desc: string;
	document__slug: string;
	document__title: string;
	document__license_url: string;
	document__url: string;
}

export interface ClassData {
	data: any;
	classes: Class[];
}
