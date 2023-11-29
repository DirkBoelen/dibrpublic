import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import { visuallyHidden } from "@mui/utils";
import styled from "styled-components";
import PlusSign from "../../assets/svg/PlusSign";

import {
  ColorPalet1,
  ColorPalet2,
  ColorPalet3,
  ColorPalet4,
} from "../../assets/colors/colorpalet";
import { Button } from "@material-ui/core";
import SendIcon from "@mui/icons-material/Send";
import avatar1 from "../../assets/img/avatar1.jpg";
import avatar2 from "../../assets/img/avatar2.jpg";
import avatar3 from "../../assets/img/avatar3.jpg";
import avatar4 from "../../assets/img/avatar4.jpg";
import avatar5 from "../../assets/img/avatar5.jpg";
import avatar6 from "../../assets/img/avatar6.jpg";
import avatar7 from "../../assets/img/avatar7.jpg";
import avatar8 from "../../assets/img/avatar8.jpg";
import avatar9 from "../../assets/img/avatar9.jpg";
import { TextField, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import MultipleSelectChip from "./MultipleSelectChip";
import { Image } from "@mui/icons-material";

export default function ProfileFormGeneral() {
  const [firstName, setFirstName] = useState("Sebas");
  const [lastName, setLastName] = useState("Janssen");
  const [email, setEmail] = useState("SebasJ97@gmail.com");
  const [dateOfBirth, setDateOfBirth] = useState("1997-03-16");
  const [occupation, setOccupation] = useState("Leraar");
  const [description, setDescription] = useState(
    "Hallo!\nWij zijn Sebas en Robyn, een jong stel uit Utrecht die opzoek zijn naar ons nieuwe plekje.\nBeide werken wij full-time en houden van de reuring van een grote stad zoals Utrecht."
  );
  const [postalcode, setPostalCode] = useState("1234AB");
  const [adress, setAdress] = useState("Dibbrweg 123");
  const [city, setCity] = useState("Utrecht");

  const [isClicked, setIsClicked] = useState(false);

  const handleAvatarClick = () => {
    setIsClicked(true);
    console.log("clicked!");
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, dateOfBirth);
  }

  return (
    <Wrapper>
      <Box sx={{ pb: 2 }}>
        <Typography sx={{ color: "secondary" }} variant="h5">
          Algemeen
        </Typography>
      </Box>
      <Stack spacing={4} direction="row">
        <Box sx={{ width: 500 }} id="left-box">
          <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
                console.log(e.target.value);
              }}
              value={firstName}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              fullWidth
              required
            />
          </Stack>
          <TextField
            type="email"
            variant="outlined"
            color="secondary"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            fullWidth
            required
            sx={{ mb: 2 }}
          />

          <TextField
            type="date"
            color="secondary"
            label="Date of Birth"
            onChange={(e) => setDateOfBirth(e.target.value)}
            value={dateOfBirth}
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            type="text"
            color="secondary"
            label="Adres"
            onChange={(e) => setAdress(e.target.value)}
            value={adress}
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ mb: 2 }}
          />
          <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Postcode"
              onChange={(e) => setPostalCode(e.target.value)}
              value={postalcode}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Stad"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              fullWidth
              required
            />
          </Stack>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Beroep"
            onChange={(e) => setOccupation(e.target.value)}
            value={occupation}
            fullWidth
            sx={{ mb: 2 }}
          />
        </Box>
        <Box sx={{ width: 500 }} id="right-box">
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ marginBottom: 2 }}
          >
            <div>
              <StyledAvatar src={avatar8} />
              <Typography align="center">
                <Box sx={{ fontWeight: "bold" }}>
                  {firstName} {lastName}
                </Box>
              </Typography>
            </div>
            <div>
              <GrayAndHover onClick={handleAvatarClick}>
                <StyledAvatarSecondary src={avatar5} />
              </GrayAndHover>
              <Typography align="center">Robyn Doe</Typography>
            </div>
            <div>
              <GrayAndHover onClick={handleAvatarClick}>
                <PlusSign />
              </GrayAndHover>
            </div>
          </Stack>
          <TextField
            type="standard-multiline-static"
            multiline
            variant="outlined"
            color="secondary"
            label="Omschrijving groep"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            fullWidth
            rows={6}
          />
        </Box>
      </Stack>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 10px;
  margin-bottom: 16px;
`;

const StyledAvatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;

const StyledAvatarSecondary = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  filter: blur(0.5px) grayscale(95%);
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: grayscale(0%);
`;

const GrayAndHover = styled.div`
  cursor: pointer;
  position: relative;
  filter: blur(0.5px) grayscale(95%);
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: grayscale(0%);
`;
