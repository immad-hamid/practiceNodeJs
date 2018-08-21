const EventEmiter = require('events');
const emitter = new EventEmiter();

// Register a listener
emitter.on('messageLoggged', () => {
    console.log('Listener Called');
})

emitter.emit('messageLoggged');
