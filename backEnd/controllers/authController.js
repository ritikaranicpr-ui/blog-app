import * as authService from "../services/authService.js";

// ─── @desc    Register User
// ─── @route   POST /api/auth/register
// ─── @access  Public
export const register = async (req, res) => {
  const result = await authService.registerUser(req.body);
  res.status(201).json({ success: true, message: "Account created successfully!", ...result });
};

// ─── @desc    Login User
// ─── @route   POST /api/auth/login
// ─── @access  Public
export const login = async (req, res) => {
  const result = await authService.loginUser(req.body);
  res.json({ success: true, message: "Login successful!", ...result });
};

// ─── @desc    Get Logged In User
// ─── @route   GET /api/auth/me
// ─── @access  Private
export const getMe = async (req, res) => {
  const user = await authService.getCurrentUser(req.user._id);
  res.json({ success: true, user });
};

// ─── @desc    Update Password
// ─── @route   PUT /api/auth/update-password
// ─── @access  Private
export const updatePassword = async (req, res) => {
  await authService.updateUserPassword(req.user._id, req.body);
  res.json({ success: true, message: "Password updated successfully" });
};
