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
import MultipleSelectChip from '../Elements/MultipleSelectChip';
import { Image } from '@mui/icons-material';
import ProfileFormGeneral from '../Elements/ProfileFormGeneral';
import ProfileFormPreferences from '../Elements/ProfileFormPreferences';
import ProfileFormDocuments from '../Elements/ProfileFormDocuments';

export default function MyPreferencesPage() {
  return (
    <Wrapper id="myprofile">
    <div className="whiteBg">
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">Zoekwensen</h1>
        </HeaderInfo>
        <div>
          <ProfileFormPreferences/>
        </div>
      </div>
    </div>
  </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin-top: 40px;
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;