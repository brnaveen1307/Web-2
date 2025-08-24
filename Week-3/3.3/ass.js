const zod = require('zod')
const jwt = require('jsonwebtoken')
const jwtPassword = "secret"

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJWT(username, password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }

    const signature = jwt.sign({
        username
    }, jwtPassword)

    return signature;

}

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

function DecodeJWt(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }else{
        return false;
    }
}

const ans = signJWT("naveen@gmail.com", "naen")
console.log(ans)

const a = VerifyJWt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdmVlbkBnbWFpbC5jb20iLCJpYXQiOjE3NTYwNTU5Mjh9.YvQqPvK4-mh4jhNkOLDN8NRSeX00O1iomrKyrWwIBKc", 'secret')
console.log(a)

console.log(DecodeJWt(""));