import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Screens
import Landing from "./screens/Landing.jsx";
import PageZoekProfiel from "./components/Sections/PageZoekprofiel.jsx";
import PageProfielUitkiezen from "./components/Sections/PageProfielUitkiezen.jsx";
import PageUitnodigingMail from "./components/Sections/PageUitnodigingMail.jsx";

import { createTheme, ThemeProvider } from "@material-ui/core";
import GetStarted from "./components/Sections/GetStarted.jsx";

import { ProSidebarProvider } from "react-pro-sidebar";


export const theme = createTheme({
  typography: {
    fontFamily: 'Khula, Arial, Roboto',
  },

  palette: {
    mode: 'light',
    primary: {
      main: '#7eb49d',
    },
    secondary: {
      main: '#fbc687',
    },
    error: {
      main: '#ea907a',
    },
    warning: {
      main: '#f4f7c5',
    },
  },
});

export default function App() {
  return (
    
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      {/* <Landing /> */}  
      <BrowserRouter>
      <ProSidebarProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/zoekprofiel" element={<PageZoekProfiel />} />
            <Route path="/profieluitkiezen" element={<PageProfielUitkiezen />} />
            <Route path="/uitnodigingmail" element={<PageUitnodigingMail />} />
            <Route path="/getstarted" element={<GetStarted />} />
          </Routes>
        </ThemeProvider>
        </ProSidebarProvider>
      </BrowserRouter> 
    </>
  );
}

