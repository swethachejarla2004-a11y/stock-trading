const axios = require('axios');

const rnd = Math.floor(Math.random() * 1000);
const email = `testcli${rnd}@test.com`;
const username = `testcli${rnd}`;

console.log("Testing Signup with:", email);

axios.post('http://localhost:3002/signup', {
    email: email,
    username: username,
    password: "password123"
}, { withCredentials: true })
.then(res => console.log("Success:", res.data))
.catch(err => {
    if(err.response) {
        console.log("SERVER_ERROR_DETAILS:", err.response.data);
    } else {
        console.log("Network Error:", err.message);
    }
});
