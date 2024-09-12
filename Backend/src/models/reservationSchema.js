import mongoose, { Schema } from "mongoose";
import validator from "validator";

const reservatioSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain 3 character"],
        maxLength: [30, "First name cannot exceeds 30 character"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain 3 character"],
        maxLength: [30, "Last name cannot exceeds 30 character"],
    },
    email: {
        type: String,
        required: true,
        validator: [validator.isEmail, "Provide a valid email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain 10 digits"],
        maxLength: [10, "Phone number must contain 10 digits"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
       type: String,
       required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservatioSchema)