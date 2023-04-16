import * as React from 'react';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import styled from "styled-components";


import { ColorPalet1, ColorPalet2, ColorPalet3, ColorPalet4 } from '../../assets/colors/colorpalet';
import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
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
import MultipleSelectChipTypeWoning from './MultipleSelectChipTypeWoning';
import MultipleSelectChipBuitenruimte from './MultipleSelectChipBuitenruimte';
import { Image } from '@mui/icons-material';
import ProfileFormDocumentsTable from './ProfileFormDocumentsTable';


export default function ProfileFormDocuments() {


  return (
    <Wrapper>
        <Box sx={{pb : 2}}>
          <Typography sx={{ color: 'secondary'}} variant='h5'>Uw bestanden</Typography>
          </Box>
          <Box sx={{ width: 500}} id="right-box">
            <ProfileFormDocumentsTable/>
          </Box>
      
    </Wrapper>
  );
}

const Wrapper = styled.section`
`;

