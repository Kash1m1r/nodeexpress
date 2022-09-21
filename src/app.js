import express from "express";
import db from "../src/config/dbConnect.js"
import livros from "./models/Livro.js"

db.on("error", console.log.bind(console, 'Erro de Conexão'));
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso');
})

const app = express();
app.use(express.json());

//const livros = [
//    {id: 1, "titulo": "Senhor dos Aneis"},
//    {id: 2, "titulo": "O hobbit"}
//]

app.get('/', (req, res) => {
    res.status(200).send('Curso');
})


app.post('/livros', (req,res) => {
    livros.push(req.body);
    res.status(201).send('Livro Cadastrado');
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app