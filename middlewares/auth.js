const {getUser} = require("../service/auth")

async function restrictToLoggedUserOnly(req,res,next)
{
    const id = req.cookies?.uid;
    // const id = req.headers["Authorization"]
    if ( !id) return res.redirect("/login");
    // const token = id.split("Bearer ")[1];
    const user =  getUser(id)
    // const user = await getUser(token)
    if(!user) return res.redirect("/login");
    req.user = user;
    next();
}

async function checkAuth(req,res,next)
{
    // console.log(req.headers);
    // const id = req.headers["authorization"] // swagger.io bearer authentication
    const id = req.cookies?.uid;
    // const token = id.split("Bearer ")[1];
    const user = await getUser(id)
    // const user =  getUser(token)
    req.user = user;
    next();
}

module.exports = {restrictToLoggedUserOnly , checkAuth};