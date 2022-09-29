import { ProjectType } from "../../models/index.js";

export type projectType = {
    url:string;
    name:string
}
export type ProfileAction = {
    type: "SET_STORE" | "SET_AVATAR" | "SET_TAGLINE" | "SET_SUMMARY" | "SET_PORTFOLIO" 
    payload: any;
  };
  
  export type ProfileState = {
   avatar:string;
   tagline:string;
   summary:string;
   projects:  ProjectType[]
  };


 