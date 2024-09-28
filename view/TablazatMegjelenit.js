import Sor from "./Sor.js"

export default class TablazatMegjelenit{
    #lista
    constructor(lista, szuloElem){
        
        this.#lista=lista
        this.szuloElem=szuloElem
        this.szuloElem.empty()
        console.log(lista)
        this.tablazatKiIr()
        this.tBodyElem=$(".sorok")
        this.SorokLetrehozasa()
        

    }
    SorokLetrehozasa(){
        this.#lista.forEach((element,index) => {
            element.id=index
            new Sor(element,this.tBodyElem)
            
        });

    }
    tablazatKiIr(){
      this.szuloElem.append(  ` <table class="table table-striped">
        <thead>
        <tr>
            <th>Részfeladat</th>
            <th>Határidő</th>
            <th></th>
        </tr>
        </thead>
        <tbody class="sorok">
        </tbody>
</table>`)
    }
}