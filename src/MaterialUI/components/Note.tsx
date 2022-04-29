import React, {FC} from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography
} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

type NoteT = {
    id: number
    title: string
    details: string
    category: string
}

type NotePT = {
    note: NoteT
    handleDelete: (id: number) => void
}

const Note: FC<NotePT> = ({note, handleDelete}) => {
    return (
        <Card elevation={3}>
            <CardHeader
                action={
                    <IconButton>
                        <DeleteOutlineOutlinedIcon onClick={() => handleDelete(note.id)}/>
                    </IconButton>
                }
                title={note.title}
                subheader={`${note.category}, September 14, 2016`}

            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Note;