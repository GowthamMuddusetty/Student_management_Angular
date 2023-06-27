import { Batch } from "./batch";
import { Subject } from "./subject";


export class Course {
  public courseId!:number;
  public courseName!:string;
  public courseDuration!:number;
  public subjects!:Subject[];
  public batches!:Batch[];
}
