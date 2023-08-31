interface StartingEquipmentOption {
  type: string;
  desc: string;
  choose: number;
}

export interface Class {
  name: string;
  index: string;
  hit_die: number;
  saving_throws: Array<string>;
  proficiencies: Array<string>;
  starting_equipment_options: StartingEquipmentOption[];
}

export interface ClassData {
  data: any;
  classes: Class[];
}