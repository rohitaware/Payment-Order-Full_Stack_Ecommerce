const userModel = require("../../models/userModel");

async function updateUser(req, res) {
  try {

    const sessionUser = req.userId
    const { userId, name, email, role } = req.body;

    // Create payload dynamically based on provided fields
    const payload = {
      ...(name && { name : name }),
      ...(email && { email : email }),
      ...(role && { role : role }),
    };
    

    const user = await userModel.findById(sessionUser)

    console.log('user.role',user.role)

    // Update the user by ID
    const updatedUser = await userModel.findByIdAndUpdate(userId, payload)


    res.json({
      data: updatedUser,
      message: "User Updated",
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = updateUser;
