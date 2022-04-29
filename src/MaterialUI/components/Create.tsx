import React, {ChangeEvent, FormEvent, useState} from 'react';
import {
    Button,
    Container,
    TextField,
    Typography
} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const Create = () => {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!title) {
            setTitleError(true)
        }
        if (!details) {
            setDetailsError(true)
        }
        console.log(title, details)
    }

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
        setTitleError(false)
    }
    const handleDetailsChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDetails(e.currentTarget.value)
        setDetailsError(false)
    }

    return (
        <Container>
            <Typography
                variant={'h6'}
                component={'h2'}
                color={'textSecondary'}
                gutterBottom
            >
                Create a New Note
            </Typography>


            <form noValidate autoComplete={'off'} onSubmit={handleSubmit}>
                <TextField onChange={handleTitleChange}
                           value={title}
                           label="Note Title"
                           variant="outlined"
                           color="primary"
                           required
                           fullWidth
                           margin={'dense'}
                           error={titleError}
                />
                <TextField onChange={handleDetailsChange}
                           value={details}
                           label="Details"
                           variant="outlined"
                           color="primary"
                           required
                           fullWidth
                           margin={'dense'}
                           multiline
                           rows={4}
                           error={detailsError}
                />
                <Button type={'submit'}
                        color={'primary'}
                        variant={'contained'}
                        size={'small'}
                        endIcon={<SendOutlinedIcon/>}
                >
                    send
                </Button>
            </form>


            <br/>
            <AcUnitIcon fontSize={'small'}/>
            <AcUnitIcon fontSize={'medium'}/>
            <AcUnitIcon fontSize={'large'}/>
        </Container>
    );
};

export default Create;