const { default: userModel } = require("../models/User");
const bcrypt = require("bcrypt");

const SignupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!username || !email | !!password)
      res.status(400).json({
        message: "Must provide all the filed",
      });

    if (password.length < 6)
      res.status(400).json({ message: "Small password" });

    const user = await userModel.findOne({
      email,
    });

    if (user)
      res.status(400).json({
        message: "User already exist",
      });
    else {
      const hashedPassword = bcrypt.hash(password, 10);

      const newUser = await userModel.create({
        email,
        username,
        password: hashedPassword,
      });

      res.status(201).json({
        message: "Account created successfully",
        username,
      });
    }
  } catch (e) {
    console.log(e);
    res.json({
      message: "Error in Signup controller",
    });
  }
};

const LoginController = () => {
  try {
  } catch (e) {
    console.log(e);
    res.json({ message: "Error in Login controller" });
  }
};

module.exports = {
  SignupController,
  LoginController,
};
