 function msgBoard(messageBoardName){
    this.messageBoardName = messageBoardName,
    this.messages = [],
    this.putMessage = function (aString) {this.messages[this.messages.length]=aString},
    this.printMessage = function () {for(let i = 0;i<=this.messages.length-1;i++) console.log(this.messages[i])},
    this.register = function (f) {let niceMessage = [f]},
    this.sendAndNotify = function (message) {f(this.messageBoardName,message)} 
}

let board2 = new msgBoard("opgaveregning");
console.log(board2.messageBoardName);

board2.putMessage("DTG: 7 timer");
board2.printMessage();
board2.sendAndNotify("hello");
board2.register("helo");

function f(msgBoardName,message)
{
    console.log("You have received a message from " + msgBoardName + ":");
    console.log(message);
}


