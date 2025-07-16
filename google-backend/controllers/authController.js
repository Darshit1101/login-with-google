import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';

const client = new OAuth2Client();

export const googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const { sub, email, name, picture } = ticket.getPayload();

    let user = await User.findOne({ googleId: sub });

    if (!user) {
      user = await User.create({ googleId: sub, email, name, picture });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token', error: err.message });
  }
};

export const logout = async (req, res) => {
  try {
    // For JWT-based logout, you would typically blacklist the token
    // For now, we'll just send a success response
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Logout failed', error: err.message });
  }
};
