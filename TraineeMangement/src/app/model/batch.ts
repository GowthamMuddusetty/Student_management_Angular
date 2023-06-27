import { Branch } from "./branch";
import { Course } from "./course";
import { Trainee } from "./trainee";


export class Batch {
  public batchId!:number;
  public batchName!:string;
  public batchStartingDate!:Date;
  public batchEndingDate!:Date;
  public course!:Course;
  public branch!:Branch;
  public trainee!:Trainee;
}
