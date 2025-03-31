import { useState } from "react";
import InputBox from "../components/inputBox.component";
import { Link } from "react-router-dom";

const UserAuthForm = ({ type }) => {

    let [selectedRole, setSelectedRole] = useState("user");

    const handleSelectRole = (e) => {
        e.preventDefault();
        setSelectedRole(e.target.value);
    }

    return (
        <section className="py-4 px-[5vw] md:px-[7vw] lg:px-[10vw] min-h-screen flex items-center justify-center">
            <form className="w-[80%] max-w-[400px]">
                <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                    {type === 'login' ? 'Welcome back' : 'Join us today'}
                </h1>

                {
                    type !== "login" && (
                        <>
                            <InputBox
                                name="fullname"
                                type="text"
                                placeholder="Full Name"
                                icon="fi-rr-user"
                            />

                            <div className="relative w-[100%] mb-4">
                                <select name="role" className="input-box" onChange={handleSelectRole}>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>

                                <i className={"fi fi-rr-" + (selectedRole === "admin" ? "admin" : "user") + " input-icon"}></i>
                            </div>

                            {
                                selectedRole === 'admin' && (
                                    <InputBox
                                        type="password"
                                        name="adminKey"
                                        placeholder="Admin Key"
                                        icon="fi-rr-key"
                                    />
                                )
                            }
                        </>
                    )
                }

                <InputBox
                    name="mobile"
                    type="number"
                    placeholder="Mobile Number (10 digits)"
                    icon="fi-rr-smartphone"
                />

                <InputBox
                    name="password"
                    type="password"
                    placeholder="Password"
                    icon="fi-rr-key"
                />

                <button
                    className="btn-dark center mt-14"
                    type="submit"
                >
                    {type === "login" ? "Login" : "Register"}
                </button>

                <p className="mt-6 text-gray-700 text-xl text-center">
                    {
                        type === "login" ? (
                            <>
                                Don't have an account?
                                <Link to='/register' className="text-black text-xl ml-1 underline">
                                    Join us today
                                </Link>
                            </>
                        ) : (
                            <>
                                Already a member?
                                <Link to='/' className="text-black text-xl ml-1 underline">
                                    Sign in here
                                </Link>
                            </>
                        )
                    }
                </p>
            </form>
        </section>
    );
}

export default UserAuthForm;
