import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync, clear } from "../stores/gif";
import {Form} from "react-bootstrap";


function Diary() {
    const imageUrl = useSelector(state => state.gif.url);
    const loading = useSelector(state => state.gif.loading);
    const error = useSelector(state => state.gif.error);

    const dispatch = useDispatch();

    return (
    <Form>
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>本日の目標</Form.Label>
    <Form.Control type="text" placeholder="本日の目標" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>本日の所感</Form.Label>
    <Form.Control as="textarea" rows="3" />
    </Form.Group>
    </Form>
	    );
}

function Gif({ imageUrl, loading, error }) {
    if (error) {
	return <p className="notification is-danger">Error!!</p>;
    }

    if (loading) {
	return <p className="notification is-info">Loading...</p>;
    }

    if (!imageUrl) {
	return <p className="notification">Welcome!</p>;
    }

    return (
    <figure>
    <img src={imageUrl} alt="" />
      <figcaption>
        GIFs by <a href="https://giphy.com/">GIPHY</a>
      </figcaption>
    </figure>
	    );
}

export default Diary;
