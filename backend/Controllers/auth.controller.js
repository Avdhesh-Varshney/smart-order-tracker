import bcrypt from 'bcrypt';

import User from '../Models/user.model.js';
import { mobileRegex, passwordRegex } from '../utils/helper.js';

export const register = async (req, res) => {
    let { fullname, role, mobile, password } = req.body;

    if (fullname.length < 3) {
        return res.status(400).json({ error: "Fullname must be at least 3 characters long" });
    }

    if (mobile.length !== 10) {
        return res.status(400).json({ error: "Mobile number must be 10 digits long" });
    }

    if (!mobileRegex.test(mobile)) {
        return res.status(400).json({ error: "Enter a valid mobile number" });
    }

    if (!passwordRegex.test(password)) {
        return res.status(400).json({ error: "Password must be 8 to 20 characters long and contain at least one numeric digit, one uppercase and one lowercase letter" });
    }

    if (role === "admin") {
        role = true;
    } else {
        role = false;
    }

    try {
        const hashed_password = await bcrypt.hash(password, 10);

        const user = new User({
            personal_info: {
                fullname,
                mobile,
                password: hashed_password
            },
            role,
        });

        const savedUser = await user.save();
        return res.status(201).json(generateToken(savedUser));
    } catch (error) {
        if (error.code === 11000) return res.status(409).json({ error: "User with this number already exists" });
        return res.status(500).json({ error: error.message });
    }
}