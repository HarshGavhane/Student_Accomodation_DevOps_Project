import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

// Register function
export const register = async (req, res, next) => {
  try {
    const { username, email, password, country, city, phone } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return next(createError(400, "Username or email already exists"));
    }

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Create a new user object
    const newUser = new User({
      username,
      email,
      password: hash,
      country,
      city,
      phone,
    });

    // Save the user to the database
    await newUser.save();

    // Send success response with a JSON object
    res.status(201).json({ message: "User has been created!" });
  } catch (err) {
    next(err); // Pass error to the error handler
  }
};


// Login function
export const login = async (req, res, next) => {
  try {
    // Change to search by email (if you're using email for login)
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!!"));

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) return next(createError(400, "Wrong password or username!!"));

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);

    const { password, isAdmin, ...otherDetails } = user._doc; // Exclude sensitive data
    res
      .cookie("access_token", token, {
        httpOnly: true, // Ensure the cookie is not accessible via JavaScript
      })
      .status(200)
      .json({ details:{...otherDetails}, isAdmin }); // Send user details excluding password
  } catch (err) {
    next(err);
  }
};
