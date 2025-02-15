// Part of stateful authentication
// const setUserToIdMap = new Map();

// function setUser(uid , user)
// {
//     setUserToIdMap.set(uid , user);
// }

// function getUser(uid)
// {
//     return setUserToIdMap.get(uid);
// }


// Part of stateless authentication
const jwt = require("jsonwebtoken");
const secret = "QWE@ASD@ZXC@123" // this secret key needs to be kept secret as if it is accessible then the data can be changed or we can say can be hacked.

function setUser(user)
{
    return jwt.sign({
        _id : user._id,
        email : user.email ,
    } , secret);
}

function getUser(token)
{
    if(!token) return null;
    try {
        return jwt.verify(token , secret);
    } catch (error) {
        return null;
    }
}

module.exports = {setUser , getUser};