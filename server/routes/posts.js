import Express from "express";

const router = Express.Router();

router.get('/', (req, res) => {
    res.send('THIS WORKS!');
})


export default router;