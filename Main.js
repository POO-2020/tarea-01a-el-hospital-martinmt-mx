import Fecha from "./Fecha.js"
import Tiempo from "./Tiempo.js"
import Nombre from "./Nombre.js"
import Paciente from "./Paciente.js"
import Doctor from "./Doctor.js"
import Cita from "./Cita.js"
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
    probarPaciente(){
        let paciente1 = new Paciente(new Nombre("Martin", "Mojica", "Torres"), new Fecha(3,4,2001), 3122739451)
        console.log(paciente1.getPerfil())
    }
    probarDoctor(){
        let doctor = new Doctor("JLM19", "Cirujano", new Nombre("Juan", "López", "Méndez"), 3213339999)
        console.log(doctor.getPerfil())
    }
    probarCita(){
        let cita1 = new Cita(new Fecha(3,4,2020), new Tiempo(3,30,"pm"), new Doctor("JLM19", "Cirujano", new Nombre("Juan", "López", "Méndez"), 3213339999), new Paciente(new Nombre("Martin", "Mojica", "Torres"), new Fecha(3,4,2001), 3122739451))
        console.log(cita1.getPerfil())
    }
}
let app = new Main()
app.probarFecha()
app.probarTiempo()
app.probarNombre()
app.probarPaciente()
app.probarDoctor()
app.probarCita()