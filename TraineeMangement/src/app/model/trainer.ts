import { Address } from "./address";
import { Subject } from "./subject";

export class Trainer {
  public trainerId!:number;
  public trainerName!:string;
  public trainerAge!:number;
  public trainerGender!:string;
  public address!:Address;
  public subjects!:Subject[];
}
