import axios, { Axios, AxiosResponse } from 'axios';
import type { Feature, FeaturesData } from '../interfaces/feature';
import type { Spell, SpellsData } from '../interfaces/spells';
import type { Class, ClassData } from '../interfaces/class';

export const getClasses = async (): Promise<Class[]> => {
	try {
		const response: AxiosResponse<ClassData[]> = await axios.post(
			'https://www.dnd5eapi.co/graphql/',
			{
				query: `
          query getClasses {
            classes {
              name
              index
              hit_die
              saving_throws {
                index
                name
              }
              proficiencies {
                name
                index
              }
              starting_equipment_options {
                type
                desc
                choose
              }
            }
          }
        `
			}
		);

		return response.data.data.classes;
	} catch (err) {
		console.error('Error:', err);
		return [];
	}
};

export const getFeaturesByClass = async (
	classParam: string
): Promise<Feature[]> => {
	try {
		const response: AxiosResponse<FeaturesData> = await axios.post(
			'https://www.dnd5eapi.co/graphql/',
			{
				query: `
          query getFeatures($class: StringFilter) {
            features(class: $class) {
              index
              level
              class {
                name
              }
            }
          }
        `,
				variables: {
					class: classParam
				}
			}
		);

		return response.data.data.features;
	} catch (err) {
		console.error('Error:', err);
		return [];
	}
};

export const getSpells = async (): Promise<Spell[]> => {
	try {
		const response: AxiosResponse<SpellsData> = await axios.post(
			'https://www.dnd5eapi.co/graphql/',
			{
				query: `
          query getSpells($order: SpellOrder) {
            spells(order: $order) {
              name
              desc
              index
              level
              range
              ritual
              duration
              casting_time
              components
              attack_type
              damage {
                damage_at_character_level {
                  level
                  damage
                }
                damage_at_slot_level {
                  damage
                  level
                }
              }
              area_of_effect {
                size
                type
              }
              classes {
                index
              }
              concentration
              school {
                name
              }
              dc {
                type {
                  full_name
                }
              }
            }
          }
        `,
				variables: {
					order: {
						by: 'NAME'
					}
				}
			}
		);

		return response.data.data.spells;
	} catch (err) {
		console.error('Error:', err);
		return [];
	}
};
