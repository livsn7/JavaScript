let quartosDisponiveis = 5;
let reservaConfirmada = true;

let statusReserva = (reservaConfirmada && quartosDisponiveis > 0) ? "Reserva Confirmada"
:(quartosDisponiveis > 0) ? "Aguardando Confirmação"
:"Sem quartos disponíveis";

console.log(statusReserva); //saída: "Reserva Confirmada"