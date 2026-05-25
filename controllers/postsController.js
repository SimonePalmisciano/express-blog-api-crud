import { posts } from "../data/postsData.js";

function index(request, response) {
    response.json(posts)
};

function show(request, response) {
    const { id } = request.params;

    const realId = Number(id.trim());

    if (isNaN(realId)) {
        response.status(404)
            .json({
                errore: '"id" non corretto',
                risultato: null
            });
        return;
    }

    if (realId <= 0) {
        response.status(404)
            .json({
                errore: '"id" non corretto è minore di 0',
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