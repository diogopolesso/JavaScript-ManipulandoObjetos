const cliente = {
    nome: "joão",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["51995505165", "51995606178"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento Realizado. Novo Saldo ${this.saldo}`);
        }
    },
  };

  cliente.efetuaPagamento(75);

