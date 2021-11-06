const Member = require("../models/Member");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Login

//Register
const register = async (req, res) => {
  try {
    //Get user input
    const {
      firstName,
      lastName,
      email,
      password,
      address,
      city,
      postalCode,
      tel,
    } = req.body;

    //Validate user input

    if (!req.body) {
      res.status(400).send("All input is required");
    }

    //Check if user already exist
    //Va lidate if user exist in our database
    const oldMember = await Member.findOne({ email });

    if (oldMember) {
      return res.status(409).send("User already exist. Please login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    //create user in our database
    const member = await Member.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: encryptedPassword,
      address,
      city,
      postalCode,
      tel,
    });

    //Create token
    const token = jwt.sign(
      { memberId: member._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    //Save user token
    member.token = token;

    res.status(201).json(member);
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    //Get user input
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const member = await Member.findOne({ email });

    if (member && (await bcrypt.compare(password, member.password))) {
      //Create token
      const token = jwt.sign(
        { memberId: member._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      //save user token
      member.token = token;

      res.status(200).json(member);
      return;
    }
     res.status(400).send("Invalid Credentials")
     return;
  } catch (err) {
    console.log(err);
  }
  res.status(200).send("Login Success");
};

  const welcome = async (req,res) =>{
    res.status(200).send('welcome')
  }

module.exports = {
  register,
  login,
  welcome
};
