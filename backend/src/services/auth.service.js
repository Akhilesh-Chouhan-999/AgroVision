import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import generateToken from '../utils/jwt.utils.js';
import AppError from '../errors/app.error.js';

export const registerUser = async (userData) => {

    const { name, phone, password } = userData;

    if (!name || !phone || !password) {
        throw new AppError('Name , phone and password are required', 400);
    }

    const existingUser = await User
                                  .findOne({
                                     phone
                                    });

    if (existingUser) {
        throw new AppError('User Already Exists ', 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let user;

    try {
        user = await User
                        .create({ 
                            name, 
                            phone, 
                            password : hashedPassword
                         });
    } 
    catch (err) {
        if (err.code === 11000) {
            throw new AppError('User already exists', 409);
        }
        throw err;
    }

    const token = generateToken({
        id: user._id.toString(),
        role: user.role
    });

    return {
        user: {
            id: user._id,
            name: user.name,
            phone: user.phone,
            password , 
            role: user.role
        },
        token
    }

};

export const loginUser = async ({ phone, password }) => {

    const user = await User
                          .findOne({ phone })
                          .select('+password');


    if (!user) {
        throw new AppError('Invalid Credentials', 401);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new AppError('Invalid Credentials', 401);
    }

    const token = generateToken({
        id: user._id.toString(),
        role: user.role
    });

      return {
        user: {
            id: user._id,
            name: user.name,
            phone: user.phone,
            role: user.role
        },
        token
        }
        
}

