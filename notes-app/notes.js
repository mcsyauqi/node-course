const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) =>
        note.title !== title)

    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No matching note!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.green.inverse('Your notes...\n'))

    notes.forEach(note => {
        console.log(note.title)
    });

}

const readNote = (title) => {
    const notes = loadNotes()

    const theNote = notes.find((note) => note.title === title)

    if (theNote) {
        console.log(chalk.inverse.green(theNote.title))
        console.log(theNote.body)
    } else {
        console.log(chalk.red.inverse('Ngga ada!'))
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}