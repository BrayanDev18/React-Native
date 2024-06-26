import { Router } from "express";
import {
  login,
  logout,
  profile,
  register
} from "../controllers/auth.controller.js";
import { authRequire } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.schema.js";
import { LoginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router()

router.post('/login', validateSchema(LoginSchema), login)
router.post('/register', validateSchema(registerSchema), register)
router.post('/logout', logout)
router.get('/profile', authRequire, profile)

export default router