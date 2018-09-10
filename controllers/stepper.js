const config = require('../config/config.js')


module.exports = {

    stringToStepsArray (messageRAW) {  
        //This takes an incoming string and converts it to an array 
        //with the number of Nema 17 spins to perform to turn to the required flap from the starting position.

        let message = this.convertMessage(messageRAW);
        let messageTranslated = [];
    
        for (let char in Array.from(message)) {
            messageTranslated.push(Math.floor((config.stepper.charSet.default.indexOf(message.charAt(char)) + 1) * config.stepper.turnsPerFlip)); //Most of the magic happens here
        }
        
        return messageTranslated;
    },

    convertMessage (message) {

        if (message.length > config.stepper.modules) {
            message = "ERR1";
        }

        //convert strings to uppercase and replace O with 0
        var convertedMessage = message.toUpperCase();
        var convertedMessage = convertedMessage.replace('O', '0');
        return convertedMessage;
    },

    reset () {
        //Move to starting position
    }

}