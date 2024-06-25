import { Router } from "express";
import { createForm , getForm, getForms ,updateForm , deleteForm,createCarrera} from "../controllers/crud.controller.js";

const router = Router();

//ruta para crear un formulario
router.post("/",createForm);

//ruta para obtener algo un formulario por el id
router.get("/1/:id",getForm);

//ruta para obtener todos los formularios
router.get("/",getForms);

//ruta para modificar un formulario
router.put("/:id",updateForm);

//ruta para borrar un formulario
router.delete("/:id",deleteForm);

router.post("/carrera",createCarrera);
export default router;
