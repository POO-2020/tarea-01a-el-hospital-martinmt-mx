import Fecha from "./Fecha.js"
class Main{
    probarFecha(){
        let fecha1 = new Fecha(3,4,2022)
        console.log(fecha1.getAños())
    }
    probarMeses(){
        let fecha1 = new Fecha(3,4,2022)
        console.log(fecha1.getMeses())
    }
}
let app = new Main()
app.probarFecha()
app.probarMeses()