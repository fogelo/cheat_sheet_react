import React, {ChangeEvent, FormEvent, useState} from 'react';
import {
    Button,
    Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,
    TextField,
    Typography
} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Create = () => {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('todos')

    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!title) {
            setTitleError(true)
        }
        if (!details) {
            setDetailsError(true)
        }
        if (title && details) {

            // axios.post('http://localhost:8000/notes', {title, details, category})
            //     .then(r => {
            //         debugger
            //     })

            fetch('http://localhost:8000/notes', {
                method: 'post',
                headers: {"content-type": "application/json"},
                body: JSON.stringify({title, details, category})
            }).then(r => navigate('/the-net-ninja/notes'))

        }
        console.log(title, details, category)
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

                <FormControl>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.currentTarget.value)}>
                        <FormControlLabel value="money" control={<Radio/>} label="Money"/>
                        <FormControlLabel value="todos" control={<Radio/>} label="Todos"/>
                        <FormControlLabel value="remainders" control={<Radio/>} label="Remainders"/>
                        <FormControlLabel value="work" control={<Radio/>} label="Work"/>
                    </RadioGroup>
                </FormControl>


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