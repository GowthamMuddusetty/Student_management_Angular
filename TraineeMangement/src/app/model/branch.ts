import { Batch } from "./batch";
import { Location } from "./location";


export class Branch{
  public branchId!:number;
  public branchName!:string;
  public location!:Location;
  public batches!:Batch[];
}
