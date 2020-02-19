export default class Fecha{
    /**
     * 
     * @param {number} dia numero del dia del año de cita
     * @param {number} mes dia del mes del año de cita
     * @param {number} año año de cita
     */
    constructor(dia, mes, año){
        this.fecha = new Date (año, mes-1, dia)
        this.diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    }
    getAños(){
        let años = this.fecha.getFullYear() - new Date(Date.now()).getFullYear()
        return años
    }
    getMeses(){
        let mes1 = new Date(Date.now()).getMonth()
        let mes2 = this.fecha.getMonth()
        let meses
        if(mes1<mes2){
            meses = ((this.fecha.getFullYear() - new Date(Date.now()).getFullYear())*12) + (mes2-mes1)
        }
        else if(mes1>mes2){
            meses = ((this.fecha.getFullYear() - new Date(Date.now()).getFullYear())*12) - (mes1-mes2)
        }
        else{
            meses = ((this.fecha.getFullYear() - new Date(Date.now()).getFullYear())*12)
        }
        return meses
    }
    getSemanas(){
        let mes1 = new Date(Date.now()).getMonth()
        let mes2 = this.fecha.getMonth()
        let meses
        if(mes1<mes2){
            meses = ((this.fecha.getFullYear() - new Date(Date.now()).getFullYear())*12) + (mes2-mes1)
        }
        else if(mes1>mes2){
            meses = ((this.fecha.getFullYear() - new Date(Date.now()).getFullYear())*12) - (mes1-mes2)
        }
        else{
            meses = ((this.fecha.getFullYear() - new Date(Date.now()).getFullYear())*12)
        }
        let semanas = meses * 4
        return semanas
    }
    getDias(){
        let mes1 = new Date(Date.now()).getMonth()
        let mes2 = this.fecha.getMonth()
        let meses
        if(mes1<mes2){
            meses = ((this.fecha.getFullYear() - new Date(Date.now()).getFullYear())*12) + (mes2-mes1)
        }
        else if(mes1>mes2){
            meses = ((this.fecha.getFullYear() - new Date(Date.now()).getFullYear())*12) - (mes1-mes2)
        }
        else{
            meses = ((this.fecha.getFullYear() - new Date(Date.now()).getFullYear())*12)
        }
        let semanas = meses * 4
        let dias = semanas * 30
        return dias
    }
    getFecha(){
        let fechaCorta = `${this.fecha.getDate()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`
        return fechaCorta
    }
    getDiaFecha(){
        let diaFecha = this.diaSemana[this.fecha.getDay()]
        return diaFecha
    }
}