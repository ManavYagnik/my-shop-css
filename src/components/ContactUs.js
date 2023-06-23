import React, { useState } from 'react';
// import { contactList } from '../redux/contactAction';
import white_image from "../white_image.png";
import { borders } from '@material-ui/system';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { FormControl } from '@mui/material';
import { Box, Grid } from '@mui/material'
import { brown } from '@mui/material/colors';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { add_contact } from '../redux/contactAction';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Typography } from '@mui/material';
import Myform from './Myform';





const ContactUs = () => {




    return (
      <div>
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={8} md={6} >
              <Box className='map w3-center w3-margin' >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7375083911843!2d72.56406257370341!3d23.033408215926798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848ac8a7faf3%3A0x61bc852aeef56a03!2sAdani%20Wilmar%20Limited!5e0!3m2!1sen!2sin!4v1686738010613!5m2!1sen!2sin"
                  style={{ border: 3 }} allowFullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">

                </iframe>


              </Box>
              <Box className=' w3-center w3-margin' >
                <Typography variant='h3' className='map-text'>   Find Us Above</Typography>
              </Box>
            </Grid>
            <Myform />
          </Grid>
        </Box>


      </div>






    )

  }

export default ContactUs;