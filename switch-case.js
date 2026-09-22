const classe = "Mago";

switch (classe) {
    case "Guerreiro":
        console.log("Classe: Guerreiro");
        console.log("O guerreiro é um combatente corpo a corpo, especializado em força e resistência.");
        console.log("Habilidades: Ataque poderoso, Defesa sólida, Fúria de batalha");
        break;

    case "Mago":
        console.log("Classe: Mago");
        console.log("O mago é um conjurador de feitiços, especializado em magia ofensiva e suporte.");
        console.log("Habilidades: Magia de fogo, Magia de gelo, Magia de cura");
        break;

    case "Arqueiro":
        console.log("Classe: Arqueiro");
        console.log("O arqueiro é um atirador de longa distância, especializado em precisão e agilidade.");
        console.log("Habilidades: Precisão, Agilidade, Tiro com precisão");
        break;

    case "Ladino":
        console.log("Classe: Ladino");
        console.log("O ladino é um especialista em furtividade e trapaças, utilizado para sabotagem e espionagem.");
        console.log("Habilidades: Furtividade, Trapas, Assassinato");
        break;

    default:
        console.log("Classe desconhecida. Por favor, escolha entre guerreiro, mago, arqueiro ou ladino.");
}