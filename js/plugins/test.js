//=============================================================================
// Extra maps
// Zeriab_ExtraMaps.js
// Last Updated: 2015.08.23
//=============================================================================

/*:
 * @plugindesc Allows using more than 999 maps
 * @author Zeriab
 *
 * @help
 *
 * Plugin Command:
 *   ExtraMaps set church   # Use maps from the specific "church" subfolder (data/church/Map003.json)
 *   ExtraMaps reset        # Use maps from the default folder (data/Map003.json)
 *
 *   Next transfer will use maps from the new folder
 */

Game_Interpreter.prototype.pluginCommand = function(command, args){
    if(command == "test"){
        $gameMessage.add(args[0]);
    }
}
