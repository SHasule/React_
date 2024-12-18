
 import Chance from "chance";

 const chance=Chance();

export function fakeUserData(){
 return chance.name({ middle: true });

 }