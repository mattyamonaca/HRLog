import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import gifReducer from "./gif";
import hourReportReducer from "./hourReport";
import report from "./report"

const reducer = combineReducers({
    gif: gifReducer,
    hourReport : hourReportReducer,
    report: report
    });

const store = configureStore({ reducer });

export default store;
