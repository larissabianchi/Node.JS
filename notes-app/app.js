const color   = require('chalk')
const { string } = require('yargs')
const yargs   = require('yargs')
const notes = require('./notes.js')

//My system version
yargs.version('1.0.0')

yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder: {
        title: {
            describe: 'Note´s title',
            demandOption: true,
            type: 'string'
        },
        text: {
            describe: 'Text you wanna put in your note',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.text)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note´s title which you wanna delete',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder: {
        title: {
            describe: 'Note´s title which you wanna read the details',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()