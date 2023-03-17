import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/users.routes.js';
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    console.log("Home Page");
    res.send("Home Page");
});

const userRouter = router;
app.use('/users', userRouter);

app.listen(PORT , ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})