/**
 * @license
 * MVMota - v0.3.5
 *
 * MVMota is licensed under the LPGL License.
 * http://choosealicense.com/licenses/lgpl-3.0/
 */
var MVMota=window.MVMota||{};

MVMota.Items=[
null,
{"id":1,"name":"Yellow Key","amount":0,"gainBefore":"","gainOn":"",
"gainAfter":"","useBefore":"","useOn":"","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":false},
{"id":2,"name":"Blue Key","amount":0,"gainBefore":"","gainOn":"","gainAfter":"",
"useBefore":"","useOn":"","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":false},
{"id":3,"name":"Red Key","amount":0,"gainBefore":"","gainOn":"","gainAfter":"",
"useBefore":"","useOn":"","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":false},
{"id":4,"name":"Red Drug","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){MVMota.mainHero.hp+=50*MVMota.mainHero.area();return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":true,"canUseByPlayer":false},
{"id":5,"name":"Blue Drug","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){MVMota.mainHero.hp+=200*MVMota.mainHero.area();return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":true,"canUseByPlayer":false},
{"id":6,"name":"Red Ruby","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){MVMota.mainHero.atc+=1*MVMota.mainHero.area();return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":true,"canUseByPlayer":false},
{"id":7,"name":"Blue Ruby","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){MVMota.mainHero.def+=1*MVMota.mainHero.area();return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":true,"canUseByPlayer":false},
{"id":8,"name":"Iron Sword","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){MVMota.mainHero.atc+=10;return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":true,"canUseByPlayer":false},
{"id":9,"name":"Iron Shield","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){MVMota.mainHero.def+=10;return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":true,"canUseByPlayer":false},
{"id":10,"name":"Silver Sword","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){MVMota.mainHero.atc+=20;return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":true,"canUseByPlayer":false},
{"id":11,"name":"Silver Shield","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){MVMota.mainHero.def+=20;return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":true,"canUseByPlayer":false},
{"id":12,"name":"Knight Sword","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){MVMota.mainHero.atc+=40;return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":true,"canUseByPlayer":false},
{"id":13,"name":"Knight Shield","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){MVMota.mainHero.def+=40;return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":true,"canUseByPlayer":false},
{"id":14,"name":"Holy Sword","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){MVMota.mainHero.atc+=50;return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":true,"canUseByPlayer":false},
{"id":15,"name":"Holy Shield","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){MVMota.mainHero.def+=50;return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":true,"canUseByPlayer":false},
{"id":16,"name":"Sacred Sword","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){MVMota.mainHero.atc+=100;return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":true,"canUseByPlayer":false},
{"id":17,"name":"Sacred Shield","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){MVMota.mainHero.def+=100;return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":true,"canUseByPlayer":false},
{"id":18,"name":"Enemy Book","amount":0,"gainBefore":"","gainOn":"","gainAfter":"",
"useBefore":"(function(){this.amount++;/*无限使用*/return true;})","useOn":"(function(){SceneManager.goto(MVMota.MonsterBook.Scene_MonsterBook);return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true},
{"id":19,"name":"NotePad","amount":0,"gainBefore":"","gainOn":"","gainAfter":"",
"useBefore":"(function(){this.amount++;/*无限使用*/return true;})","useOn":"(function(){SceneManager.goto(MVMota.NotePad.Scene_NotePad);return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true},
{"id":20,"name":"Flying Wand","amount":0,"gainBefore":"","gainOn":"","gainAfter":"",
"useBefore":"(function(){for(var i=1;i<MVMota.FlyingWand.LandingList.length;i++){if(MVMota.mainHero.floor===MVMota.FlyingWand.LandingList[i].floor){if(($gamePlayer.x==MVMota.FlyingWand.LandingList[i].up.x&&$gamePlayer.y==MVMota.FlyingWand.LandingList[i].up.y)||($gamePlayer.x==MVMota.FlyingWand.LandingList[i].down.x&&$gamePlayer.y==MVMota.FlyingWand.LandingList[i].down.y)){this.amount++;/*无限使用*/return true;}}}return false;})","useOn":"(function(){SceneManager.goto(MVMota.FlyingWand.Scene_Item);return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true},
{"id":21,"name":"Pick","amount":0,"gainBefore":"","gainOn":"","gainAfter":"",
"useBefore":"","useOn":"(function(){/*镐，破坏周围墙壁*/var nowMapData=window['$dataMap'].data.slice();var radius=1;var heroLocation={x:$gamePlayer.x,y:$gamePlayer.y};var vailid=2816;for(var i=heroLocation.x-radius;i<=heroLocation.x+radius;i++){for(var j=heroLocation.y-radius;j<=heroLocation.y+radius;j++){if(nowMapData[i+j*18]>=2912&&nowMapData[i+j*18]<2960){nowMapData[i+j*18]=vailid;}}}MVMota.changedMaps.push({floor:MVMota.mainHero.floor,mapData:nowMapData});return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true},
{"id":22,"name":"Blast Rell","amount":0,"gainBefore":"","gainOn":"","gainAfter":"",
"useBefore":"","useOn":"(function(){var nowMapData=window['$dataMap'].data.slice();var vailid=2816;for(var i=0;i<nowMapData.length;i++){if(nowMapData[i]>=2912&&nowMapData[i]<2960){nowMapData[i]=vailid;}}MVMota.changedMaps.push({floor:MVMota.mainHero.floor,mapData:nowMapData});return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true},
{"id":23,"name":"Freezing Spells","amount":0,"gainBefore":"","gainOn":"","gainAfter":"",
"useBefore":"(function(){this.amount++;/*无限使用*/return true;})","useOn":"(function(){var nowMapData=window['$dataMap'].data.slice();var vailid=2816;for(var i=0;i<nowMapData.length;i++){if(nowMapData[i]>=3104&&nowMapData[i]<3152){nowMapData[i]=vailid;}}MVMota.changedMaps.push({floor:MVMota.mainHero.floor,mapData:nowMapData});return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true},
{"id":24,"name":"Bomb","amount":0,"gainBefore":"","gainOn":"","gainAfter":"",
"useBefore":"","useOn":"(function(){/*炸弹，炸毁周围敌人*//*能被炸死的怪物要添加公共事件*/var radius=1;var heroLocation={x:$gamePlayer.x,y:$gamePlayer.y};for(var i=1;i<MVMota.Bomb.DestoriabeList.length;i++){var enemyLocation={x:$gameMap.event(MVMota.Bomb.DestoriabeList[i][1]).x,y:$gameMap.event(MVMota.Bomb.DestoriabeList[i][1]).y};if((enemyLocation.x>=heroLocation.x-radius&&enemyLocation.x<=heroLocation.x+radius)&&(enemyLocation.y>=heroLocation.y-radius&&enemyLocation.y<=heroLocation.y+radius)){$gameSelfSwitches.setValue(MVMota.Bomb.DestoriabeList[i], true);}}return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true},
{"id":25,"name":"Magic Key","amount":0,"gainBefore":"","gainOn":"","gainAfter":"",
"useBefore":"","useOn":"(function(){/*魔法钥匙，开本层所有黄门*/for(var i=1;i<MVMota.MagicKey.YellowDoorList.length;i++){$gameSelfSwitches.setValue(MVMota.MagicKey.YellowDoorList[i], true);}return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true},
{"id":26,"name":"Holy Water","amount":0,"gainBefore":"","gainOn":"","gainAfter":"",
"useBefore":"","useOn":"(function(){MVMota.mainHero.hp+=(MVMota.mainHero.atc+MVMota.mainHero.def);return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true},
{"id":27,"name":"Lucky Coin","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"","useOn":"(function(){/*幸运钱币*//*遍历怪物数据表，然后把money乘以2*/for(var i=1;i<MVMota.Monsters.length;i++){MVMota.Monsters[i].money*=2;}return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true},
{"id":28,"name":"Latin Cross","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"(function(){this.amount++;/*无限使用*/return true;})","useOn":"(function(){MVMota.mainHero.atcEffectExtend.push({id:3,effect:2.0});return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true},
{"id":29,"name":"Dragon Dagger","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.use();/*立即使用*/return true;})",
"useBefore":"(function(){this.amount++;/*无限使用*/return true;})","useOn":"(function(){MVMota.mainHero.atcEffectExtend.push({id:4,effect:2.0});return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true},
{"id":30,"name":"Upward Aircraft","amount":0,"gainBefore":"","gainOn":"","gainAfter":"",
"useBefore":"(function(){var target={floor:MVMota.mainHero.floor+1,x:$gamePlayer.x,y:$gamePlayer.y};if(target.floor>MVMota.MotaFloorList[MVMota.MotaFloorList.length-1].floor){return false;}if(window['$dataMap'].data[target.x+target.y*18]>=2816&&window['$dataMap'].data[target.x+target.y*18]<=2863){return true;}else{return false;}})","useOn":"(function(){var target={floor:MVMota.mainHero.floor+1,x:$gamePlayer.x,y:$gamePlayer.y};$gamePlayer.reserveTransfer(MVMota.MotaFloorList.findIdByFloor(target.floor),target.x,target.y);return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true},
{"id":31,"name":"Downward Aircraft","amount":0,"gainBefore":"","gainOn":"","gainAfter":"",
"useBefore":"(function(){var target={floor:MVMota.mainHero.floor-1,x:$gamePlayer.x,y:$gamePlayer.y};if(target.floor>MVMota.MotaFloorList[1].floor){return false;}if(window['$dataMap'].data[target.x+target.y*18]>=2816&&window['$dataMap'].data[target.x+target.y*18]<=2863){return true;}else{return false;}})","useOn":"(function(){var target={floor:MVMota.mainHero.floor-1,x:$gamePlayer.x,y:$gamePlayer.y};$gamePlayer.reserveTransfer(MVMota.MotaFloorList.findIdByFloor(target.floor),target.x,target.y);return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true},
{"id":32,"name":"Central Aircraft","amount":0,"gainBefore":"","gainOn":"","gainAfter":"(function(){this.amount+=2;/*能用三次*/return true;})",
"useBefore":"(function(){var target={x:22-$gamePlayer.x,y:12-$gamePlayer.y};if(window['$dataMap'].data[target.x+target.y*18]>=2816&&window['$dataMap'].data[target.x+target.y*18]<=2863){return true;}else{return false;}})","useOn":"(function(){var target={x:22-$gamePlayer.x,y:12-$gamePlayer.y};$gamePlayer.reserveTransfer($gameMap.mapId(),target.x,target.y);return true;})","useAfter":"",
"dropBefore":"","dropOn":"","dropAfter":"","hiden":false,"canUseByPlayer":true}
]