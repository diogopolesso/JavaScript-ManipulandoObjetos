const cliente = {
    nome: "joão",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["51995505165", "51995606178"]
  };

  cliente.enderecos = [{
    rua: "Rua Padré tomé",
    numero: 764,
    apartamento: true,
    complemento: "apto 101",
  },
];

    cliente.enderecos.push({
    rua: "Rua Antonio de Carvalho",
    numero: 2600,
    apartamento: false,
    });

    const listaApenasAptos = cliente.enderecos.filter(
        (endereco) => endereco.apartamento === true
    );

    console.log(listaApenasAptos);