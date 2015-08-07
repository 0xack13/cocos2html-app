cc.game.onStart = function(){
    cc.view.setDesignResolutionSize(320, 480, cc.ResolutionPolicy.SHOW_ALL);
    cc.director.runScene(new gameScene());
};

var gameScene = cc.Scene.extend({
  onEnter:function () {
    this._super();
    console.log("my awesome game starts here");
  }
});

cc.game.run();