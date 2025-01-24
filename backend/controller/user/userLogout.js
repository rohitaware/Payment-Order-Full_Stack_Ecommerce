async function userLogout(req,res) {

    try {
        
        // const tokenOption = {
        //     httpOnly : true,
        //     secure : true,
        //     sameSite : 'None'
        // }

        res.clearCookie('token')


        res.json({
            message :'Logout SuccessFully',
            error : false,
            success : true,
            data : []

        })
    } catch (err) {
        res.json({
            message: err.message || err,
            error : true,
            success : false,
        })
    }
    
}


module.exports = userLogout