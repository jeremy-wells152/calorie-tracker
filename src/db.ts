import Dexie, { Table } from 'dexie';

export interface Food {
  id?: number;
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export interface Log {
  id?: number;
  date: string; // ISO date string
  foodId: number;
  quantity: number; // multiplier
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