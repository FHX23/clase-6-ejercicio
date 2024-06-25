import mongoose from "mongoose";
import Carrera from "../models/carrera.model.js";

const formSchema = new mongoose.Schema({
    nombreCompleto: {
        type: String,
        required: true,
    },
    rut: {
        type: String,
        required: true,
        unique: true,
    },
    fechaNacimiento: {
        type: Date,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    carrera: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carrera',
        required: true,
    },
});

export default mongoose.model("Form", formSchema);