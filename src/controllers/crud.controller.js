import Form from "../models/form.model.js"

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
    try {
        const id = req.params.id;
        
        const form = await Form.finByIdAndDelete(id);
        
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

