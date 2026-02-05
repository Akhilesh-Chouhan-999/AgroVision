import jwt from 'jsonwebtoken';
import AppError from '../errors/app.error.js';

const protect = (req, res, next) => {
 
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  }


  if (!token) {
    return next(new AppError('Authentication required', 401));
  }

  if (!process.env.JWT_SECRET_KEY) {
    return next(new AppError('JWT secret not configured', 500));
  }

  try {
    const decoded = jwt
                      .verify(
                        token,
                        process.env.JWT_SECRET_KEY
                      );

    req.user = decoded;

    next();

  }

  catch (error) {
    return next(new AppError('Invalid or expired token', 401));
  }
};

export default protect;
