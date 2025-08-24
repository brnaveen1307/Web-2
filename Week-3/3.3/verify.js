const jwt = require('jsonwebtoken')
const jwtPassword = "secret"

function VerifyJWt(token){
    let ans = true;

    try{
        const verified = jwt.verify(token, jwtPassword)
    }
    
    catch(e){
        ans = false;
    }

    return ans;
}

const ans = VerifyJWt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdmVlbkBnbWFpbC5jb20iLCJpYXQiOjE3NTYwNTU5Mjh9.YvQqPvK4-mh4jhNkOLDN8NRSeX00O1iomrKyrWwIBKc", 'secret')
console.log(ans)