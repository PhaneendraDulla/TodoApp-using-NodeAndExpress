import { Router } from "express";
import { createTodo } from "../Controllers/todos";

//const express = require('express');
//const Router = express.Router;

const router = Router();

router.post("/", createTodo);

router.get("/");

router.patch("/:id");

router.delete("/:id");

export default router;
