define([],function(){
    "use strict";

    var GameApp = function(){
        this.baseHtml = $("<div style='width:100%;height:100%'></div>");
        this.volume = 0;

    };

    GameApp.prototype.getHTML = function(){
        console.warn("GameApp.getHTML not implemented, using stub.");
        return this.baseHtml;
    }

    GameApp.prototype.getFPS = function(){
        console.warn("GameApp.getFPS not implemented, using stub.");
        return 60;
    }

    GameApp.prototype.onResize = function(){
        console.warn("GameApp.onResize not implemented, using stub.");

    }

    GameApp.prototype.setVolume = function(v){
        console.warn("GameApp.setVolume not implemented, using stub.");
        this.volume = v;

    }

    GameApp.prototype.getVolume = function(){
        console.warn("GameApp.getVolume not implemented, using stub.");
        return this.volume;
    }

    GameApp.prototype.loadGame = function(game){
        console.warn("GameApp.loadGame not implemented, using stub.");

    }

    GameApp.prototype.handleMouseEvent = function(event){
        console.warn("GameApp.handleMouseEvent not implemented, using stub.");

    }

    GameApp.prototype.clearButtonStates = function(){
        console.warn("GameApp.clearButtonStates not implemented, using stub.");

    }

    GameApp.prototype.handleKey = function(event){
        console.warn("GameApp.handleKey not implemented, using stub.");

    }

    GameApp.prototype.start = function(){
        console.warn("GameApp.start not implemented, using stub.");

    }

    GameApp.prototype.resume = function(){
        console.warn("GameApp.resume not implemented, using stub.");

    }

    GameApp.prototype.pause = function(){
        console.warn("GameApp.pause not implemented, using stub.");

    }

    GameApp.prototype.terminateGame = function(callback){
        console.warn("GameApp.terminateGame not implemented, using stub.");
        callback();
    }

    GameApp.prototype.supportsCheats = function(){
        console.warn("GameApp.supportsCheats not implemented, using stub.");
        return false;
    }

    GameApp.prototype.addCode = function(code){
        console.warn("GameApp.addCode not implemented, using stub.");
        return false;
    }

    GameApp.prototype.removeCode = function(code){
        console.warn("GameApp.removeCode not implemented, using stub.");
    }

    GameApp.prototype.getCodeList = function(){
        console.warn("GameApp.getCodeList not implemented, using stub.");
        return [];
    }

    GameApp.prototype.supportsScreenshot = function(){
        console.warn("GameApp.supportsScreenshot not implemented, using stub.");
        return false;
    }

    GameApp.prototype.screenshotDataUri = function(){
        console.warn("GameApp.screenshotDataUri not implemented, using stub.");
        return "";
    }

    return GameApp;

});