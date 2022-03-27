import { Router } from "express";

const router = Router();

router.get('/', (req, res, next) =>{
    res.json({name : 'sameer'})
});

export default router;