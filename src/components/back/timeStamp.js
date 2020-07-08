import React ,{useState }from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync, clear, postReport } from "../stores/hourReport";
//import { fetchAsync, clear } from "../stores/gif";
import {Card,Button,Form} from "react-bootstrap";

function TimeStamp() {
    const text = useSelector(state => state.hourReport.text);
    const loading = useSelector(state => state.hourReport.loading);
    const error = useSelector(state => state.hourReport.error);


    const [values, setValues] = useState({
      text : ""
    });

    return (
    <div>
      <h1 className="title">HRLog</h1>
      <TimeStampForm {...{ text, loading,error }} />

    </div>
	    );


function handleInputChange(e) {
  const target = e.target;
  const value = target.type === "checkbox" ? target.checked : target.value;
  const name = target.name;
  setValues({ ...values, [name]: value });
  console.log(value)
}

}

function handleSubmit(event) {
  console.log(event.target.elements.formBasicPassword.value)
}




function TimeStampForm({text,loading,error}){
  const dispatch = useDispatch();

    const [values, setValues] = useState({
      text : ""
    });
  console.log(text)
  if (error) {
    return <p className="notification is-danger">Error!!</p>;
  }
  if (loading) {
    return <p className="notification is-info">Loading...</p>;
      }
  if (!text) {
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
  }

  return (
    <h1>{text}</h1>
  );

  function handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
    console.log(value)
  }
  
}

export default TimeStamp;
