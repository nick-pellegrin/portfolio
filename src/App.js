import './App.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Slide from '@mui/material/Slide';
import Paper from '@mui/material/Paper';
import { useRef } from 'react';import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import ColorfulFilaments from './/visuals/colorful_filaments.png';
import ArtificialBrain from './/visuals/artificial_brain.png';
import ConnecedNodes from './/visuals/connected_nodes.png';
import NeuromorphicChips from './/visuals/neuromorphic_chips.png';
import WiredBrain from './/visuals/wired_brain.png';
import ColorfulProcessor from './/visuals/dim_colorful_processor.png';
import CircuitSchematic from './/visuals/circuit_schematic.png';
import Cybersecurity from './/visuals/cybersecurity.png';
import ElectronicEye from './/visuals/electronic_eye.png';
import ParallelComputing from './/visuals/parallel_computing.png';
import ServerRack from './/visuals/server_rack.png';
import ColorfulLines from './/visuals/colorful_lines.png';
import ColorfulCode from './/visuals/colorful_code.png';
import BlenderSimulation from './/visuals/blender_simulation.png';



// THEME
const theme = createTheme({
  palette: {
    primary: {
      main: '#02d48a',
    },
    secondary: {
      main: '#ff1d58',
    },
    background: {
      // default: '#080f1c',
      default: '#000000',
      paper: '#142440',
    },
  },
  typography: {
    color: '#fff',
  },
});



// APP BAR
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};



// TABS
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
  ))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 1)',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(17),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
    '&:hover': {
      color: '#fff',
      opacity: 1,
    },
  }),
);



// TAB PANELS
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
























function App(props) {
  // const theme = useTheme();
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const background_img = [ColorfulCode, CircuitSchematic, ServerRack, ColorfulProcessor, BlenderSimulation];
  const title_text = ["Nick Pellegrin's", "Embedded Systems", "Distributed Systems", "Computer Vision", "Simulations"];
  const title_content = ["Project Portfolio", "", "", "", ""];

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper square={true} style={{height: '100vh', objectFit: 'cover'}} backgroundColor="tansparent">
          <div class="container">
            <img style={{height: "100vh", width: "100%", objectFit: "cover"}} src={background_img[value]}/>
            <div class="centered">
              <Typography variant="h1" style={{color: "white", fontWeight: "bold"}}>{title_text[value]}</Typography>
              <Typography variant="h1" style={{color: "white"}}>{title_content[value]}</Typography>
            </div>
          </div>
        </Paper>
        <HideOnScroll {...props}>
          <AppBar color="default">
            <Toolbar justifyContent="center">
              <Grid container>
                <Grid item xs></Grid>
                <Grid item xs={6}>
                  <Grid container justifyContent="center">
                    <StyledTabs
                      value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons="auto">
                      <StyledTab label="Home" />
                      <StyledTab label="Embedded Systems" />
                      <StyledTab label="Distributed Systems" />
                      <StyledTab label="Computer Vision" />
                      <StyledTab label="Simulations" />
                    </StyledTabs>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid container justifyContent="flex-end">
                    <Stack spacing={2} direction="row">
                      <IconButton aria-label="Linked In" color='primary' href="#contained-buttons">
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton aria-label="Github" color='primary' href="#contained-buttons">
                        <GitHubIcon />
                      </IconButton>
                      <Button variant="outlined" color='primary' href="#contained-buttons">Resume</Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />

        <CustomTabPanel value={value} index={0}>
          <Container maxWidth="xl">
            <Typography variant="h3" style={{color: "white"}}>About Me</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" style={{color: "white", marginBottom: "6rem"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error, delectus quo eius exercitationem tempore. Delectus sapiente, provident corporis dolorum quibusdam aut beatae repellendus est labore quisquam praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat voluptate iure labore, repellendus beatae quia unde est aliquid dolor molestias libero. Reiciendis similique exercitationem consequatur, nobis placeat illo laudantium! Enim perferendis nulla soluta magni error, provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores sunt inventore perferendis, aut sapiente modi nesciunt.
            </Typography>
            <Typography variant="h3" style={{color: "white"}}>About This Portfolio Website</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" style={{color: "white", marginBottom: "6rem"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error, delectus quo eius exercitationem tempore. Delectus sapiente, provident corporis dolorum quibusdam aut beatae repellendus est labore quisquam praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat voluptate iure labore, repellendus beatae quia unde est aliquid dolor molestias libero. Reiciendis similique exercitationem consequatur, nobis placeat illo laudantium! Enim perferendis nulla soluta magni error, provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores sunt inventore perferendis, aut sapiente modi nesciunt.
            </Typography>                                                                                                                                                   
            <Typography variant="h3" style={{color: "white"}}>Projects Table of Contents</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <div>
              <Accordion style={{background: "transparent"}} sx={{border: '2px solid gray'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography variant="h5" style={{color: "white"}}>Embedded Systems</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" align="left" style={{color: "white", fontWeight: "bold"}}>Vault Opener</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{background: "transparent"}} sx={{border: '2px solid gray'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography variant="h5" style={{color: "white"}}>Distributed Systems</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" align="left" style={{color: "white", fontWeight: "bold"}}>Multi-Paxos Blog</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{background: "transparent"}} sx={{border: '2px solid gray'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography variant="h5" style={{color: "white"}}>Computer Vision</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" align="left" style={{color: "white", fontWeight: "bold"}}>F-MNIST Classifier</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{background: "transparent"}} sx={{border: '2px solid gray'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography variant="h5" style={{color: "white"}}>Simulations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" align="left" style={{color: "white", fontWeight: "bold"}}>BOID FLocking Simulation</Typography>
                  <Typography variant="body1" align="left" style={{color: "white", fontWeight: "bold"}}>Hunter-Prey Survival Simulation</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            
            {/* <Typography variant="h4" align="left" style={{color: "white", marginTop: "4rem", fontWeight: "bold"}}>Embedded Systems</Typography>
            <Typography variant="h6" align="left" style={{color: "white", marginTop: "1rem", fontWeight: "bold"}}>Vault Opener</Typography>
            <Typography variant="h6" align="left" style={{color: "white", marginTop: "1rem", fontWeight: "bold"}}>Capstone ~ in progress</Typography>
            
            <Typography variant="h4" align="left" style={{color: "white", marginTop: "4rem", fontWeight: "bold"}}>Distributed Systems</Typography>
            
            <Typography variant="h4" align="left" style={{color: "white", marginTop: "4rem", fontWeight: "bold"}}>Computer Vision</Typography>
            
            <Typography variant="h4" align="left" style={{color: "white", marginTop: "4rem", fontWeight: "bold"}}>Simulations</Typography> */}
            
            
            
          </Container>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Container maxWidth="xl">
            <Typography variant="h3" style={{color: "white"}}>Vault Opener</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" style={{color: "white", marginBottom: "6rem"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error, delectus quo eius exercitationem tempore. Delectus sapiente, provident corporis dolorum quibusdam aut beatae repellendus est labore quisquam praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat voluptate iure labore, repellendus beatae quia unde est aliquid dolor molestias libero. Reiciendis similique exercitationem consequatur, nobis placeat illo laudantium! Enim perferendis nulla soluta magni error, provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores sunt inventore perferendis, aut sapiente modi nesciunt.
            </Typography>
            <Typography variant="h3" style={{color: "white"}}>Capstone ~ in progress</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" style={{color: "white", marginBottom: "6rem"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error, delectus quo eius exercitationem tempore. Delectus sapiente, provident corporis dolorum quibusdam aut beatae repellendus est labore quisquam praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat voluptate iure labore, repellendus beatae quia unde est aliquid dolor molestias libero. Reiciendis similique exercitationem consequatur, nobis placeat illo laudantium! Enim perferendis nulla soluta magni error, provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores sunt inventore perferendis, aut sapiente modi nesciunt.
            </Typography>
          </Container>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <Container maxWidth="xl">
            <Typography variant="h3" style={{color: "white"}}>Multi-Paxos Blog</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" style={{color: "white", marginBottom: "6rem"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error, delectus quo eius exercitationem tempore. Delectus sapiente, provident corporis dolorum quibusdam aut beatae repellendus est labore quisquam praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat voluptate iure labore, repellendus beatae quia unde est aliquid dolor molestias libero. Reiciendis similique exercitationem consequatur, nobis placeat illo laudantium! Enim perferendis nulla soluta magni error, provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores sunt inventore perferendis, aut sapiente modi nesciunt.
            </Typography>
          </Container>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={3}>
          <Container maxWidth="xl">
            <Typography variant="h3" style={{color: "white"}}>F-MNIST Classifier</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" style={{color: "white", marginBottom: "6rem"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error, delectus quo eius exercitationem tempore. Delectus sapiente, provident corporis dolorum quibusdam aut beatae repellendus est labore quisquam praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat voluptate iure labore, repellendus beatae quia unde est aliquid dolor molestias libero. Reiciendis similique exercitationem consequatur, nobis placeat illo laudantium! Enim perferendis nulla soluta magni error, provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores sunt inventore perferendis, aut sapiente modi nesciunt.
            </Typography>
          </Container>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={4}>
          <Container maxWidth="xl">
            <Typography variant="h3" style={{color: "white"}}>BOID Flocking Simulation</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" style={{color: "white", marginBottom: "6rem"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error, delectus quo eius exercitationem tempore. Delectus sapiente, provident corporis dolorum quibusdam aut beatae repellendus est labore quisquam praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat voluptate iure labore, repellendus beatae quia unde est aliquid dolor molestias libero. Reiciendis similique exercitationem consequatur, nobis placeat illo laudantium! Enim perferendis nulla soluta magni error, provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores sunt inventore perferendis, aut sapiente modi nesciunt.
            </Typography>
            <Typography variant="h3" style={{color: "white"}}>Hunter-Prey Survival Simulation</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" style={{color: "white", marginBottom: "6rem"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio nostrum. Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error, delectus quo eius exercitationem tempore. Delectus sapiente, provident corporis dolorum quibusdam aut beatae repellendus est labore quisquam praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat voluptate iure labore, repellendus beatae quia unde est aliquid dolor molestias libero. Reiciendis similique exercitationem consequatur, nobis placeat illo laudantium! Enim perferendis nulla soluta magni error, provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores sunt inventore perferendis, aut sapiente modi nesciunt.
            </Typography>
          </Container>
        </CustomTabPanel>
        <Paper square={true} style={{height: '500px', marginTop: "10rem"}}>
        </Paper>        
      </ThemeProvider>
    </div>
  );
}

export default App;
