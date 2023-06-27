import { Course } from "./course";
import { Topic } from "./topic";
import { Trainer } from "./trainer";


export class Subject {
  public subjectId!:number;
  public subjectName!:string;
  public courses!:Course[];
  public trainers!:Trainer[];
  public topics!:Topic[];
}
