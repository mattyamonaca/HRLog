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
            <Card className="text-left" bg='light' >
              <Card.Header as="h4" >HRLog</Card.Header>
              <Card.Body>
                <Card.Title>タイトル</Card.Title>
                <Card.Text>
                  <p>HRLogへようこそ！</p>
                  <p>XXXXXXXXXXXXXXX説明文XXXXXXXXXXXXXXXXXXXX</p>
                </Card.Text>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>SlackのチャンネルIDを入力</Form.Label>
                <Form.Control type="text" name = "text" placeholder="channel_id (例：C12345ABCDE)" onChange={handleInputChange}/>
                </Form.Group>
                
                <Button variant="primary" type="submit" size="lg" block onClick={() => dispatch(fetchAsync(values.text))} >
                　　解析を始める　　
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