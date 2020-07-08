import React ,{useState }from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync, clear, postReport } from "../stores/hourReport";
//import { fetchAsync, clear } from "../stores/gif";
import {Row,Col,Image,Card,Button,Form} from "react-bootstrap";
import {ResponsiveContainer,LineChart,XAxis,YAxis,CartesianGrid,Line} from "recharts";
import {makeReport} from "../stores/report";

import SlackForm from "./SlackForm";
import UserInfoList from "./UserInfoList";
import RadarGraph from "./graph_components/RadarGraph";

function UserReport(item) {
    console.log("abc")
    console.log(item.user_info.user_name)
    return (
        <div>
            <Image src={item.user_info.image_url}/> 
            <h5>{item.user_info.user_name}</h5>
            <hr></hr>
            <h5>description</h5>
            <RadarGraph {...{item}} />
        </div>
	);
}


export default UserReport;
