import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Footer.css";

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="textos">Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noreferrer">
                                <FacebookIcon className="icones" />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noreferrer">
                                <InstagramIcon className="icones" />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noreferrer">
                                <LinkedInIcon className="icones" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos-rodape" >© 2020 Copyright: brasil.generation.org</Typography>
                        </Box>                       
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
export default Footer;