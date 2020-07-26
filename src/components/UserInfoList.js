import React ,{useState }from "react";
import { useSelector, useDispatch } from 'react-redux';
import {Row,Col,Image,Card,Button,Form} from "react-bootstrap";
import {ResponsiveContainer,LineChart,XAxis,YAxis,CartesianGrid,Line} from "recharts";
import UserList from "./UserList";

import {makeReport} from "../stores/hourReport";


function UserInfoList({user_info}){
    const dispatch = useDispatch();
    return (
        <div>
        <ul>
            {
                user_info.map(
                    item => (
                        <li key={item.user_id}>{
                            <a style={{ cursor: 'pointer' }} onClick={() => dispatch(makeReport(item))}>
                            <Card>
                            　<Card.Body>
                                <Card.Title>{item.user_name}</Card.Title>
                                　<Row>
                                    <Col xs={3} md={2}>
                                    　<Image src={item.image_url}/>  
                                　　</Col>
                                　　<Col xs={12} md={8}>
                                        <Card.Text>
                                            今週の会話履歴
                                        </Card.Text>
                                        <WeekSummary {...{item}} />
                                　　</Col>
                                　</Row>
                                </Card.Body>
                            </Card>
                            </a>
                            }
                        </li>
                    )
                )
            }
        </ul>
        </div>
    )

}

function WeekSummary({item}){
    const json_str = item.weekly_info.replace(/\'/g,'\"')
    console.log(json_str)
    const weekly_json_data = JSON.parse(json_str || "null")
    console.log(weekly_json_data)
    console.log("test")
    const data = [
        {name: '7/5', value: 12},
        {name: '7/6', value: 24},
        {name: '7/7', value: 6},
        {name: '7/8', value: 8},
        {name: '7/9', value: 24},
        {name: '7/10', value: 12},
        {name: '7/11', value: 6},
    ]
    return(
    <div style={{ width: '100%', height: '100px' }}>
    <ResponsiveContainer>
    <LineChart data={weekly_json_data["chat_count"]}>
        <XAxis dataKey="date"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
      </ResponsiveContainer>
      </div>
    )
}

export default UserInfoList;
