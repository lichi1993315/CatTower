/*:
@plugindesc Tic-Tac-Toe Minigame
@author Delsin7
@help Tic-Tac-Toe Minigame! by Delsin7

To start the Tic-Tac-Toe Minigame, in an event add a Script event and put 
'TTT.main();' without quotes. The minigame will start immediately.
Alternately you can use the Plugin Command event and put 'TTT Start' without
quotes. When the minigame is over, the rest of the event will proceed as normal.

There are several things you will need to set up in the plugin manager.
This plugin should come bundled with some basic assets, but feel free to
use your own.

Originally started as part of Rpgmaker.net's Palette Event.
Plugin, icon set, and black picture free for personal or commercial use if you 
credit me, aka Delsin7.

Known Issues: Impossible difficulty is not really impossible. Yet.
Also need to tweak the calculations a bit more for smarter AI.

@param Game Name
@desc For setting the displayed game name at top of screen.
@default Tic-Tac-Toe!
@require 1
@type string

@param Win Count Variable
@desc Number of a variable to hold number of wins.
@default 11
@require 1
@type number

@param Loss Count Variable
@desc Number of a variable to hold number of losses.
@default 12
@require 1
@type number

@param Permanent Win Count Variable
@desc Number of a variable to hold number of wins permanently.
@default 13
@require 1
@type number

@param Permanent Loss Count Variable
@desc Number of a variable to hold number of losses permanently.
@default 14
@require 1
@type number

@param Icon Size
@desc Change to the size of your icons, ie 24, 32, 48, 96, etc. Width and Heigth must be the same, no rectangle icons.
@default 96
@require 1
@type number

@param Game Icon Name
@desc Spritesheet/iconsheet located in the Picture folder you wish to use.
@default GameIcons1x96
@require 1
@type string

@param Used Icons
@desc Choose the Index of the icons used for Blank, Player, and Opponent. Use commas to seperate the numbers.
*Default: 0,1,2
@default 0,1,2
@require 1
@type list

@param Display Background
@desc Change to Off to not display a background image.
Default: true
@default true
@require 1
@type boolean

@param Background Name
@desc Name of Picture to use as a background.
@default black
@type string

@param Play Music
@desc Change to Off to not play music while minigame is active.
@default true
@require 1
@type boolean

@param Music
@desc Name of Music played while minigame is active. Can be any Music file.
@default Field1
@type string

@param Music Volume
@desc Volume of Music played while minigame is active.
Default: 90
@default 90
@type number

@param Music Pitch
@desc Pitch of Music played while minigame is active.
Default: 100
@default 100
@type number

@param Music Pan
@desc Pitch of Music played while minigame is active.
Default: 50
@default 50
@type number

@param Play ME
@desc Change to Off to not play MEs during the minigame.
@default true
@require 1
@type boolean

@param Win ME
@desc Name of ME played when player wins. Can be any ME file.
@default Fanfare1
@type string

@param Win ME Volume
@desc Volume of Win ME played while minigame is active.
Default: 90
@default 90
@type number

@param Win ME Pitch
@desc Pitch of Win ME played while minigame is active.
Default: 100
@default 100
@type number

@param Win ME Pan
@desc Pitch of Win ME played while minigame is active.
Default: 50
@default 50
@type number

@param Loss ME
@desc Name of ME played when player loses. Can be any ME file.
@default Defeat2
@type string

@param Loss ME Volume
@desc Volume of Loss ME played while minigame is active.
Default: 90
@default 90
@type number

@param Loss ME Pitch
@desc Pitch of Loss ME played while minigame is active.
Default: 100
@default 100
@type number

@param Loss ME Pan
@desc Pitch of Loss ME played while minigame is active.
Default: 50
@default 50
@type number

@param Tie ME
@desc Name of ME played when there is a tie. Can be any ME file.
@default Defeat1
@type string

@param Tie ME Volume
@desc Volume of Tie ME played while minigame is active.
Default: 90
@default 90
@type number

@param Tie ME Pitch
@desc Pitch of Tie ME played while minigame is active.
Default: 100
@default 100
@type number

@param Tie ME Pan
@desc Pitch of Tie ME played while minigame is active.
Default: 50
@default 50
@type number
*/


var Imported = Imported || {};
Imported['TTT'] = true;
var TTT = TTT || {};
TTT.version = 1.1;


//Option Params. Do not manually adjust, use plugin manager instead./////////////////////////////////////////////////////////////////
TTT.parameters = PluginManager.parameters('TicTacToeDelsinMV');
TTT.gameName = TTT.parameters["Game Name"];//,'Tic-Tac-Toe!'//String(
TTT.winCount = Number(TTT.parameters["Win Count Variable"]);//Change to a free variable to count wins.
TTT.lossCount = Number(TTT.parameters["Loss Count Variable"]);//Change to a free variable to count losses.
TTT.permanentWinCount = Number(TTT.parameters["Permanent Win Count Variable"]);//Change to a free variable to count wins.
TTT.permanentLossCount = Number(TTT.parameters["Permanent Loss Count Variable"]);//Change to a free variable to count wins.
TTT.iconSize = Number(TTT.parameters["Icon Size"]);//Change to the size of your icons, ie 24, 32, 48, 96, etc. Width and Heigth must be the same, no rectangle icons.
TTT.gameIcons = TTT.parameters["Game Icon Name"];//Spritesheet/iconsheet you wish to use.
TTT.iconsUsed = TTT.parameters["Used Icons"].replace(/ /g,'').split(',');//forgot about the commas and spaces, oops
TTT.displayBackground = Boolean(TTT.parameters["Display Background"]);//true/false. Chande to false to not display a background image.
TTT.background = TTT.parameters["Background Name"];//Picture to use as a background.
TTT.playMusic = Boolean(TTT.parameters["Play Music"]);//TTT.parameters["Music"] volume: Number(TTT.parameters["Music Volume"]), pitch: Number(TTT.parameters["Music Pitch"]), pan: Number(TTT.parameters["Music Pan"])
TTT.music1 = { name: TTT.parameters["Music"], volume: TTT.parameters["Music Volume"], pitch: Number(TTT.parameters["Music Pitch"]), pan: Number(TTT.parameters["Music Pan"])};// volume: 90, pitch: 100, pan: 50};//Can be any Music file.
TTT.playME = Boolean(TTT.parameters["Play ME"]);
TTT.winME = { name: TTT.parameters["Win ME"], volume: TTT.parameters["Win ME Volume"], pitch: TTT.parameters["Win ME Pitch"], pan: TTT.parameters["Win ME Pan"]};//Can be any ME file.
TTT.lossME = { name: TTT.parameters["Loss ME"], volume: TTT.parameters["Loss ME Volume"], pitch: TTT.parameters["Loss ME Pitch"], pan: TTT.parameters["Loss ME Pan"]};//Can be any ME file.
TTT.tieME = { name: TTT.parameters["Tie ME"], volume: TTT.parameters["Tie ME Volume"], pitch: TTT.parameters["Tie ME Pitch"], pan: TTT.parameters["Tie ME Pan"]};//Can be any ME file.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//Main Variables//Don't alter or things will break.//
TTT.page = 0;
TTT.waitCount = 0;
TTT.active = false;
TTT.playerSelected = false;
TTT.difficulty = 0;
TTT.dVal = [[55,15,15],[35,25,35],[20,35,25],[15,45,25]];
TTT.win = 0;
TTT.phase = 0;
TTT.winTotal = 0;
TTT.lossTotal = 0;
TTT.board_layout = [0,0,0,0,0,0,0,0,0];
TTT.board_layout_base = [0,0,0,
						 0,0,0,
						 0,0,0];
//


//Game Start
TTT.Main = function(){
	SceneManager.push(TTT_Scene);
	Graphics.update;
	Input.update;
};


//Plugin Command start version.
var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_Game_Interpreter_pluginCommand.call(this, command, args);
	if (command === 'TTT' && args[0] === 'Start') {
		TTT.Main();
	}
};



//Game Window Proper
function TTT_Window() {
    this.initialize.apply(this, arguments);
}


TTT_Window.prototype = Object.create(Window_Selectable.prototype);
TTT_Window.prototype.constructor = TTT_Window;


TTT_Window.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._index = -1;
    this._cursorFixed = false;
    this._cursorAll = false;
    this._stayCount = 0;
    this._helpWindow = null;
    this._handlers = {};
    this._touching = false;
    this._scrollX = 0;
    this._scrollY = 0;
	TTT.active = true;
	TTT.playerSelected = false;	
	this.resetVar();
	this.drawAllItems();
    this.deactivate();
};


TTT_Window.prototype.resetVar = function(){
	TTT.playerSelected = false;
	TTT.win = 0;
	TTT.phase = 0;
	TTT.board_layout = [0,0,0,0,0,0,0,0,0];
};


TTT_Window.prototype.cursorDown = function(wrap) {
    var index = this.index();
    var maxItems = this.maxItems();
    var maxCols = this.maxCols();
    this.select((index + maxCols) % maxItems);
};


TTT_Window.prototype.cursorUp = function(wrap) {
    var index = this.index();
    var maxItems = this.maxItems();
    var maxCols = this.maxCols();
    this.select((index - maxCols + maxItems) % maxItems);
};


TTT_Window.prototype.cursorRight = function(wrap) {
    var index = this.index();
    var maxItems = this.maxItems();
    var maxCols = this.maxCols();
    this.select((index + 1) % maxItems);
};


TTT_Window.prototype.cursorLeft = function(wrap) {
    var index = this.index();
    var maxItems = this.maxItems();
    var maxCols = this.maxCols();
	this.select((index - 1 + maxItems) % maxItems);
};


TTT_Window.prototype.processOk = function(index) {
	index = this._index;
	var check = this.tileCheck(index);
	active = TTT.active;
    if (check && active === true) {
        this.playOkSound();
        this.updateInputData();		
		this._stayCount = 0;
		this.ensureCursorVisible();
		this.updateCursor();
		this.callUpdateHelp();

		var check = this.tileCheck(index);
		if(check){
			TTT.board_layout[index] = TTT.phase+1;
			TTT.playerSelected = true;
		};
		this.refresh();
    } else {
        this.playBuzzerSound();
    }
};


TTT_Window.prototype.processCancel = function() {
    SoundManager.playCancel();
    this.updateInputData();
    this.deactivate();
    this.callCancelHandler();
	$gameSystem.replayBgm();
};


TTT_Window.prototype.tileCheck = function(index) {
	if(TTT.board_layout[index] === 0){
		return true;
	} else {
		return false;
	}
};


TTT_Window.prototype.winCheck = function(){
	var win_check = TTT.line_match(TTT.phase);
	this.contents.clear();
	this.drawAllItems();
	if(win_check != 0 && TTT.active === true){
		if (win_check === 1 && TTT.phase === 0){
			$gameVariables.setValue(TTT.winCount, $gameVariables.value(TTT.winCount)+1);
			$gameVariables.setValue(TTT.permanentWinCount, $gameVariables.value(TTT.permanentWinCount)+1);
			win_text = 'Player Win!';
			$gameMessage.add(win_text);
			TTT.active = false;
			if(TTT.playME === true){
				var me = TTT.winME;
				AudioManager.playMe(me);
			}
			TTT.waitCount = 180;

		} else if(win_check === 2 && TTT.phase === 1 && TTT.active === true){
			$gameVariables.setValue(TTT.lossCount, $gameVariables.value(TTT.lossCount)+1);
			$gameVariables.setValue(TTT.permanentLossCount, $gameVariables.value(TTT.permanentLossCount)+1);
			win_text = 'Opponent Win!';
			$gameMessage.add(win_text);
			TTT.active = false;
			if(TTT.playME === true){
				var me = TTT.lossME;
				AudioManager.playMe(me);
			}
			TTT.waitCount = 180;			
		}
	};
	
	if(win_check === 0 && !TTT.board_layout.includes(0) && active === true){
		win_text = 'Tie! No Available Moves Left.';
		$gameMessage.add(win_text);
		TTT.active = false;
		if(TTT.playME === true){
			var me = TTT.tieME;
			AudioManager.playMe(me);
		}
		TTT.waitCount = 180;
	};
	
};


TTT_Window.prototype.maxCols = function() {
    return 3;
};


TTT_Window.prototype.maxItems = function() {
    return 9;
};


TTT_Window.prototype.itemWidth = function() {
	return TTT.iconSize;
};


TTT_Window.prototype.itemHeight = function() {
	return TTT.iconSize;
};


TTT_Window.prototype.spacing = function() {
    return 12;
};


TTT_Window.prototype.drawIcon = function(iconIndex, x, y) {
    var bitmap = ImageManager.loadPicture(TTT.gameIcons);
    var pw = TTT.iconSize;
    var ph = TTT.iconSize;
	iconWidthCount = bitmap.width / TTT.iconSize;
    var sx = iconIndex % iconWidthCount * pw;
    var sy = Math.floor(iconIndex / iconWidthCount) * ph;
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y);
};


TTT_Window.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
	x = 0;
	y = 0;
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;

        if (index < this.maxItems()) {
			var icon = 0;
			icon = Number(TTT.iconsUsed[TTT.board_layout[i]]);
			this.drawIcon(icon,x,y);
			x1 = i+1;
			x += TTT.iconSize + this.spacing();
			if(x1 % this.maxCols() === 0){
				x=0;
				y+=TTT.iconSize;
			}
			
        }
    }
};


TTT_Window.prototype.startWait = function(count) {
    this._waitCount = count;
};


TTT_Window.prototype.refresh = function() {
    if (this.contents) {
        this.contents.clear();
        this.drawAllItems();
    }
	
};


TTT_Window.prototype.update = function() {
    Window_Selectable.prototype.update.call(this);
	
	//game main loop
	if(TTT.phase === 0 && TTT.active){
		this.player_turn();
	}
	if(TTT.phase === 1 && TTT.active){
		this.opponent_turn();
	}
	
	if(!TTT.active){
		this.deactivate();
		TTT.page = 0;
	}
};


TTT_Window.prototype.player_turn = function(){//Actually just a follow through function in the window update, processOk is the main player section
	this.winCheck();
	var win_check = TTT.line_match(TTT.phase);
	if(win_check == 0 && TTT.playerSelected == true){
		TTT.phase = 1;
		TTT.playerSelected = false;
		this.contents.clear();
		this.drawAllItems();
		this.refresh();
		TTT.waitCount += 20;
	}

};



TTT_Window.prototype.opponent_turn = function(){//Opponent AI here
	while(TTT.phase === 1){
		a = 0;
		totalScore = [[0,0],[1,0],[2,0],
		              [3,0],[4,0],[5,0],
					  [6,0],[7,0],[8,0]];
		
		for(i=0;i<totalScore.length;i++){
			if(TTT.board_layout[i] !== 0){
				totalScore[i][1] = -500;
			} else {
				rng = Math.randomInt(TTT.dVal[TTT.difficulty][0])+5;
				totalScore[i][1] += this.checkHorizontalLine(Math.floor(i / this.maxCols()));
				totalScore[i][1] += this.checkVerticalLine(i % this.maxCols());			
				if(i % (TTT.board_layout.length - 1) == 0){
					totalScore[i][1] += this.checkDiagonalLine(0);
				} else if(i == (this.maxCols()-1) || i == (this.maxCols()-1) * this.maxCols()){
					totalScore[i][1] += this.checkDiagonalLine(1);
				} else if(i == (TTT.board_layout.length - 1) / 2){
					totalScore[i][1] += Math.round((this.checkDiagonalLine(0) + this.checkDiagonalLine(1)) * 0.75);
				}
				totalScore[i][1] += rng;			
			}
		}
		highestScore = totalScore.sort(function(a, b){return b[1]-a[1]});
		TTT.board_layout[highestScore[0][0]] = TTT.phase+1;
		this.contents.clear();
		this.drawAllItems();
		this.refresh();
		this.winCheck();
		TTT.phase = 0;
		TTT.waitCount += 20;
		};	
};


TTT_Window.prototype.checkHorizontalLine = function(row){
	var sum = 0;
	var pWin = 1+TTT.difficulty;
	var oWin = 1+TTT.difficulty;
	
	for(s=0;s<this.maxCols();s++){
		if(TTT.board_layout[s+(row * this.maxCols())] == 0){
			sum += 10;
		}
		if(TTT.board_layout[s+(row * this.maxCols())] == 1){
			sum += (TTT.dVal[TTT.difficulty][1] * pWin);
			pWin += 3;
		}
		if(TTT.board_layout[s+(row * this.maxCols())] == 2){
			sum += (TTT.dVal[TTT.difficulty][2] * oWin);
			oWin += 3;
		}
	}
	return sum;
};

TTT_Window.prototype.checkVerticalLine = function(col){
	var sum = 0;
	var pWin = 1+TTT.difficulty;
	var oWin = 1+TTT.difficulty;
	for(s=0;s<this.maxCols();s++){
		if(TTT.board_layout[s * this.maxCols() + col] == 0){
			sum += 10;
		}
		if(TTT.board_layout[s * this.maxCols() + col] == 1){
			sum += (TTT.dVal[TTT.difficulty][1] * pWin);
			pWin += 3;
		}
		if(TTT.board_layout[s * this.maxCols() + col] == 2){
			sum += (TTT.dVal[TTT.difficulty][2] * oWin);
			oWin += 3;
		}
	}
	return sum;
};

TTT_Window.prototype.checkDiagonalLine = function(diag){
	var sum = 0;
	var pWin = 1+TTT.difficulty;
	var oWin = 1+TTT.difficulty;
	if(diag == 0){
		for(s=0;s<this.maxCols();s++){
			if(TTT.board_layout[s * this.maxCols() + s] == 0){
				sum += 10;
			}
			if(TTT.board_layout[s * this.maxCols() + s] == 1){
				sum += (TTT.dVal[TTT.difficulty][1] * pWin);
				pWin += 3;
			}
			if(TTT.board_layout[s * this.maxCols() + s] == 2){
				sum += (TTT.dVal[TTT.difficulty][2] * oWin);
				oWin += 3;
			}
		}
	}
	
	if(diag == 1){
		for(s=0;s<this.maxCols();s++){
			if(TTT.board_layout[(this.maxCols() - 1) * (s+1)] == 0){
				sum += 10;
			}
			if(TTT.board_layout[(this.maxCols() - 1) * (s+1)] == 1){
				sum += (TTT.dVal[TTT.difficulty][1] * pWin);
				pWin += 3;
			}
			if(TTT.board_layout[(this.maxCols() - 1) * (s+1)] == 2){
				sum += (TTT.dVal[TTT.difficulty][2] * oWin);
				oWin += 3;
			}
		}
	}	
	return sum;
};

//game start window
function TTT_Window_Game_Start() {
    this.initialize.apply(this, arguments);
}

TTT_Window_Game_Start.prototype = Object.create(Window_Command.prototype);
TTT_Window_Game_Start.prototype.constructor = TTT_Window_Game_Start;


TTT_Window_Game_Start.prototype.initialize = function(x, y) {
    this.clearCommandList();
    this.makeCommandList();
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
    this.select(0);
	this.setHandler('Start New Game', this.onPersonalOk.bind(this));
	this.setHandler('Reset Score', this.onPersonalOk.bind(this));
	this.setHandler('End Game', this.onPersonalOk.bind(this));
    this.activate();
};


TTT_Window_Game_Start.prototype.makeCommandList = function() {
	this._list.push({name:'Start New Game', symbol:'Start New Game',enabled:true});
	this._list.push({name:'Reset Score', symbol:'Reset Score',enabled:true});
	this._list.push({name:'End Game', symbol:'End Game',enabled:true});
};


TTT_Window_Game_Start.prototype.callOkHandler = function() {
    var symbol = this.currentSymbol();
    if (this.isHandled(symbol)) {
        this.callHandler(symbol);
    } else if (this.isHandled('ok')) {
        Window_Selectable.prototype.callOkHandler.call(this);
    } else {
        this.activate();
    }
};


TTT_Window_Game_Start.prototype.onPersonalOk = function() {
    switch (this.currentSymbol()) {
    case 'Start New Game':
		TTT_Window.prototype.resetVar();
		TTT_Window.prototype.drawAllItems();
		TTT.page = 2;
		TTT.active = true;
		TTT.waitCount = 60;
        break;
    case 'Reset Score':
		$gameVariables.setValue(TTT.winCount, 0);
		$gameVariables.setValue(TTT.lossCount, 0);
        break;
    case 'End Game':
		TTT_Scene.prototype.exit();
        break;
    }
	this.refresh();
	this.update();
	this.activate();
};


TTT_Window_Game_Start.prototype.onPersonalCancel = function() {//Doesn't really do anything. This is to null base commands.
};



//game difficulty window
function TTT_Window_Game_Difficulty() {
    this.initialize.apply(this, arguments);
}

TTT_Window_Game_Difficulty.prototype = Object.create(Window_Command.prototype);
TTT_Window_Game_Difficulty.prototype.constructor = TTT_Window_Game_Difficulty;


TTT_Window_Game_Difficulty.prototype.initialize = function(x, y) {
    this.clearCommandList();
    this.makeCommandList();
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
    this.select(0);
	this.setHandler('Easy', this.onPersonalOk.bind(this));
	this.setHandler('Medium', this.onPersonalOk.bind(this));
	this.setHandler('Hard', this.onPersonalOk.bind(this));
	this.setHandler('Impossible', this.onPersonalOk.bind(this));
	this.setHandler('Back', this.onPersonalOk.bind(this));
    this.activate();
};


TTT_Window_Game_Difficulty.prototype.makeCommandList = function() {
	this._list.push({name:'Easy', symbol:'Easy',enabled:true});
	this._list.push({name:'Medium', symbol:'Medium',enabled:true});
	this._list.push({name:'Hard', symbol:'Hard',enabled:true});
	this._list.push({name:'Impossible', symbol:'Impossible',enabled:true});
	this._list.push({name:'Back', symbol:'Back',enabled:true});
};


TTT_Window_Game_Difficulty.prototype.callOkHandler = function() {
    var symbol = this.currentSymbol();
    if (this.isHandled(symbol)) {
        this.callHandler(symbol);
    } else if (this.isHandled('ok')) {
        Window_Selectable.prototype.callOkHandler.call(this);
    } else {
        this.activate();
    }
};


TTT_Window_Game_Difficulty.prototype.onPersonalOk = function() {
    switch (this.currentSymbol()) {
    case 'Easy':
		TTT.difficulty = 0;
		TTT_Window.prototype.resetVar();
		TTT_Window.prototype.drawAllItems();
		a = Math.round((Math.randomInt(100) + 1 + Math.randomInt(100) + 1) / 2);
		if(a < 51){
			TTT.phase = 1;
			$gameMessage.add('Opponent moves first!');
		}
		TTT.page = 1;
		TTT.active = true;
		TTT.waitCount = 60;
        break;
    case 'Medium':
		TTT.difficulty = 1;
		TTT_Window.prototype.resetVar();
		TTT_Window.prototype.drawAllItems();
		a = Math.randomInt(100) + 1;
		if(a < 51){
			TTT.phase = 1;
			$gameMessage.add('Opponent moves first!');
		}
		TTT.page = 1;
		TTT.active = true;
		TTT.waitCount = 60;
        break;
    case 'Hard':
		TTT.difficulty = 2;
		TTT_Window.prototype.resetVar();
		TTT_Window.prototype.drawAllItems();
		a = Math.randomInt(100) + 1;
		if(a < 51){
			TTT.phase = 1;
			$gameMessage.add('Opponent moves first!');
		}
		TTT.page = 1;
		TTT.active = true;
		TTT.waitCount = 60;
        break;
	case 'Impossible':
		TTT.difficulty = 3;
		TTT_Window.prototype.resetVar();
		TTT_Window.prototype.drawAllItems();
		a = Math.randomInt(100) + 1;
		if(a < 51){
			TTT.phase = 1;
			$gameMessage.add('Opponent moves first!');
		}
		TTT.page = 1;
		TTT.active = true;
		TTT.waitCount = 60;
        break;
	case 'Back':
		TTT.page = 0;
		TTT.active = false;
		TTT.waitCount = 60;
        break;
    }
	this.refresh();
	this.update();
	this.activate();
};


TTT_Window_Game_Difficulty.prototype.onPersonalCancel = function() {//Doesn't really do anything. This is to null base commands.
	TTT.page = 0;
};




//Window Statistics to handle win/loss text on top
function Window_Statistics() {
    this.initialize.apply(this, arguments);
}


Window_Statistics.prototype = Object.create(Window_Base.prototype);
Window_Statistics.prototype.constructor = Window_Statistics;


Window_Statistics.prototype.initialize = function(x, y, width, height) {	
	Window.prototype.initialize.call(this);
    this.loadWindowskin();
    this.move(x, y, width, height);
    this.updatePadding();
    this.updateBackOpacity();
    this.updateTone();
    this.createContents();
    this._opening = false;
    this._closing = false;
    this._dimmerSprite = null;
	
	var n1 = $gameVariables.value(TTT.winCount);
	var n2 = $gameVariables.value(TTT.lossCount);
	this._text = '   '+TTT.gameName+'\n Wins: '+n1.toString()+' Losses: '+n2.toString();
	this.setText(this._text);
};


Window_Statistics.prototype.update = function() {
    Window_Base.prototype.update.call(this);
	var n1 = $gameVariables.value(TTT.winCount);
	var n2 = $gameVariables.value(TTT.lossCount);
	this._text = '   '+TTT.gameName+'\n Wins: '+n1.toString()+' Losses: '+n2.toString();
	this.setText(this._text);
	this.refresh();
};

Window_Statistics.prototype.setText = function(text) {
    if (this._text !== text) {
        this._text = text;
        this.refresh();
    }
};

Window_Statistics.prototype.clear = function() {
    this.setText('');
};

Window_Statistics.prototype.setItem = function(item) {
    this.setText(item ? item.description : '');
};

Window_Statistics.prototype.refresh = function() {
    this.contents.clear();
    this.drawTextEx(this._text, 0,0);
};


//Scene info
function TTT_Scene() {
	this.initialize.apply(this, arguments);
}


TTT_Scene.prototype = Object.create(Scene_MenuBase.prototype);
TTT_Scene.prototype.constructor = TTT_Scene;


TTT_Scene.prototype.initialize = function() {
	Scene_MenuBase.prototype.initialize.call(this);
	this._waitCount = 0;
};


TTT_Scene.prototype.create = function() {
	Scene_MenuBase.prototype.create.call(this);
	TTT.page = 0;
	
	if(TTT.displayBackground){
		name = TTT.background;
		this.background = new Sprite(ImageManager.loadPicture(name));
		this.addChild(this.background);
	}
	
	this.createWindowLayer();
	
	this.win_window = new Window_Message();
	this.addWindow(this.win_window);
	this.win_window.windowHeight = 200;
	this._waitCount = 30;
	
	if(TTT.playMusic == true){
		$gameSystem.saveBgm();
		var music1 = TTT.music1;
		AudioManager.playBgm(music1);
	}
	
	var widthX = TTT.iconSize * TTT_Window.prototype.maxCols() + TTT_Window.prototype.spacing() * (TTT_Window.prototype.maxCols() + 2);
	this.ttt_game_window = new TTT_Window(SceneManager._screenWidth / 2  - widthX / 2, SceneManager._screenHeight / 2 - widthX / 2, widthX, widthX - TTT_Window.prototype.spacing() * 2);
	this.ttt_game_window.setHandler('ok', this.popScene.bind(this));
	this.addWindow(this.ttt_game_window);
	this.ttt_game_window.resetVar();
	this.ttt_game_window.hide();

	this.ttt_game_start_window = new TTT_Window_Game_Start(SceneManager._screenWidth / 2 - 120, SceneManager._screenHeight / 2 - 72);
	this.addWindow(this.ttt_game_start_window);
	this.ttt_game_start_window.hide();
	
	this.ttt_game_difficulty_window = new TTT_Window_Game_Difficulty(SceneManager._screenWidth / 2 - 120, SceneManager._screenHeight / 2 - 72);
	this.addWindow(this.ttt_game_difficulty_window);
	this.ttt_game_start_window.hide()
	
	this.ttt_window_statistics = new Window_Statistics(SceneManager._screenWidth / 2 - 150, 0, 300, 100);
	this.addWindow(this.ttt_window_statistics);
	this.ttt_window_statistics.show();
	this.ttt_window_statistics.activate();
	
	while(this._waitCount > 0){
		this.update();
	}
	this.update();
};


TTT_Scene.prototype.exit = function() {
	if(TTT.playMusic == true){
		$gameSystem.replayBgm();
	}
	this.popScene();

	
};


TTT_Scene.prototype.xt = function() {
	if(TTT_Window.prototype.win_text != null){
		this.win_window.drawText(win_text,100,50, 555,"center");
	}
};


TTT_Scene.prototype.update = function() {
	this.updateFade();
	this.updateChildren();
	this.updateWaitCount();
	this.ttt_window_statistics.update();
		
	if(TTT.waitCount > 0){
		this._waitCount += TTT.waitCount;
		TTT.waitCount = 0;
	}
	
	while(this._waitCount > 0 && !$gameMessage.isBusy()){
		this.update();
	}
	
	if(TTT.page === 0 && this._waitCount == 0  && !$gameMessage.isBusy()){
		this.ttt_game_start_window.activate();
		this.ttt_game_start_window.show();
		this.ttt_game_window.deactivate();
		this.ttt_game_window.hide();
		this.ttt_game_difficulty_window.deactivate();
		this.ttt_game_difficulty_window.hide();
	}
	
	if(TTT.page === 1 && this._waitCount == 0  && !$gameMessage.isBusy()){
		this.ttt_game_window.activate();
		this.ttt_game_window.show();
		this.ttt_game_start_window.deactivate();
		this.ttt_game_start_window.hide();
		this.ttt_game_difficulty_window.deactivate();
		this.ttt_game_difficulty_window.hide();
	}

	if(TTT.page === 2 && this._waitCount == 0  && !$gameMessage.isBusy()){
		this.ttt_game_window.deactivate();
		this.ttt_game_window.hide();
		this.ttt_game_start_window.deactivate();
		this.ttt_game_start_window.hide();
		this.ttt_game_difficulty_window.activate();
		this.ttt_game_difficulty_window.show();
	}

};


TTT_Scene.prototype.isBusy = function() {
	return ((this._messageWindow && this._messageWindow.isClosing()) ||
			this._waitCount > 0 || this._encounterEffectDuration > 0 ||
			Scene_Base.prototype.isBusy.call(this));
};


TTT_Scene.prototype.updateWaitCount = function() {
	if (this._waitCount > 0) {
		this._waitCount--;
		return true;
	}
	return false;
};


TTT.line_match = function(phase){
	var x = phase + 1;
	var potential_matches = [
							 [x,x,x,
							  5,5,5,
							  5,5,5],
							 
							 [x,5,5,
							  x,5,5,
							  x,5,5],
							  
							 [x,5,5,
							  5,x,5,
							  5,5,x],
							  
							 [5,x,5,
							  5,x,5,
							  5,x,5],
							  
							 [5,5,x,
							  5,5,x,
							  5,5,x],
							  
							 [5,5,x,
							  5,x,5,
							  x,5,5],
							  
							 [5,5,5,
							  x,x,x,
							  5,5,5],
							  
							 [5,5,5,
							  5,5,5,
							  x,x,x]];
	
	for(i=0;i<potential_matches.length;i++){
		points = 0;
		for(j=0;j < potential_matches[i].length;j++){
			if(potential_matches[i][j] !== 5 && potential_matches[i][j] === TTT.board_layout[j]){
				points += 1;
			}
			
			if(points === 3){
				win = TTT.phase+1;
				return win
			}
		}
	}
	
	return 0;
	
};