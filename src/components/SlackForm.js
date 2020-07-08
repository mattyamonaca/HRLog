import React ,{useState }from "react";
import { useSelector, useDispatch } from 'react-redux';

import { fetchAsync, clear, postReport } from "../stores/hourReport";
import {Row,Col,Image,Card,Button,Form} from "react-bootstrap";

function SlackForm({text}){
    const dispatch = useDispatch();
  
      const [values, setValues] = useState({
        text : ""
      });
    console.log(text)
      console.log("success")
      return (
        <Card className="text-left">
          <Card.Header>HRLog</Card.Header>
          <Card.Body>
            <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>SlackのチャンネルIDを入力</Form.Label>
            <Form.Control type="text" name = "text" placeholder="channel_id" onChange={handleInputChange}/>
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={() => dispatch(fetchAsync(values.text))} >
            Start
            </Button>
            </Form>
          </Card.Body>
        </Card>
      );
  
    function handleInputChange(e) {
      const target = e.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
      setValues({ ...values, [name]: value });
      console.log(value)
    }
    
}
export default SlackForm;