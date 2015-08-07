cc.game.onStart = function(){
  cc.view.setDesignResolutionSize(320, 480, cc.ResolutionPolicy.SHOW_ALL);
  cc.LoaderScene.preload(gameResources, function () {
    cc.director.runScene(new gameScene());
  }, this);
};
cc.game.run();