export default class Fecha{
    /**
     * 
     * @param {number} año 
     * @param {number} mes 
     * @param {number} dia 
     */
    constructor(dia, mes, año){
        this.fecha = new Date (año, mes-1, dia)
    }
    getAños(){
        let años = this.fecha.getFullYear() - new Date(Date.now()).getFullYear()
        return años
    }
    getMeses(){
        let meses = ((this.fecha.getFullYear() - new Date(Date.now()).getFullYear())*12)-new Date(Date.now).getMonth
        return meses
    }
}