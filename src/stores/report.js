import { createSlice } from "@reduxjs/toolkit";
import analizeApi from "../api/analize";
import gifApi from "../api/gif";

const initialState = {
    user_id : "",
    text : "",
    time : "",
    loading: false,
    error: false
};

const slice = createSlice({
	name: "report",
	initialState,
	reducers: {
        makeReport: (state,action) => {
            console.log("post") 
            console.log(action.payload)
        }
	}
    });

// Reducer
export default slice.reducer;

// Actions
export const { clear } = slice.actions;
export const { makeReport } = slice.actions;

// Async task
export function fetchAsync(channel) {
    return async function(dispatch) {
	dispatch(slice.actions.fetchStart());

	try {
		const response = await analizeApi.slack(channel);
		console.log(response)
	    dispatch(slice.actions.fetchSucceed(response));
	} catch (err) {
	    dispatch(slice.actions.fetchFaild(err));
	}
    };
}