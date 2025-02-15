const User = require("../models/user")
const {v4 : uuidv4} = require("uuid")
const {getUser,setUser} = require("../service/auth")
 
async function handleUserSignup(req,res)
{
    const {name , email , password} = req.body;
    const user =await User.create({
        name, email ,password
    })
    return res.redirect("/");
}

async function handleUserLogin(req,res)
{
    const {email , password} = req.body;
    const user = await User.findOne({email , password});
    if(!user) return res.render("login" , {error : "Invalid username or password"});

    // Part of stateful authentication
    // const sessionId = uuidv4();
    // setUser(sessionId,user);
    // res.cookie("uid" , sessionId);

    const token = setUser(user);
    // return res.json({token});
    res.cookie("uid" , token);
    // res.cookie("uid" , token , {
    //     domain : "www.google.com"
    // }); // if the domain name is something differnent from your website , cookies won't be sent to your website's server
    return res.redirect("/");
}

module.exports = {handleUserSignup , handleUserLogin
};