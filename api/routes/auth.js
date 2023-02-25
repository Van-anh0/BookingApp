import express from "express"

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, this is auth endpoint.")
})

router.get("/design", (req, res) => {
    res.send("Hello, this is auth design endpoint.")
})

export default router