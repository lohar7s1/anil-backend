import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  console.log(" Register route hit");
  return res.status(200).json({
    message: `Hello ${req.body?.name}, your number ${req.body?.phone}`
  });
});

export { registerUser };
