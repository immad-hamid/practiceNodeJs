const EventEmiter = require('events');
const emitter = new EventEmiter();

// Register a listener "messageLoggged"
emitter.on('messageLoggged', (arg) => {
    console.log('Listener Called', arg);
})

// Rasing an event "messageLoggged"
emitter.emit('messageLoggged', { id: 1, url: 'https//'});


// Register a listener "logging"
emitter.addListener('logging', (arg) => {
    console.log(arg.data);
})

// Rasing an event "logging"
emitter.emit('logging', { data: 'Our Message' });