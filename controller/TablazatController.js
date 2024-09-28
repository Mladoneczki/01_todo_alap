import TablazatModel from "../Model/TablazatModel.js";
import TablazatMegjelenit from "../view/TablazatMegjelenit.js";

export default class TablazatController{
    constructor(){
      
      
      this.tModel=new TablazatModel()
      const lista=this.tModel.getLista()
      this.tMegjelenit= new TablazatMegjelenit(lista,$(".tarolo"))
      this.torolEsemeny()
    }
    torolEsemeny(){
      $(window).on("torles",(event)=>{
        console.log(event.detail)
        let index=event.detail.id
        this.tModel.sorTorol(index)
        const lista=this.tModel.getLista()
        this.tMegjelenit= new TablazatMegjelenit(lista,$(".tarolo"))

      })
    }
}