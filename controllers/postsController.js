import { posts } from "../data/postsData.js";


/* 
FUNZIONE CHE MOSTRA LA LISTA COMPLETA DEI POSTS
COME PAGINA PRINCIPALE
metodo : 'GET'   http://localhost:3000/posts
*/
function index(request, response) {
    response.json(posts)
};

/* 
FUNZIONE CHE MOSTRA IL POST CHE ABBIAMO CERCATO 
E PASSATO TRAMITE PARAMETRO NELL'URL
metodo : 'GET'  http://localhost:3000/posts/1
*/
function show(request, response) {
    const { id } = request.params;

    const realId = Number(id.trim());

    if (isNaN(realId) || realId <= 0) {
        response.status(400)
            .json({
                errore: '"id" non corretto o minore di 0',
                risultato: null
            });
        return;
    }

    const postFound = posts.find(post => {
        return post.id === realId;
    });

    if (postFound === undefined) {
        response.json({
            errore: 'post non trovato',
            risultato: null
        })
    }

    response.json({
        errore: null,
        risultato: postFound
    });
}

/* 
FUNZIONE CHE MOSTRA PERMETTE DI AGGIUNGERE UN POST NEL NOSTRO
ARRAY DI POSTS
metodo : 'POST'  http://localhost:3000/posts
*/
function store(request, response) {
    response.json({
        messaggio: 'hai inviato una richiesta di creazione'
    })
}

function update(request, response) {
    response.json({
        messaggio: 'hai inviato una richiesta di modificare interamente un elemento'
    })
}

function modify(request, response) {
    response.json({
        messaggio: 'hai inviato una richiesta di modificare parzialmente un elemento'
    })
}

/* 
FUNZIONE CHE MOSTRA PERMETTE DI ELIMINARE UN POST NEL NOSTRO
ARRAY DI POSTS
metodo : 'DELETE'  http://localhost:3000/posts
*/
function destroy(request, response) {
    const {id} = request.params;
    response.json({
        messaggio: `hai inviato una richiesta per distruggere il post: ${id}`
    })
}

export {
    index,
    show,
    store,
    update,
    modify,
    destroy,
}