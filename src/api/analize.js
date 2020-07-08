const API_URL = 'http://localhost:8000/api/userlist?channel=';

export default {
    slack(channel) {
    const query = API_URL + channel
    console.log(query)
	return fetch(query).then(response => response.json());
	//return "../image/test.png"
    }
}