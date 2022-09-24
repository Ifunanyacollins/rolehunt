import { ProfileAction, ProfileState } from "../profile/types";

export const reducer = (
  state: ProfileState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case "SET_STORE":
      return { ...action.payload };
    case "SET_AVATAR":
      return { ...state, avatar: action.payload };
    case "SET_TAGLINE":
      return { ...state, tagline: action.payload };
    case "SET_SUMMARY":
      return { ...state, summary: action.payload };
    case "SET_PORTFOLIO":
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};

export const initialState: ProfileState = {
  avatar: "",
  tagline: "UI/UX Design & Development",
  summary:
    "The next big thing is the one that makes the last big thing usable.",
  projects: [],
};
