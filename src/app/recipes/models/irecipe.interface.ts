import { Style } from "./style.enum";

export interface IRecipe {
  id: string;
  name: string;
  author: string;
  image: string;
  notes: string;
  createdAt: string;
  time: number;
  style: Style;
  favorite: boolean;
  ingredients: string[];
  instructions: string[];
}