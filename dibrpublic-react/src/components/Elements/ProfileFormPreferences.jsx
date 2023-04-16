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

const oppervlaktes = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 100,
    label: '100',
  },
  {
    value: 150,
    label: '150',
  },
  {
    value: 200,
    label: '200',
  }
];

const AantalSlaapkamers = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2 of meer',
  },
  {
    value: 3,
    label: '3 of meer',
  },
  {
    value: 4,
    label: '4 of meer',
  },{
    value: 5,
    label: '5 of meer',
  }
];

const AantalBadkamers = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2 of meer',
  },
  {
    value: 3,
    label: '3 of meer',
  }
];

const EnergyLabels = [
  {
    value: 1,
    label: 'A+',
  },
  {
    value: 2,
    label: 'B+',
  },
  {
    value: 3,
    label: 'C+',
  },
  {
    value: 4,
    label: 'D+',
  },
  {
    value: 5,
    label: 'geen voorkeur',
  }
];

export default function ProfileFormPreferences() {
    const [price, setPrice] = React.useState([800, 1400]);
    const [bathrooms, setBathrooms] = React.useState('');

    const handleChangeBathroom = (event) => {
      setBathrooms(event.target.value);
    };

    const handleChangePrice = (event, newValue) => {
      setPrice(newValue);
    };

    const [valueOppervlakte, setOppervlakteValue] = React.useState([60, 120]);

    const handleOppervlakteChange = (event, newValue) => {
      setOppervlakteValue(newValue);
    };

   return (
    <Wrapper>
        <Box sx={{pb : 2}}>
          <Typography sx={{ color: 'secondary'}} variant='h5'>Uw zoekwensen</Typography>
          </Box>
          <Stack spacing={4} direction="row" >
          <Box sx={{ width: 500}} id="left-box">
          <MultipleSelectChipTypeWoning title="Type woning"/> 
          <MultipleSelectChip title="Stad (buurt)"/>
          <Box sx={{ width: 450, ml: 1 }}>
          <Typography id="input-slider" gutterBottom>
            Prijs
          </Typography>
          <Slider
            aria-label="Price"
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={100}
            marks={marks}
            min={500}
            max={2500}
            value={price}
            onChange={handleChangePrice}
          />
          </Box>
          
         
          <Box sx={{ width: 450, ml : 1 }}>
          <Typography id="input-slider" gutterBottom>
            Gebruiksoppervlakte wonen (in vierkante meter)
          </Typography>
          <Slider
            aria-label="m^2"
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks={oppervlaktes}
            min={0}
            max={200}
            value={valueOppervlakte}
            onChange={handleOppervlakteChange}
          />
          </Box>

        </Box>
        <Box sx={{ width: 500}} id="right-box">
          
          <Autocomplete
              disablePortal
              id="aantal-slaapkamers"
              options={AantalSlaapkamers}
              sx={{ width: 500 ,mb:2}}
              renderInput={(params) => <TextField {...params} label="Aantal slaapkamers" />}
            />
            <Autocomplete
              disablePortal
              id="aantal-badkamers"
              options={AantalBadkamers}
              sx={{ width: 500, mb:2 }}
              renderInput={(params) => <TextField {...params} label="Aantal badkamers" />}
            />
            <MultipleSelectChipBuitenruimte sx={{mb : 4}} title="Buitenruimte"/>
            <Autocomplete
              disablePortal
              id="energy-label"
              options={EnergyLabels}
              sx={{ width: 500, mb:2 }}
              renderInput={(params) => <TextField {...params} label="Energie label" />}
            />
            <FormControlLabel
              value="pets"
              control={<Checkbox />}
              label="Huisdieren"
              labelPlacement="start"
            />
        </Box>
      </Stack>
      
    </Wrapper>
  );
}

const Wrapper = styled.section`
`;

