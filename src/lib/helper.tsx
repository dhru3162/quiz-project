import * as Yup from "yup";

export const schema = Yup.object({
    firstname: Yup.string()
        .trim()
        .required("Name is required")
        .max(20, "Venue Name must be 20 characters")
        .min(2, "Venue Name must be at least 2 characters")
        .matches(/^[A-Za-z]+$/i, "Name must contain only alphabets"),

    lastname: Yup.string()
        .trim()
        .required("Name is required")
        .max(20, "Venue Name must be 20 characters")
        .min(2, "Venue Name must be at least 2 characters")
        .matches(/^[A-Za-z]+$/i, "Name must contain only alphabets"),

    email: Yup.string()
        .required("Email is required")
        .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i, "Invalid email"),

    password: Yup.string()
        .required("Password is required")
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number"
        ),

    cpassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref('password')], 'Passwords must match')
        
}).required();
