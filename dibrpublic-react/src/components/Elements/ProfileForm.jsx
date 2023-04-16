import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { visuallyHidden } from '@mui/utils';
import styled from "styled-components";
import PlusSign from "../../assets/svg/PlusSign";

import { ColorPalet1, ColorPalet2, ColorPalet3, ColorPalet4 } from '../../assets/colors/colorpalet';
import { Button } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
import avatar1 from '../../assets/img/avatar1.jpg'
import avatar2 from '../../assets/img/avatar2.jpg'
import avatar3 from '../../assets/img/avatar3.jpg'
import avatar4 from '../../assets/img/avatar4.jpg'
import avatar5 from '../../assets/img/avatar5.jpg'
import avatar6 from '../../assets/img/avatar6.jpg'
import avatar7 from '../../assets/img/avatar7.jpg'
import avatar8 from '../../assets/img/avatar8.jpg'
import avatar9 from '../../assets/img/avatar9.jpg'
import { TextField, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import { useState } from 'react';
import MultipleSelectChip from './MultipleSelectChip';
import { Image } from '@mui/icons-material';
import ProfileFormGeneral from './ProfileFormGeneral';
import ProfileFormPreferences from './ProfileFormPreferences';
import ProfileFormDocuments from './ProfileFormDocuments';

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 500,
    label: '500,-',
  },
  {
    value: 1000,
    label: '1000,-',
  },
  {
    value: 1500,
    label: '1500,-',
  },
  {
    value: 2000,
    label: '2000,-',
  },{
    value: 2500,
    label: '2500,-',
  }
];

export default function ProfileForm() {
    const [firstName, setFirstName] = useState('Sebas')
    const [lastName, setLastName] = useState('Janssen')
    const [email, setEmail] = useState('SebasJ97@gmail.com')
    const [dateOfBirth, setDateOfBirth] = useState('1997-03-16')
    const [occupation, setOccupation] = useState('Leraar')
    const [description, setDescription] = useState('Hallo!\nWij zijn Sebas en Robyn, een jong stel uit Utrecht die opzoek zijn naar ons nieuwe plekje.\nBeide werken wij full-time en houden van de reuring van een grote stad zoals Utrecht.')
    const [postalcode, setPostalCode] = useState('1234AB')
    const [adress, setAdress] = useState('Dibrweg 123')
    const [city, setCity] = useState('Utrecht')

    const [isClicked, setIsClicked] = useState(false);

    const handleAvatarClick = () => {
      setIsClicked(true);
    };
  
    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth) 
    }

    const [value, setValue] = React.useState([800, 1400]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

   return (
    <Wrapper>
        <Box sx={{ width: '100%'}}>
        <StyledPaper sx={{ width: '100%'}}>
          <Typography variant='h4'> <Box sx={{ fontWeight: 'bold'}}>Dibr Profiel</Box></Typography>
          <Box sx={{ml : 3}} id="UwProfiel">
            <ProfileFormGeneral/>
            <ProfileFormPreferences/>
            <ProfileFormDocuments/>
          </Box>
        </StyledPaper>
        </Box>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 100px;
`;

const StyledPaper = styled(Paper)`
  padding: 12px;
`;