import Fecha from "./Fecha.js"
import Tiempo from "./Tiempo.js"
import Nombre from "./Nombre.js"
class Main{
    probarFecha(){
        let fecha1 = new Fecha(12,4,2022)
        console.log(fecha1.getAños())
        console.log(fecha1.getMeses())
        console.log(fecha1.getSemanas())
        console.log(fecha1.getDias())
        console.log(fecha1.getFecha())
        console.log(fecha1.getDiaFecha())
    }
    probarTiempo(){
        let tiempo = new Tiempo(12, 32, "pm")
        console.log(tiempo.getFormato12())
        console.log(tiempo.getFormato24())
    }
    probarNombre(){
        let nombre = new Nombre("Martin", "Mojica", "Torres")
        console.log(nombre.getNombreCompleto())
        console.log(nombre.getApellidoNombre())
        console.log(nombre.getIniciales())
    }
}
let app = new Main()
app.probarFecha()
app.probarTiempo()
app.probarNombre()