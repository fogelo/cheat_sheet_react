import React, {useEffect, useState} from 'react';
import {Container, Grid} from '@mui/material';
import Note from './Note';

const Notes = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    const handleDelete = async (id: number) => {
        await fetch('http://localhost:8000/notes/' + id, {
            method: 'DELETE'
        })
        setNotes(notes.filter((n: any) => n.id !== id))
    }

    return (
        <Container>
            <Grid container spacing={3}>
                {notes.map((note: any) => (
                    <Grid item key={note.id} xs={12} md={6} lg={4}>
                        <Note note={note} handleDelete={handleDelete}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Notes;