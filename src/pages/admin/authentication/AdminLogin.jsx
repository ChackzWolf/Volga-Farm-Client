import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

// Import missing dependencies
// import Loader from "../../components/Loader"; // Adjust the path if needed
// import EyeCheckbox from "../../components/EyeCheckbox"; // Adjust the path if needed
// import { setCookie } from "../../utils/cookieUtils"; // Adjust the path if needed
import { adminEndpoints } from "../../../constraints/admin.endpoints";
import { ROUTES } from "../../../routes/routes";
import { setCookie } from "../../../utils/cookieManager";

function LoginAdmin() {
    const navigate = useNavigate();
    const location = useLocation();

    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [credentialVisible, setCredentialVisible] = useState(false);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        if (queryParams.get("message") === "passwordUpdated") {
            toast.success("Your password has been updated. Please login with your new password.");
        }
    }, [location]);

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters long")
            .max(20, "Password cannot be longer than 20 characters")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[@$!%*?&#]/, "Password must contain at least one special character"),
    });

    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            setIsLoading(true);
            const response = await axios.post(adminEndpoints.login, values);
            console.log(response.data);
            const { success,  token, message } = response.data;
            
            if (success) {
                setCookie("adminAccessToken", token, 1);
                navigate(ROUTES.admin.Dashboard);
            } else {
                setMessage(message);
            }
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message || "Login failed! Please try again.");
            } else {
                setMessage("Something went wrong. Please check your network.");
            }
        } finally {
            setSubmitting(false);
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* {isLoading && <Loader />} */}
            <div className="flex flex-col md:flex-row min-h-screen h-full">
                {/* Credential Modal */}
                {credentialVisible && (
                    <div className="fixed inset-0 flex justify-center items-center z-40 bg-black bg-opacity-50">
                        <motion.div
                            initial={{ opacity: 0, y: -150 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-5 rounded-lg shadow-lg z-50"
                        >
                            <div className="flex flex-col items-center gap-3">
                                <h1 className="text-3xl font-bold text-primary">Credential</h1>
                                <p className="text-lg text-primary">Email: admin@gmail.com</p>
                                <p className="text-lg text-primary">Password: Jacks@123</p>
                                <button
                                    className="p-2 bg-primary text-white rounded"
                                    onClick={() => setCredentialVisible(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Login Form */}
                <div className="bg-[#FCF6FF] p-16 shadow-lg w-full md:w-1/2 rounded-lg flex flex-col justify-center">
                    <h2 className="text-3xl mb-5 mt-20 text-center font-bold">Admin Login</h2>
                    {message && <h1 className="text-red-800 text-center">{message}</h1>}

                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ isSubmitting }) => (
                            <Form>
                                <motion.div
                                    initial={{ opacity: 0, x: -150 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="justify-center mb-20 px-4 sm:px-12 lg:px-28"
                                >
                                    {/* Email Field */}
                                    <p className="text-base mb-2 font-normal">Email</p>
                                    <div className="mb-4 flex flex-col items-center">
                                        <Field
                                            type="email"
                                            name="email"
                                            className="w-full h-10 p-2 px-4 shadow-lg rounded-lg hover:border-[#DDB3FF] focus:border-[#DDB3FF] focus-visible:outline-none"
                                            placeholder="Enter your email here."
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                                    </div>

                                    {/* Password Field */}
                                    <div className="flex w-full justify-between">
                                        <p className="text-base mb-2 font-normal">Password</p>
                                        <NavLink to="/admin/auth/forgot-password" className="text-sky-700 text-base">
                                            Forgot?
                                        </NavLink>
                                    </div>

                                    <div className="mb-6 relative">
                                        <Field
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            className="w-full h-10 p-2 px-4 shadow-lg rounded-lg hover:border-[#DDB3FF] focus:border-[#DDB3FF] focus-visible:outline-none"
                                            placeholder="Enter your password here."
                                        />
                                        {/* <EyeCheckbox onClick={() => setShowPassword(!showPassword)} /> */}
                                        <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                                    </div>

                                    {/* Login Button */}
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-3 text-white shadow-lg rounded-lg font-semibold bg-[#7C24F0] transition-all"
                                        disabled={isSubmitting}
                                    >
                                        Login
                                    </button>

                                    {/* Links */}
                                    <div className="flex justify-between mt-4">
             
                                        <button
                                            className="text-sm text-lavender hover:text-accent underline"
                                            onClick={() => setCredentialVisible(true)}
                                        >
                                            Don't click here
                                        </button>
                                    </div>
                                </motion.div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default LoginAdmin;
