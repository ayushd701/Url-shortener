const {getUser} = require("../service/auth")

async function restrictToLoggedUserOnly(req,res,next)
{
    const id = req.cookies?.uid;
    if ( !id) return res.redirect("/login");
    const user = await getUser(id)
    if(!user) return res.redirect("/login");
    req.user = user;
    next();
}

async function checkAuth(req,res,next)
{
    const id = req.cookies?.uid;
    const user = await getUser(id)
    req.user = user;
    next();
}

module.exports = {restrictToLoggedUserOnly , checkAuth};