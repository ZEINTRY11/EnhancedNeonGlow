/**
 * @name DoubleClickReplyOrEdit
 * @version 1.0.0
 * @description Replies to messages when they are double-clicked and edit the message if it's yours.
 * @author ZEIN_TRY
 * @authorId 903955199469695037
 * @website https://github.com/ZEINTRY11
 * @invite gYWSbkhcDy
 * @source https://github.com/ZEINTRY11/DoubleClickReplyOrEdit
 * @updateUrl https://raw.githubusercontent.com/ZEINTRY11/DoubleClickReplyOrEdit/main/DoubleClickReplyOrEdit.plugin.js
 */
/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();

@else@*/
function getName() {
    return "DoubleClickReplyOrEdit";
}

function getDescription() {
    return "Replies to messages when they are double-clicked and edit the message if it's yours.";
}

function getVersion() {
    return "1.0.0";
}

function getAuthor() {
    return "ZEIN_TRY";
}
function pluginLog(msg) {
    const reset = "\x1b[0m";
    const blue = "\x1b[34m";
    const grey = "\x1b[90m";
  
    const message = `[${getName()}] (${getVersion()}) ${msg}`;
  
    const regex = /\[(.*?)\] \((.*?)\) (.*)/;
    const [, repo, version, rest] = message.match(regex);
  
    console.log(`${blue}[${repo}]${reset} ${grey}(${version})${reset} ${rest}`);
  }
module.exports = class DoubleClickReply {
    start() {
        pluginLog("started!")
        this.addDoubleClickListener();
    }

    stop() {
        pluginLog("stoped!")
        this.removeDoubleClickListener();
    }

    addDoubleClickListener() {
        document.addEventListener('dblclick', this.handleDoubleClick);
    }

    removeDoubleClickListener() {
        document.removeEventListener('dblclick', this.handleDoubleClick);
    }

    handleDoubleClick = (event) => {
        try{
        const messageElement = event.target.parentNode;
        const replyButton = messageElement.querySelector(".buttonContainer_ec86aa").querySelector('div[aria-label="Reply"]');
        const editButton = messageElement.querySelector(".buttonContainer_ec86aa").querySelector('div[aria-label="Edit"]');
        if (messageElement) {
            if (replyButton) {
                replyButton.click();
            }
            if(editButton) {
                editButton.click();
            }
        }
    } catch(e) {}
    }
}
/*@end@*/
