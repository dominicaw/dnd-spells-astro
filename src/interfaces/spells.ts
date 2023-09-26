export interface Spell {
	slug: string;
	name: string;
	desc: string;
	higher_level: string;
	page: string;
	range: string;
	target_range_sort: number;
	components: string;
	requires_verbal_components: boolean;
	requires_somatic_components: boolean;
	requires_material_components: boolean;
	material: string;
	can_be_cast_as_ritual: boolean;
	ritual: string;
	duration: string;
	concentration: string;
	requires_concentration: boolean;
	casting_time: string;
	level: string;
	level_int: number;
	spell_level: number;
	school: string;
	dnd_class: string;
	spell_lists: string[];
	archetype: string;
	circles: string;
	document__slug: string;
	document__title: string;
	document__license_url: string;
	document__url: string;
}

export interface SpellsData {
	data: any;
	spells: Spell[];
}
