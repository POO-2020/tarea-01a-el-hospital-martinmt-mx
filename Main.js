import Fecha from "./Fecha.js"
import Tiempo from "./Tiempo.js"
class Main{
    probarAño(){
        let fecha1 = new Fecha(19,4,2024)
        console.log(fecha1.getAños())
    }
    probarMeses(){
        let fecha1 = new Fecha(19,2,2022)
        console.log(fecha1.getMeses())
    }

    probarSemanas(){
        let fecha1 = new Fecha(19,2,2022)
        console.log(fecha1.getSemanas())
    }
    probarDias(){
        let fecha1 = new Fecha(19,2,2022)
        console.log(fecha1.getDias())
    }
    probarFecha(){
        let fecha1 = new Fecha(19,2,2022)
        console.log(fecha1.getFecha())
    }
    probarDiaFecha(){
        let fecha1 = new Fecha(19,2,2022)
        console.log(fecha1.getDiaFecha())
    }
    probarTiempo(){
        let tiempo = new Tiempo(11, 32, "pm")
        console.log(tiempo.getFormato12())
        console.log(tiempo.getFormato24())
    }
}
let app = new Main()
app.probarAño()
app.probarMeses()
app.probarSemanas()
app.probarDias()
app.probarFecha()
app.probarDiaFecha()
app.probarTiempo()