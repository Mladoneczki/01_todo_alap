export default class Sor{
    #adat={}
    constructor(adat,szuloElem){
        this.szuloElem=szuloElem
        this.#adat=adat
        this.sorLetrehoz()
        this.kukaElem=$(".torol:last")
        this.kukaElem.on("click",()=>{
            console.log(this.#adat)
            const e = new CustomEvent("torles",{detail:this.#adat})
            window.dispatchEvent(e)
        })

    }

    sorLetrehoz(){
       
        this.szuloElem.append(
            `<tr>
                <td>${this.#adat.tevekenyseg}</td>
                <td>${this.#adat.hatarido}</td>
                <td class="torol">🗑️</td>
                 </tr>`
          

        )
    }
}