import { ITraining, GetTraining } from "../training/training.model";
export interface ICategory {
  categoryId: string;
  name: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  trainings: ITraining[];
}
export class Category {
  public categoryId?: "";
  public name?: "";
  public description?: "";
  public imageUrl?: "";
  public isActive?: false;
  public trainings?: GetTraining[];
}
