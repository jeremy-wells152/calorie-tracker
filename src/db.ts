import Dexie, { Table } from 'dexie';

export enum Unit {
  Gram = "g",
  Kilogram = "kg",
  Milliliter = "ml",
  Liter = "l",
  Teaspoon = "tsp",
  Tablespoon = "tbsp",
  Cup = "cup",
  Ounce = "oz",
  FluidOunce = "fl oz",
  Pound = "lb"
}

export interface Food {
  id?: number;
  name: string;
  densityGramsPerMl?: number; // used for volume based measurement entries
  caloriesPerGram: number;
  proteinPerGram: number;
  fatPerGram: number;
  carbsPerGram: number;
}

export interface Log {
  id?: number;
  date: string; // ISO date string
  foodId: number;
  weightGrams: number;
  unit: Unit;
}

class CalorieDB extends Dexie {
  foods!: Table<Food, number>;
  logs!: Table<Log, number>;

  constructor() {
    super("CalorieTrackerDB");
    this.version(1).stores({
      foods: "++id, name",
      logs: "++id, date, foodId"
    });
  }
}

export const db = new CalorieDB();