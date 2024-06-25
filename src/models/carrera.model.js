import mongoose from "mongoose";

const CarreraSchema = new mongoose.Schema({
    carrera: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Carrera", CarreraSchema);