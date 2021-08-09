class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    };

    aumentarVolume() {
        this.volume += 2;
    };
    diminuirVolume() {
        this.volume -= 2;
    };

    // Metodo Estatico - So pode ser chamado sem criar instancia
    // Nao tem acesso aos dados da instancia
    static trocaPilha() {
        console.log(`Favor trocar pilha!`);
    };
};

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);
ControleRemoto.trocaPilha();