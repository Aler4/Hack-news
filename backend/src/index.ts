import express from 'express';
import routers from '../routes';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3010;

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.get('/', (req,res) => {
    res.send('data')
})

app.use('/api/', routers);


app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));
