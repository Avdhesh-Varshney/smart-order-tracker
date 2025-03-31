import jwt from "jsonwebtoken";

export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
export const mobileRegex = /^[6-9]\d{9}$/;

export const generateToken = (user) => {

    const access_token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET_ACCESS_KEY, { expiresIn: "30d" });
    return {
        access_token,
        profile_img: user.personal_info.profile_img,
        fullname: user.personal_info.fullname,
        mobile: user.personal_info.mobile,
        role: user.role,
    }
}