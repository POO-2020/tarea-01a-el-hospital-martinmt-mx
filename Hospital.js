export default class Hospital{
    /**
     * 
     * @param {*} nombre 
     * @param {*} direccion 
     * @param {*} doctores 
     * @param {*} citas 
     */
    constructor(nombre, direccion, doctores, citas){
        this.nombre = nombre
        this.direccion = direccion
        this.doctores = doctores
        this.citas = citas
    }
}