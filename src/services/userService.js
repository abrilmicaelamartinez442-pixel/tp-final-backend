const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (data) => {
  return await User.create(data);
};

const loginUser = async (email, contrasena) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Credenciales inválidas');

  const isMatch = await bcrypt.compare(contrasena, user.contrasena);
  if (!isMatch) throw new Error('Credenciales inválidas');

  // Generar JWT
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { user: { id: user._id, nombre: user.nombre, email: user.email }, token };
};

module.exports = {
  registerUser,
  loginUser
};