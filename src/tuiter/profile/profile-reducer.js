import currentProfile from "./currentProfile.json";
import {createSlice} from "@reduxjs/toolkit"

const profileSlice = createSlice({
                                     name: "currentProfile",
                                     initialState: currentProfile,
                                     reducers: {
                                         updateProfile(state, action) {
                                             return action.payload
                                         }
                                     }
                                 });
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;