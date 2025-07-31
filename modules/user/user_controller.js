import User from './user_model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
  try {
    const { user_name, user_email, user_password, user_role } = req.body;
    const hash = await bcrypt.hash(user_password, 10);
    const user = await User.create({ user_name, user_email, user_password :hash, user_role });
    res.status(201).json(user);
  } catch (err) {
    console.error('Error during user registration:', err);
    res.status(400).json({ error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { user_email, user_password } = req.body;

    const user = await User.findOne({ where: { user_email } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(user_password, user.user_password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user.user_id, role: user.user_role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.user_name,
        role: user.user_role
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
