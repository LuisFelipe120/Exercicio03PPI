import express from 'express';
import { get } from 'http';

const host = '0.0.0.0';
const porta = 3000;

const app = express();
var listaFor = [];

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.write(`
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Cadastro</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">

        <link href="style.css" rel="stylesheet">
    </head>
    <body>
    `);
    res.write(`
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">

<a class="navbar-brand" href="#">PPI</a>

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="menu">

<ul class="navbar-nav me-auto">
<li class="nav-item">
<a class="nav-link active" href/listaFornecedores">Fornecedores</a>
</li>

<li class="nav-item">
<a class="nav-link" href="/fornecedor">Cadastro</a>
</li>

<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
Opções
</a>

<ul class="dropdown-menu">
<li><a class="dropdown-item" href="/login">Login</a></li>
<li><a class="dropdown-item" href="/logout">Logout</a></li>
</ul>

</li>
</ul>

<form class="d-flex">
<input class="form-control  me-2" type="search" placeholder="pesquisar">
<button class="btn btn-outline-light">Pesquisar</button>
</form>


</div>
</div>
</nav>

<div class="d-flex w-100 flex-direction-column align-items-center justify-content-center" style="height: 400px">

  <h1>FORMULÁRIO DE CADASTRO DE FORNECEDOR</h1>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
        
        `);
    res.end();
});

app.get("/fornecedor", (requisicao, resposta) => {

    resposta.write(`
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Cadastro</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>

    <body>

    <div class="container mt-5">

    <form method="POST" action="/fornecedor" class="row gy-2 gx-3 align-items-center border p-3">

    <legend><h3>Cadastro de fornecedor</h3></legend>

    <div class="row">
    <label for="cnpj">CNPJ</label>
    <input type="number" class="form-control mb-2" id="cnpj" name="cnpj">
    </div>

    <div class="row">
    <label for="razao">Razão Social ou Nome do Fornecedor</label>
    <input type="text" class="form-control mb-2" id="nome" name="nome">
    </div>
    <div class="row">
    <label for="Nome fantasia">Nome fantasia</label>
    <input type="text" class="form-control mb-2" id="fantasia" name="fantasia">
    </div>
    <div class="row">
    <label for="email">email</label>
    <input type="text" class="form-control mb-2" id="email" name="email">
    </div>
      <div class="row">
    <label for="telefone">telefone</label>
    <input type="text" class="form-control mb-2" id="telefone" name="telefone">
    </div>
    <div class="row">
    <label for="cep">CEP</label>
    <input type="text" class="form-control mb-2" id="cep" name="cep">
    </div>
     <div class="row">
    <label for="endereco">Endereço</label>
    <input type="text" class="form-control mb-2" id="endereco" name="endereco">
    </div>
    <div class="row">
    <label for="cidade">Cidade</label>
    <input type="text" class="form-control mb-2" id="cidade" name="cidade">
    </div>
    <div class="row pb-3">

    <label for="uf">UF</label>

    <select class="form-select" id="uf" name="uf">

       <option selected>Selecione o estado</option>
        <option value="AC">AC</option>
        <option value="AL">AL</option>
        <option value="AP">AP</option>
        <option value="AM">AM</option>
        <option value="BA">BA</option>
        <option value="CE">CE</option>
        <option value="DF">DF</option>
        <option value="ES">ES</option>
        <option value="GO">GO</option>
        <option value="MA">MA</option>
        <option value="MT">MT</option>
        <option value="MS">MS</option>
        <option value="MG">MG</option>
        <option value="PA">PA</option>
        <option value="PB">PB</option>
        <option value="PR">PR</option>
        <option value="PE">PE</option>
        <option value="PI">PI</option>
        <option value="RJ">RJ</option>
        <option value="RN">RN</option>
        <option value="RS">RS</option>
        <option value="RO">RO</option>
        <option value="RR">RR</option>
        <option value="SC">SC</option>
        <option value="SP">SP</option>
        <option value="SE">SE</option>
        <option value="TO">TO</option>

    </select>

    </div>

    <div class="row">
    <button type="submit" class="btn btn-primary">Cadastrar Jogador</button>
    </div>

    </form>
    </div>

    </body>
    </html>
    `);

    resposta.end();
});


app.post("/fornecedor", (requisicao, resposta) => {

    const cnpj = requisicao.body.cnpj;
    const nome = requisicao.body.nome;
    const fantasia = requisicao.body.fantasia;
    const email = requisicao.body.email;
    const telefone = requisicao.body.telefone;
    const cep = requisicao.body.cep;
    const endereco = requisicao.body.endereco;
    const cidade = requisicao.body.cidade;
    const uf = requisicao.body.uf;

    if (!nome || !cnpj || !fantasia || !email || !telefone || !endereco || !cidade || !uf || !cep) {

        let html = `
        <html lang="pt-br">
        <head>
        <meta charset="UTF-8">
        <title>Cadastro</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>

        <body>

        <div class="container mt-5">

        <form method="POST" action="/fornecedor" class="row gy-2 gx-3 align-items-center border p-3">

        <legend><h3>Cadastro de fornecedor</h3></legend>

        <div class="row">

        <label for="cnpj">CNPJ</label>

        <input type="number" class="form-control mb-2" id="cnpj" name="cnpj" value="${cnpj || ""}">
        `;

        if (!cnpj) {
            html += `
            <div class="alert alert-danger">
            Por favor informe o cnpj
            </div>
            `;
        }

        html += `
        </div>

        <div class="row">

    <label for="razao">Razão Social ou Nome do Fornecedor</label>

            <input type="text" class="form-control mb-2" id="nome" name="nome" value="${nome || ""}">
        `;

        if (!nome) {
            html += `
            <div class="alert alert-danger">
            Por favor informe a razão social
            </div>
            `;
        }
        html += `
        </div>

        <div class="row">

        <label for="Nome fantasia">Nome fantasia</label>

            <input type="text" class="form-control mb-2" id="fantasia" name="fantasia" value="${fantasia || ""}">
        `;

        if (!fantasia) {
            html += `
            <div class="alert alert-danger">
            Por favor informe o nome fantasia
            </div>
            `;
        }
        html += `
        </div>

        <div class="row">

    <label for="email">email</label>

            <input type="text" class="form-control mb-2" id="email" name="email" value="${email || ""}">
        `;

        if (!email) {
            html += `
            <div class="alert alert-danger">
            Por favor informe o email
            </div>
            `;
        }
        html += `
        </div>

        <div class="row">

    <label for="email">telefone</label>

            <input type="text" class="form-control mb-2" id="telefone" name="telefone" value="${telefone || ""}">
        `;

        if (!telefone) {
            html += `
            <div class="alert alert-danger">
            Por favor informe o telefone
            </div>
            `;
        }
        html += `
        </div>

        <div class="row">

    <label for="email">CEP</label>

            <input type="text" class="form-control mb-2" id="cep" name="cep" value="${cep || ""}">
        `;

        if (!cep) {
            html += `
            <div class="alert alert-danger">
            Por favor informe o cep
            </div>
            `;
        }
        html += `
        </div>

        <div class="row">

    <label for="email">Endereço</label>

            <input type="text" class="form-control mb-2" id="endereco" name="endereco" value="${endereco || ""}">
        `;

        if (!endereco) {
            html += `
            <div class="alert alert-danger">
            Por favor informe o Endereço
            </div>
            `;
        }
        html += `
        </div>

        <div class="row">

    <label for="email">cidade</label>

            <input type="text" class="form-control mb-2" id="cidade" name="cidade" value="${cidade || ""}">
        `;

        if (!cidade) {
            html += `
            <div class="alert alert-danger">
            Por favor informe a cidade
            </div>
            `;
        }
        html += `
</div>

<div class="row pb-3">

<label for="uf">UF</label>

<select class="form-select" id="uf" name="uf">
`;

        if (!uf) {
            html += `<option value="" selected>Selecione o estado</option>`;
        } else {
            html += `<option value="">Selecione o estado</option>`;
        }

        if (uf == "AC") {
            html += `<option value="AC" selected>AC</option>`;
        }
        else { html += `<option value="AC">AC</option>`; }
        if (uf == "AL") {
            html += `<option value="AL" selected>AL</option>`;
        }
        else { html += `<option value="AL">AL</option>`; }
        if (uf == "AP") {
            html += `<option value="AP" selected>AP</option>`;
        }
        else { html += `<option value="AP">AP</option>`; }
        if (uf == "AM") {
            html += `<option value="AM" selected>AM</option>`;
        }
        else { html += `<option value="AM">AM</option>`; }
        if (uf == "BA") {
            html += `<option value="BA" selected>BA</option>`;
        }
        else { html += `<option value="BA">BA</option>`; }
        if (uf == "CE") {
            html += `<option value="CE" selected>CE</option>`;
        }
        else { html += `<option value="CE">CE</option>`; }
        if (uf == "DF") {
            html += `<option value="DF" selected>DF</option>`;
        }
        else { html += `<option value="DF">DF</option>`; }
        if (uf == "ES") {
            html += `<option value="ES" selected>ES</option>`;
        }
        else { html += `<option value="ES">ES</option>`; }
        if (uf == "GO") {
            html += `<option value="GO" selected>GO</option>`;
        }
        else { html += `<option value="GO">GO</option>`; }
        if (uf == "MA") {
            html += `<option value="MA" selected>MA</option>`;
        }
        else { html += `<option value="MA">MA</option>`; }
        if (uf == "MT") {
            html += `<option value="MT" selected>MT</option>`;
        }
        else { html += `<option value="MT">MT</option>`; }
        if (uf == "MS") {
            html += `<option value="MS" selected>MS</option>`;
        }
        else { html += `<option value="MS">MS</option>`; }
        if (uf == "MG") {
            html += `<option value="MG" selected>MG</option>`;
        }
        else { html += `<option value="MG">MG</option>`; }
        if (uf == "PA") {
            html += `<option value="PA" selected>PA</option>`;
        }
        else { html += `<option value="PA">PA</option>`; }
        if (uf == "PB") {
            html += `<option value="PB" selected>PB</option>`;
        }
        else { html += `<option value="PB">PB</option>`; }
        if (uf == "PR") {
            html += `<option value="PR" selected>PR</option>`;
        }
        else { html += `<option value="PR">PR</option>`; }
        if (uf == "PE") {
            html += `<option value="PE" selected>PE</option>`;
        }
        else { html += `<option value="PE">PE</option>`; }
        if (uf == "PI") {
            html += `<option value="PI" selected>PI</option>`;
        }
        else { html += `<option value="PI">PI</option>`; }
        if (uf == "RJ") {
            html += `<option value="RJ" selected>RJ</option>`;
        }
        else { html += `<option value="RJ">RJ</option>`; }
        if (uf == "RN") {
            html += `<option value="RN" selected>RN</option>`;
        }
        else { html += `<option value="RN">RN</option>`; }
        if (uf == "RS") {
            html += `<option value="RS" selected>RS</option>`;
        }
        else { html += `<option value="RS">RS</option>`; }
        if (uf == "RO") {
            html += `<option value="RO" selected>RO</option>`;
        }
        else { html += `<option value="RO">RO</option>`; }
        if (uf == "RR") {
            html += `<option value="RR" selected>RR</option>`;
        }
        else { html += `<option value="RR">RR</option>`; }
        if (uf == "SC") {
            html += `<option value="SC" selected>SC</option>`;
        }
        else { html += `<option value="SC">SC</option>`; }
        if (uf == "SP") {
            html += `<option value="SP" selected>SP</option>`;
        }
        else { html += `<option value="SP">SP</option>`; }
        if (uf == "SE") {
            html += `<option value="SE" selected>SE</option>`;
        }
        else { html += `<option value="SE">SE</option>`; }
        if (uf == "TO") {
            html += `<option value="TO" selected>TO</option>`;
        }
        else { html += `<option value="TO">TO</option>`; }

        html += `
</select>
`;

        if (!uf) {
            html += `
    <div class="alert alert-danger">
    Por favor informe o estado
    </div>
    `;
        }

        html += `

        </div>

        <div class="row">
        <button type="submit" class="btn btn-primary">Cadastrar Fornecedor</button>
        </div>

        </form>
        </div>

        </body>
        </html>
        `;

        resposta.write(html);
        resposta.end();

    } else {

        listaFor.push({
            cnpj: cnpj,
            nome: nome,
            fantasia: fantasia,
            email: email,
            telefone: telefone,
            cep: cep,
            endereco: endereco,
            cidade: cidade,
            uf: uf
        });

        resposta.redirect("/listaFornecedores");

    }

});


app.get("/listaFornecedores", (requisicao, resposta) => {

    resposta.write(`
    <html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <title>Lista de Fornecedores</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>

    <body>

    <div class="container mt-5">

    <table class="table table-striped table-hover">

    <thead>
    <tr>
    <th>Id</th>
    <th>CPNJ</th>
    <th>Razão Social</th>
    <th>Nome Fantasia</th>
    <th>email</th>
    <th>telefone</th>
    <th>CEP</th> 
    <th>Endereço</th>
    <th>Cidade</th>   
    <th>UF</th>   
      

    </tr>
    </thead>

    <tbody>
    `);

    for (let i = 0; i < listaFor.length; i++) {

        const fornecedor = listaFor[i];

        resposta.write(`
        <tr>
        <td>${i + 1}</td>
        <td>${fornecedor.cnpj}</td>
        <td>${fornecedor.nome}</td>
        <td>${fornecedor.fantasia}</td>
        <td>${fornecedor.email}</td>
        <td>${fornecedor.telefone}</td>
        <td>${fornecedor.cep}</td>
        <td>${fornecedor.endereco}</td>
        <td>${fornecedor.cidade}</td>
        <td>${fornecedor.uf}</td>
        </tr>
        `);
    }

    resposta.write(`
    </tbody>
    </table>

    <a href="/fornecedor" class="btn btn-primary">
    Continuar cadastrando
    </a>

    </div>

    </body>
    </html>
    `);

    resposta.end();

});
app.get('/login',(requisicao,resposta)=>{
    resposta.write(`
        <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Cadastro</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>

    <body>
        `)
        resposta.write(`<section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Preencha seu login e senha!</p>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Senha</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">não tem senha?</a></p>

              <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Não tem conta, cadastre-se? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</body>
</html>
`)
resposta.end();
})
app.get('/logout', (req, res) => {
    res.send('<h1>logout efetudo com sucesso!</h1>');
});
app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});