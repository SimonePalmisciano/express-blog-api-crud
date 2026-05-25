import express from 'express';
import { posts } from './data/postsData.js';
import postsRouter from './routers/posts.js';

const url = process.env.SERVER_URL;
const port = process.env.SERVER_PORT || 3000;

const app = express();

app.use(express.static('public'));

app.use('/posts', postsRouter);

app.get("/", (request, response) => {
    response.json({
        messaggio: 'va tutto ok nel server'
    });
});

app.get("/bacheca", (request, response) => {
    response.json(posts.map(post => {
        return {
            ...post,
            img: `http://${url}:${port}/${post.img}`,
        }
    }));
})

app.listen(port, (error) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log('server in ascolto a questa porta: ', port);

});