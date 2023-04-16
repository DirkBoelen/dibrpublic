import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Utrecht (Vleuten)',
  'Utrecht (Centrum)',
  'Utrecht (Leidsche Rijn)',
  'Utrecht (Vogelbuurt)',
  'Utrecht (Zuilen)',
  'Utrecht (Overvecht)',
  'Utrecht (Kanaleneiland)',
  'Utrecht (Transwijk)',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelectChip = ({sx= {}, title = "Chip" }) => {
  const theme = useTheme();
  const [city, setCity] = React.useState(['Utrecht (Leidsche Rijn)', 'Utrecht (Centrum)', 'Utrecht (Zuilen)', 'Utrecht (Vogelbuurt)']);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCity(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(city);
  };

  return (
    <Wrapper>
       <FormControlStyled sx={{...sx}}>
        <InputLabelStyled id="demo-multiple-chip-label">{title}</InputLabelStyled>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          fullwidth
          value={city}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label={title} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip color="primary" key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, city, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControlStyled>
    </Wrapper>
  );
}

export default MultipleSelectChip;

const Wrapper = styled.section`
  width: 500px;
  margin-bottom: 16px;
`;

const FormControlStyled = styled(FormControl)`
  width: 100%;
`;

const InputLabelStyled = styled(InputLabel)`
  left: 12px !important;
  top: -4px !important;
`;