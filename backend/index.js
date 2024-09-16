import express, { json } from 'express';
import axios from 'axios';
import cors from 'cors'; 

const app = express();
const port = 3000;

app.use(cors()); 
app.use(json());

app.get('/', (req, res) => {
  res.send('Welcome to the Random Jokes API!');
});

app.get('/api/jokes/random', async (req, res) => {
  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/jokes', {
      headers: {
        'X-Api-Key': 'uf/5LKns52NJhEC5iEUjvw==Ka5URptJ49dKRvBe',
      },
    });

   
    const joke = response.data[0];
    res.json({ joke: joke.joke });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
