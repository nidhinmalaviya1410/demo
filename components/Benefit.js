import React from 'react'
import { useState } from 'react'
import scheduleData from '../Utils/scheduleData'
import { TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Schedule from './Schedule';

function Benefit() {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <div className="flex w-full flex-col md:flex-row md:p-[100px]">
                <div className="flex flex-col px-[35px] justify-center md:w-[50%]">
                    {scheduleData?.map((data, index) => {
                        return (
                            <Schedule data={data} key={index} />
                        )
                    })
                    }
                </div>
                <div className="flex flex-col md:absolute top-[80%] right-[8%] md:w-[30%] bg-slate-800 mx-[20px] md:mx-0">
                    <div className="w-[100%] p-[25px]">
                        <h1 className='text-white text-3xl text-center font-bold'>Schedule an Appointment</h1>
                        <p className='text-white text-1xl text-center'> Here, let visitors know what will happen when they complete your form.</p>
                        <div className='flex flex-col items-center m-2'>
                            <TextField className='mt-3 w-[100%] bg-white' variant="outlined" label="First Name" type="text" />
                            <TextField className='mt-3 w-[100%] bg-white' variant="outlined" label="Last Name" type="text" />
                            <TextField className='mt-3 w-[100%] bg-white' variant="outlined" label="Email" type="email" />
                            <TextField className='mt-3 w-[100%] bg-white' variant="outlined" label="Phone Number" type="text" />
                            <Select
                                className='mt-3 w-[100%]  bg-white'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Type of Appointment"
                                onChange={handleChange}
                            >
                                <MenuItem value="Type of Appointment">Type of Appointment</MenuItem>
                                <MenuItem value="Type1">Type1</MenuItem>
                                <MenuItem value="Type2">Type2</MenuItem>
                                <MenuItem value="Type3">Type3</MenuItem>
                            </Select>
                            <Button className='mt-3 w-[100%] bg-sky' variant="contained">Schedule Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benefit