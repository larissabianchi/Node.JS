const color = require('chalk')
const fs = require('fs')

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json') 
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    }catch (e){
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const addNote = (title, text) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title)

    if (!duplicateNotes){
        notes.push({
            title: title,
            text: text 
        })
    
        saveNotes(notes)
        console.log(color.green.bold('Note successfully added!'))
    }else{
        console.log(color.red.bold('Unable to save note: Duplicate title!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep) 
        console.log(color.green.bold('Note removed successfully!'))    
    } else {
        console.log(color.red.bold('Failed to remove note: Title not found!'))     
    }   
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(color.blue.bold('My notes:'))    
    
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note){
        console.log(color.magenta.bold('Search Results:'))
        console.log(note)
    }else{
        console.log(color.red.bold('Title not found!'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}