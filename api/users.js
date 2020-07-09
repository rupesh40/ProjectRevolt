const { Router } = require("express");
bodyParser = require("body-parser").json();
const catchAsync = require("./../utilities/catchAsync");
const AppError = require("./../utilities/appError");

const UserModel = require("../models/userModel.js");

const {
  signup,
  login,
  protect,
  forgetPassword,
  resetPassword,
  updatePassword,
} = require("./../services/authService.js");

const router = Router();

//signup the user
router.post("/signup", bodyParser, signup);

//sign's in the user
router.post("/login", bodyParser, login);

//forget password
router.post("/forget-Password", bodyParser, forgetPassword);

//reset password
router.patch("/reset-Password/:token", bodyParser, resetPassword);

//update the password
router.patch("/updateMyPassword", bodyParser, protect, updatePassword);

// sends all users from db
router.get(
  "/",
  protect,
  catchAsync(async (req, res, next) => {
    const users = await UserModel.find();
    res.json(users);
  })
);

//adds a new user to the db
router.post(
  "/",
  bodyParser,
  catchAsync(async (req, res, next) => {
    const user = new UserModel(req.body);
    const createdUser = await user.save();
    res.json(createdUser);
  })
);

//task 1.1 / updates the users data to db
router.patch(
  "/update-user/:id",
  bodyParser,
  catchAsync(async (req, res, next) => {
    const user1 = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        user1,
      },
    });
  })
);
// task 1.2 / delete the user from db

router.delete(
  "/delete-user/:id",
  catchAsync(async (req, res, next) => {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  })
);

//task 1.3 / find by id
router.get(
  "/:id",
  catchAsync(async (req, res, next) => {
    const users = await UserModel.findById(req.params.id);

    if (!users) {
      return next(new AppError("No user found", 404));
    }
    res.status(200).json({
      status: "success",
      data: { users },
    });
  })
);

module.exports = router;
