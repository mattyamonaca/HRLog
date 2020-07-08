import { createSlice } from "@reduxjs/toolkit";
import analizeApi from "../api/analize";
import gifApi from "../api/gif";

const initialState = {
	page : "initial",
    user_info : {},
    loading: false,
    error: false
};

const slice = createSlice({
	name: "hourReport",
	initialState,
	reducers: {
	    fetchStart: state => {
		return Object.assign({}, state, { user_info: {}, loading: true });
	    },
	    fetchSucceed: (state, action) => {
		return Object.assign({}, state, { user_info: action.payload, page:"user_list", loading: false });
	    },
	    fetchFaild: (state, action) => {
		console.error(action.payload);
		return Object.assign({}, state, { loading: false, error: true });
        },
        
	    clear: () => {
		return { text: "", loading: false, error: false };
        },
        makeReport: (state,action) => {
            console.log("post") 
            console.log(action.payload)   
            return {page:"report", user_info: action.payload, loading: false, error: false }
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

