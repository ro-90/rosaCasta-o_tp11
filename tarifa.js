
let pagoMes = 10000
let consumoKWH = "500KWH"


pagoMes=(consumoKWH >="300KWH") ? ( 
    console.log("Devido a que su hogar tuvo un consumo de:"+consumoKWH+" "+"en base al ajuste tarifario(hogares con consumo mayor a 300KWH por mes tendra un aumento del 20%)cumplimos en informarle que se ha ajustado el total ha pagar,que sera de $" +( pagoMes+pagoMes*20/100) )): console.log(pagoMes);
