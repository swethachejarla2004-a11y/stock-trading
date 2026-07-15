const axios = require('axios');

axios.post('http://localhost:3002/signup', {
    email: "testcli@test.com",
    username: "testcli",
    password: "password123"
})
.then(res => console.log("Success:", res.data))
.catch(err => console.error("Error:", err.message, err.response ? err.response.data : "No response"));
