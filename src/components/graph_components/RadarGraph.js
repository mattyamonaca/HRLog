import React ,{useState }from "react";
import { useSelector, useDispatch } from 'react-redux';
//import { fetchAsync, clear } from "../stores/gif";
import {Row,Col,Image,Card,Button,Form} from "react-bootstrap";
import { PolarGrid,PolarAngleAxis,PolarRadiusAxis,Radar,Legend,RadarChart} from "recharts";

function RadarGraph(item){
    console.log("radar")
    console.log(item.item.user_info.user_name)

    const data = [
        {
            "subject":"ave_text_count", "rate" : item.item.user_info.ave_text_count,
        },
        {
            "subject":"ave_text_length", "rate" : item.item.user_info.ave_text_length,
        },
        {
            "subject":"from_reply_user_avg", "rate" : item.item.user_info.from_reply_user_avg,
        },
        {
            "subject":"reply_avg:", "rate" : item.item.user_info.reply_avg,
        },
        {
            "subject":"to_reply_user_avg", "rate" : item.item.user_info.to_reply_user_avg,
        },
        {
            "subject":"all_text_count", "rate" : 0.6,
        },
    ]

    return (
        <div>
            <RadarChart outerRadius={90} width={730} height={250} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 1]} />
                <Radar name={item.item.user_info.user_name} dataKey="rate" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </div>
	);
}


export default RadarGraph;
