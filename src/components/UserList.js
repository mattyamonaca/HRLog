import React ,{useState }from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync, clear, postReport } from "../stores/hourReport";
//import { fetchAsync, clear } from "../stores/gif";
import {Row,Col,Image,Card,Button,Form} from "react-bootstrap";
import {ResponsiveContainer,LineChart,XAxis,YAxis,CartesianGrid,Line} from "recharts";
import {makeReport} from "../stores/report";

import SlackForm from "./SlackForm";
import UserInfoList from "./UserInfoList";
import UserReport from "./UserReport"

function UserList() {
    const page = useSelector(state => state.hourReport.page);
    const user_info = useSelector(state => state.hourReport.user_info)
    const loading = useSelector(state => state.hourReport.loading);
    const error = useSelector(state => state.hourReport.error);


    const [values, setValues] = useState({
      page : "initial"
    });

    return (
    <div>
      <h1 className="title">HRLog</h1>
      <ReportHandler {...{ page,user_info, loading,error }} />
    </div>
	    );
}

function ReportHandler({page,user_info,loading,error}){
  const dispatch = useDispatch();

    const [values, setValues] = useState({
      page : ""
    });
  console.log(page)
  if (error) {
    return <p className="notification is-danger">Error!!</p>;
  }
  if (loading) {
    return <p className="notification is-info">Loading...</p>;
      }
  if (page == "initial") {
    return (
        <SlackForm {...{user_info}}/>
    );
  }
  if (page == "user_list")
    return (
        <div>
            <UserInfoList {...{user_info}} />
        </div>
  );
  if (page == "report"){
    console.log(user_info)
    return (
        <UserReport {...{user_info}}/>
    );
  };
  

}

export default UserList;
