import express from 'express';

const app = express();

const PORT = 8000;

app.get('/', (req: express.Request, res: express.Response) => {
	res.send('Welcome to the Physics Simulation Server.');
});

app.get('/physics', (req: express.Request, res: express.Response) => {
	
});

app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}`);
});