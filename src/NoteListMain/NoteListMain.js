import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import './NoteListMain.css'

export default function NoteListMain(props) {
  return (
    <section className='NoteListMain'>
      <ul>
        {props.notes.map(note =>
          <li key={note.id + '-' + note.name}>
            <Note
              key={note.id + '-' + note.folderId}
              removeNote={props.removeNote}
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
          </li>
        )}
      </ul>
      <div className='NoteListMain__button-container'>
        <CircleButton
          tag={Link}
          to='/add-note'
          type='button'
          className='NoteListMain__add-note-button'
        >
          <FontAwesomeIcon icon='plus' />
          <br />
          Note
        </CircleButton>
      </div>
    </section>
  )
}

NoteListMain.defaultProps = {
  notes: [],
}

NoteListMain.propTypes = {
  notes: PropTypes.array
};