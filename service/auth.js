const setUserToIdMap = new Map();

function setUser(uid , user)
{
    setUserToIdMap.set(uid , user);
}

function getUser(uid)
{
    return setUserToIdMap.get(uid);
}

module.exports = {setUser , getUser};