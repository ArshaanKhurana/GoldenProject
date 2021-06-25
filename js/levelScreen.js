class Levels{
    constructor(x,y,lvlName){
      this.levels = createSprite(x,y)
      this.levels.addImage(CloseLockImg)
      this.levels.scale = 0.5;
      this.levels.visible = false;

      this.lvl = lvlName
      this.posX=x;
      this.posY=y;
    }

    display(){
        background("yellow");
        Hero.hide()
        this.levels.visible = true;
        
        textSize(50);
        text(this.lvl,this.posX,-50+this.posY)

    }

}