import { Batch } from "./batch";
import { Subject } from "./subject";


export class Course {
  public course_id!:number;
  public course_name!:string;
  public course_duration!:string;
  public course_fee!:number;
  public subjects!:Subject[];
  public batches!:Batch[];
}
