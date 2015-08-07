var gameScene = cc.Scene.extend({
  onEnter:function () {
  this._super();
    var gameLayer = new game();
    gameLayer.init();
    this.addChild(gameLayer);
  }
});


var backgroundLayer;
var game = cc.Layer.extend({
  init:function () {
    this._super();
    backgroundLayer = new cc.LayerColor(cc.color(0,60,200,80),320, 480);
    this.addChild(backgroundLayer);
    var target = cc.Sprite.create("assets/target.png");
    backgroundLayer.addChild(target,0);
    target.setPosition(10,240);
    setTimeout(function(){
        backgroundLayer.removeChild(target);
    }, 3000);
    var size = cc.director.getWinSize();
    var label = cc.LabelTTF.create("Hello There");
    label.setPosition(size.width /2, size.height /2);
    this.addChild(label, 1);
  }
});