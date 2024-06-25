import Form from "../models/form.model.js"
import Carrera from "../models/carrera.model.js"
/*
export async function createForm(req, res) {
    try {
        const data =req.body;

        const newForm = new Form(data);

        const formSaved = await newForm.save();
        res.status(201).json({
            message: "Formulario creado correctamente",
            data: formSaved
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

*/
export async function getForms(req,res) {
    try {
        const dataForms = await Form.find();

        if(!dataForms){
            res.status(404).json({
                message: "no se encontro ningun formulario"
            });
        }

        res.status(200).json({
            message: "lista de formularios",
            data: dataForms
        });

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export async function getForm(req,res){
    try {
        const id = req.params.id;

        const form = await form.finById(id);

        if(!form){
            res.status(400).json({
                message: "formulario no encontrado",
                data: null,
            })
        }

        res.status(200).json({
            message: "formulario encontrado",
            data: form
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export async function updateForm(req,res){
    try {
        const id =req.params.id;
        const form = req.body;

        const formMod = await Form.findByIdAndUpdate(id,form,{new: true});

        if(!formMod){
            res.status(404).json({
                message: "formulario no encontrado",
                data: null,
            })
            return
        }

        res.status(200).json({
            message: "formulario actulizado correctamente",
            data: formMod
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export async function deleteForm(req,res){
    const id = req.params.id;
    try {
        
        
        const form = await Form.findByIdAndDelete(id);
        
        if(!form){
            return res.status(404).json({
                message: "formulario no encontrado",
                data:null
            });
        }

        res.status(200).json({
            message: "formulario eliminado correctamente",
            data: form
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export async function createCarrera(req, res) {
    try {
        const { carrera } = req.body;

        if (!carrera) {
            return res.status(400).json({ message: "El nombre de la carrera es obligatorio" });
        }

        const newCarrera = new Carrera({ carrera });
        const carreraSaved = await newCarrera.save();

        res.status(201).json({
            message: "Carrera creada correctamente",
            data: carreraSaved
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function createForm(req, res) {
    try {
        const { carreraNombre, ...formData } = req.body;

        if (!carreraNombre) {
            return res.status(400).json({ message: "El nombre de la carrera es obligatorio" });
        }

        // Buscar la carrera
        const carrera = await Carrera.findOne({ carrera: carreraNombre });

        if (!carrera) {
            return res.status(404).json({ message: "La carrera especificada no existe" });
        }

        // Crear el formulario
        const newForm = new Form({
            ...formData,
            carrera: carrera._id
        });

        const formSaved = await newForm.save();

        res.status(201).json({
            message: "Formulario creado correctamente",
            data: formSaved
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

