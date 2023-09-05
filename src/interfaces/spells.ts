export interface Spell {
  name: string
  desc: string[]
  index: string
  level: number
  range: string
  ritual: boolean
  duration: string
  casting_time: string
  components: Array<string>
  attack_type: string
  damage: Array<string>
  area_of_effect: Array<string>
  classes: Array<string>
  concentration: string
  school: Array<string>
}

export interface SpellsData {
  data: any
  spells: Spell[]
}
