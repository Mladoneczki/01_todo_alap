import { TODOLIST2 } from "./adatok.js"

export default class TablazatModel{
    #lista
    constructor(){
        this.#lista=TODOLIST2
    }
    getLista(){
        return this.#lista
    }
    sorTorol(index){
        this.#lista.splice(index,1)

    }
}
