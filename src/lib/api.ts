import axios, { Axios, AxiosResponse } from 'axios';
import type { Feature, FeaturesData } from '../interfaces/feature';
import type { Spell, SpellsData } from '../interfaces/spells';
import type { Class, ClassData } from '../interfaces/class';

const apiUrl = 'https://api.open5e.com/v1';
const documentSlug = 'document__slug__iexact=wotc-srd'; //only return spells from the players handbook

export const getSpells = async (): Promise<SpellsData> => {
	try {
		const response = await fetch(
			`${apiUrl}/spells/?${documentSlug}&limit=1000`
		);

		if (!response.ok) {
			throw new Error(`Request failed with status: ${response.status}`);
		}

		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error('Error fetching spells:', error);
		throw error;
	}
};

export const getClasses = async (): Promise<ClassData> => {
	try {
		const response = await fetch(`${apiUrl}/classes`);

		if (!response.ok) {
			throw new Error(`Request failed with status: ${response.status}`);
		}

		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error('Error fetching classes:', error);
		throw error;
	}
};

export const getSpellsByClass = async (className: string) => {
	try {
		const response = await fetch(
			`${apiUrl}/spells/?${documentSlug}&dnd_class__icontains=${className}&limit=1000`
		);

		if (!response.ok) {
			throw new Error(`Request failed with status: ${response.status}`);
		}

		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error('Error fetching spells:', error);
		throw error;
	}
};
