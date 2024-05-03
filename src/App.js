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
// import { MemoryRouter as Router } from 'react-router';


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
import CNNModelArchitecture from './/visuals/img_classifier.png';
import ConfusionMatrix from './/visuals/f-mnist_confusionmatrix.png';
import FMNISTData from './/visuals/f-mnist.png';
import BoidDemo from './/visuals/boid_demo.gif';
import SurvivalDemo from './/visuals/sim_demoGIF.gif';
import NEATModel from './/visuals/model.png';
import NEATDemo from './/visuals/DEMO.gif';
import Portrait from './/visuals/FamilyPortrait.jpg';



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
  const title_text = ["Nick Pellegrin's", "Embedded Systems", "Distributed Systems", "Artificial Intelligence", "Simulations"];
  const title_content = ["Project Portfolio", "", "", "", ""];
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `Nick_Pellegrin_Resume.pdf`;
    link.href = "./Nick_Pellegrin_Resume.pdf";
    link.click();
  };

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
                      <StyledTab label="Artificial Intelligence" />
                      <StyledTab label="Simulations" />
                    </StyledTabs>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Grid container justifyContent="flex-end">
                    <Stack spacing={2} direction="row">
                      <IconButton aria-label="Linked In" color='primary' href="https://www.linkedin.com/in/nick-pellegrin" target="_blank">
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton aria-label="Github" color='primary' href="https://github.com/nick-pellegrin" target="_blank">
                        <GitHubIcon />
                      </IconButton>
                      <Button variant="outlined" color='primary' onClick={onDownload}>Resume</Button>
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
            <Typography variant="body1" align="left" style={{color: "white", marginBottom: "6rem"}}>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                  <img style={{height: "90%", width: "100%", objectFit: "cover"}} src={Portrait}/>
                </Grid>
                <Grid item xs={12} sm={9}>
                Hi, my name is Nick Pellegrin, and I would like to thank you for checking out my portfolio website! Before you go on and read 
                about some of my personal projects, I would like to share a little information about me. For 5 years I worked hard throughout 
                high school and achieved the rank of Eagle Scout, which helped teach me many lessons about leadership and likely contributed 
                to my love of the outdoors. I graduated high school with honors before attending community college for two years, where I was 
                on the Dean’s Honor List both years. Now I have a Bachelors of Science in Computer Engineering from the University of California 
                - Santa Barbara. I like to think of myself as very academically interested, especially when it comes to the cutting edge of new 
                technologies. I find one way I like to spend some of my free time is reading research papers about topics that interest me such 
                as Artificial Intelligence, neuromorphic computing, and advancements in VLSI design and die fabrication. In my professional 
                career, I am very lucky to have had some amazing opportunities. I have had experience on the assembly line for circuit boards, 
                developing low-level embedded systems, as well as high-level software engineering. I am capable at both frontend and backend 
                development, but I find that I am also very passionate about AI/ML and big data solutions. Outside of the tech space, I really 
                enjoy spending time outside - I enjoy playing basketball, soccer, and beach volleyball. If I’m not inside, there is a good 
                chance you can find me at the park, the beach, or just on a walk around my neighborhood. Now that I’ve talked a little about 
                myself, feel free to browse some of my personal projects! Finally, please note that links to my LinkedIn, Github, and Resume 
                are all available on the menu bar at the top of this page!
                </Grid>
              </Grid>
            </Typography>
            
            {/* <Typography variant="h3" style={{color: "white"}}>About This Portfolio Website</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" align="left" style={{color: "white", marginBottom: "6rem"}}>
              TODO TODO TODO
            </Typography>  */}
                                                                                                                                                             
            <Typography variant="h3" style={{color: "white"}}>Portfolio Table of Contents</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <div>
              <Accordion defaultExpanded={{defaultExpanded: "true"}} style={{background: "transparent"}} sx={{border: '2px solid gray'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography variant="h5" style={{color: "white"}}>Embedded Systems</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" align="left" style={{color: "white", fontWeight: "bold"}}>Smart Home Assistant</Typography>
                  <Typography variant="body1" align="left" style={{color: "white", fontWeight: "bold"}}>Vault Opener</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded={{defaultExpanded: "true"}} style={{background: "transparent"}} sx={{border: '2px solid gray'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography variant="h5" style={{color: "white"}}>Distributed Systems</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" align="left" style={{color: "white", fontWeight: "bold"}}>Multi-Paxos Blog</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded={{defaultExpanded: "true"}} style={{background: "transparent"}} sx={{border: '2px solid gray'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography variant="h5" style={{color: "white"}}>Artificial Intelligence</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" align="left" style={{color: "white", fontWeight: "bold"}}>F-MNIST Classifier</Typography>
                  <Typography variant="body1" align="left" style={{color: "white", fontWeight: "bold"}}>NEAT Flappy Bird</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded={{defaultExpanded: "true"}} style={{background: "transparent"}} sx={{border: '2px solid gray'}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography variant="h5" style={{color: "white"}}>Simulations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" align="left" style={{color: "white", fontWeight: "bold"}}>BOID FLocking Simulation</Typography>
                  <Typography variant="body1" align="left" style={{color: "white", fontWeight: "bold"}}>Hunter-Prey Survival Simulation</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            
            
          </Container>
        </CustomTabPanel>



        <CustomTabPanel value={value} index={1}>
          <Container maxWidth="xl">
            <Typography variant="h3" style={{color: "white"}}>Smart Home Assistant</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" align="left" style={{color: "white", marginBottom: "6rem"}}>
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", textDecorationLine: 'underline'}}>Project Description</Typography>
              COMING SOON...
            </Typography>
            
            <Typography variant="h3" style={{color: "white"}}>Vault Opener</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" align="left" style={{color: "white", marginBottom: "6rem"}}>
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", textDecorationLine: 'underline'}}>Project Description</Typography>
              COMING SOON...
            </Typography>
          </Container>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <Container maxWidth="xl">
            <Typography variant="h3" style={{color: "white"}}>Multi-Paxos Blog</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" align="left" style={{color: "white", marginBottom: "6rem"}}>
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", textDecorationLine: 'underline'}}>Project Description</Typography>
              This project simulates a distributed blog system (using sockets) with 5 server nodes that communicate using the Multi-Paxos message passing protocol. The system is fault tolerant and replicated across all nodes. The project creates a blog object to store the data on each node with a custom made blockchain to ensure data correctness. In addition to the blog data object and blockchain, all data from both is backed up to text files so that data can be recovered in the event of a failure or to ensure correctness with other nodes.
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>Replicated Blog</Typography>
              The blog object supports the following write operations:
              <ul>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>POST(username, title, content):</Typography> allows the user to make a new post to be added to the blog application.</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>COMMENT(username, title, content):</Typography> allows the user to comment on an existing post with the specified (title), but if the post does not exist and error message is displayed to alert the user such a post does not exist.</li>
              </ul>
              The blog object supports the following read operations:
              <ul>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>VIEW:</Typography> allows the user to view the entire blog.</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>VIEW(username):</Typography> allows the user to view all posts and comments made by another user.</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>VIEW(title):</Typography> allows the user to view a post and all comments made on that post.</li>
              </ul>
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>Replicated Blockchain</Typography>
              The replicated blockchain acts as a legder for all write operations made to the blog, and the blockchain ensures data correctness as an implicit functionality of blockchains. Each block on the blockchain consists of a single write operation for simplicity (however to scale this more operations should be stored per block).
              Each block in the blockchain consists of the following fields:
              <ul>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Previous Hash Pointer (H):</Typography> This points to the previous block in the blockchain and is computed using SHA256, the hash pointer is calculated as SHA256(H_prev || T_prev || N_prev).</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Write Operation (T):</Typography> this consists of the write operation to be stored in this block.</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Nonce (N):</Typography> The nonce for this project was computed for a difficulty of 2 (meaning the nonce should be mined such that when hashed it results in 2 leading zeros).</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Current Hash Pointer:</Typography> This hash pointer is calculated as SHA256(H || T || N) (this just makes it easier to fetch this pointer for the next block).</li>
              </ul>
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>Message Passing Protocol and Leader Election</Typography>
              <ul>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Leader Election:</Typography> If the node knows of know current leader, it proposes itself to be the new leader by sending out a (PREPARE) message to all other nodes.</li>
                <li>Upon receiving a (PREPARE) message, a node responds with (PROMISE) if it also doesn't know of another leader, however if it does know of another leader it pings the server designated as the leader to ensure it is still running. If the current leader is still running it forwards the leader id to the node currently requesting to be the new leader, however if the leader ping times out then the node responds with (PROMISE).</li>
                <li>If the node requesting to be leader recieves a leader id from any of the other nodes, it cancels its own leader election and forwards the post request to the current leader. Otherwise, if the node recieves from a majority of other nodes and recieves no leader id, it designates itself as the leader.</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Replication Phase:</Typography> Once there is a leader agreed upon by the majority of nodes, the replication phase can start. If the node making the post request is not the leader, it forwards the request to the leader. If the leader is the one making the post request or receives a forwarded post request, it then sends out an (ACCEPT) message along with the post to all other nodes.</li>
                <li>Upon receiving an (ACCEPT) message from the leader, a node replies with (ACCEPTED) so that the leader can ensure a majority of the network aggrees on the proposed post request.</li>
                <li>Once the leader recieves an (ACCEPTED) from a majority of nodes in the system, it can enter the decision phase.</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Decission Phase:</Typography> Once in the decision phase, the leader mines the new block to be added to the blockchain and adds it to the blockchain, adds the post to the blog data object, and backs up the operation to the blog and blockchain text files specific to that server node. After doing this it sends out a (DECIDE) message to all other nodes in the network.</li>
                <li>Upon receiving a (DECIDE) message from the leader, a node also mines the new block to be added to the blockchain and adds it to the blockchain, adds the post to the blog data object, and backs up the operation to the blog and blockchain text files specific to that server node. Then that node responds back to the leader with a (DECIDED) message to communicate that the post operation has been replicated on that node.</li>
              </ul>
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>Fault Tolerance and Recovery</Typography>
              This distributed system protocol allows for less than a majority of nodes to fail and still function properly. Additionally, should a network partition occur a new leader election will be triggered on the side partitioned without the leader. After a network partition results in two or more conflicting blogs/blockchains, if the partitioned networks reconnect they merge their respective data without repetition and select a single leader from the partitioned networks previous leaders based on lowest id number. If at any point a node forwards a post request to the leader and doesn't hear back from the leader with an (ACCEPT) message after a certain timeout a leader election will be triggered. If a node is down for an extended period of time while post operations continue to be added to the blog/blockchain, upon restarting and reconnecting to the network it compares its logs with all other nodes and consolidates all the data added after it went offline to catch up with the other nodes.
            </Typography>
          </Container>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={3}>
          <Container maxWidth="xl">
            <Typography variant="h3" style={{color: "white"}}>F-MNIST Classifier</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" align="left" style={{color: "white", marginBottom: "6rem"}}>
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", textDecorationLine: 'underline'}}>Project Description</Typography>
              This project uses the F-MNIST dataset to train a image recognition model. Similar to recognizing handwritten digits as in the MNIST dataset, the F-MNIST dataset uses pictures 
              of different articles of clothing (such as pants, shirt, etc).  The data used for this project was taken from the F-MNIST dataset and consists of 60,000 training images and 10,000 
              testing images. Each image is 28x28 pixels and is grayscale (meaning each pixel is represented by a single byte). The goal of this project is to train a model to recognize the article of clothing 
              in each image with a high degree of accuracy.
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>Model Training and Performance</Typography>
              The CNN model was trained using the Adam optimizer and a learning rate of 0.001. The model was trained for 25 epochs with a batch size of 32. The model was able to achieve this level of 
              accuracy by using a dropout rate of 0.2 after pooling layers to prevent overfitting and by using an 80%-20% training/validation split to increase general accuracy upon inference.  Another 
              method used to increase the accuracy of the final model was to implement Bayesian Optimization to tune the hyperparameters of the model. The final model achieved an accuracy of 92.18% on 
              the testing data,m which scored 3rd highest accuracy in the competition.  In the below images you can see the format of the input data (left) and the resulting confusion matrix (right).
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <img style={{width: "100%", objectFit: "cover", marginTop: "2rem"}} src={FMNISTData}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <img style={{width: "80%", objectFit: "cover", marginTop: "2rem"}} src={ConfusionMatrix}/>
                </Grid>
              </Grid>
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>Model Architecture</Typography>
              The final model architecture used various different types of layers including rescaling, convolutional 2D, batch normalization, max pooling, droupout, flattening, and fully dense layers.  The model has a total of
              1,887,754 trainable parameters and 1,344 non-trainable parameters. The model architecture is as follows:
              <ul>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Rescaling Layer:</Typography> This layer rescales the greyscale pixel values in the image to normalize them between [0, 1] so that the image can pass through the model.</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Convolutional 2D Layer:</Typography> This layer extracts features from the input image. It uses a 3x3 kernel size and a relu activation function to extract features from the upstream inputs.</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Batch Normalization Layer:</Typography> By normalizing the input feature vector, this layer stabalizes the gradient learning and allows for faster convergence on an optimal solution.</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Max Pooling 2D Layer</Typography> This layer is used to reduce the spatial dimensions of the input image. The layer uses a 2x2 pool size and a stride of 2 to reduce the size of the image.</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Dropout Layer:</Typography> In order to prevent overfitting in the model, the layer randomly sets a fraction of the input units to 0 at each update during training time.</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Flattening Layer:</Typography> This layer flattens the input image into a 1D array. It is used to convert the 2D image into a 1D array that can be used as input to the following downstream layer.</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Fully Dense Layer</Typography> The final layers in the model, they are is used to classify the input image. The last layer uses a softmax activation function to classify the input image into one of the 10 classes.</li>
              </ul>
              <img style={{width: "100%", objectFit: "cover", marginTop: "2rem"}} src={CNNModelArchitecture}/>
            </Typography>

            <Typography variant="h3" style={{color: "white"}}>NEAT Flappy Bird</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" align="left" style={{color: "white", marginBottom: "6rem"}}>
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", textDecorationLine: 'underline'}}>Project Description</Typography>
              This project runs the NEAT algorithm to train an ai agent to play flappy bird (in flappybird.py).  Flappy bird is a simple game consisting of a bird agent that must maneuver through 
              a series of pipes. The bird can either jump or fall, and the goal is to get the bird through as many pipes as possible. The NEAT algorithm is used to train the bird to play the game 
              by rewarding the bird for getting through pipes and penalizing the bird for hitting the ground or pipes. The NEAT algorithm is used to evolve the bird's neural network architecture 
              to maximize the bird's score in the game. 
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>The NEAT Algorithm</Typography>
              NEAT stands for neuro-evolution of augmenting topologies, and this 
              algorithm essentially creates a pool of genomes, each corresponding to a different ai model architecture. In each generation, each model is ranked based on its fitness score and models 
              with similar enough genomic distances (similar network architecture) have the opportunity to mate, or aggregate the parent models to create a unique child model. Additionally, between generations, 
              there is a probability for mutation as defined by the config-feedforward.txt file for traits such as adding/removing connections, connection weights, adding/removing 
              nodes, activation functions, etc.  Since there is no intelligent weight tuning between generations and weight parameters are randomly initialized and mutated, the NEAT algorithm can only 
              relistically converge to a solution for simple tasks, as more complex tasks would take too many generations to converge in a realistic time frame.  
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>Best Model Demo</Typography>
              The best model here took 4 generations to successfully pass the score threshold, meaning it can successfully play flappy bird indefinitely without losing. The best model has the following architecture:
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <img style={{width: "60%", objectFit: "cover", marginTop: "2rem", marginBottom: "2rem"}} src={NEATModel}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <img style={{width: "55%", objectFit: "cover", marginTop: "2rem"}} src={NEATDemo}/>
                </Grid>
              </Grid>
              where the gray squares are the input nodes, the blue circle is the output node, green connections have positive weights and red connections have negative weights. As flappy bird is a very easy game 
              to play, the model required to play it successfully is minimal. The goal of the NEAT algorithm is to create the most efficient model architecture necessary to accomplich a task. So rather than using 
              a needlessly large model to play flappy bird, NEAT has managed to create a model using only one hidden node.
            </Typography>

            <Typography variant="h3" style={{color: "white"}}>AI Research</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" align="left" style={{color: "white", marginBottom: "6rem"}}>
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", textDecorationLine: 'underline'}}>What is this Section?</Typography>
              Here I will discuss cutting edge AI research that I find interesting and hope to implement in a future project...
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>LMH Neuron Model (2024)</Typography>
              COMING SOON...
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>Gated Attention Coding (2024)</Typography>
              COMING SOON...
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>SGLFormer Spiking Transformer (2024)</Typography>
              COMING SOON...
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>SpikeGPT (2023)</Typography>
              COMING SOON...
            </Typography>
          </Container>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={4}>
          <Container maxWidth="xl">
            <Typography variant="h3" style={{color: "white"}}>BOID Flocking Simulation</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" align="left" style={{color: "white", marginBottom: "6rem"}}>
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", textDecorationLine: 'underline'}}>Project Description</Typography>
              This project attempts to simulate simple flocking mechanics as seen in schools of fish or groups or birds.  In order to do this, it uses the BOID algorithm to simulate the behavior of each 
              individual in the flock.  In addition to implementing a simple physics engine, the BOID algorithm sets simple rules for each individual that allow more complex behavior to emerge.
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>The BOID Algorithm</Typography>
              The BOID algorithm consists of three main rules:
              <ul>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Seperation:</Typography> given a single agent, we don't want that agent to get too close to other agents. This function provides a sum of acceleration vectors that point away from its nearest neighboring agents and are inversely proportional to the distance from the neighboring agent. Essentially, the closer a neighbor is the stronger the acceleration away from that neighbor is.</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Alignment:</Typography> given a group of agents, in order to exhibit flocking behavior we want them to all move in a similar direction. This function provides an acceleration vector that points in the average direction of its neighbors' direction. This helps ensure group behavior and some uniformity.</li>
                <li><Typography display="inline" style={{fontWeight: 'bold', color: "white"}}>Cohesion:</Typography> given a group of agents, we want the group to remain together instead of agents splitting off on their own. This function provides an acceleration vector pointing towards the center of mass of its neighbors.</li>
              </ul>
              The above simplee behaviors, when combined, allow for flocking patterns to emerge. The Three acceleration vectors above are added together with each vector 
              being multiplied by its corresponding weight so we can alter the strength of each of the behaviors, allowing for more fine tuned control of the behavior we 
              want to observe. Each behavior above also has a perception radius that allows us to alter how large or small we want to make the agents' field of view.
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>BOID Flocking Demo</Typography>
              <img style={{width: "80%", objectFit: "cover", marginTop: "2rem"}} src={BoidDemo}/>
            </Typography>
            
            <Typography variant="h3" style={{color: "white"}}>Hunter-Prey Survival Simulation</Typography>
            <Divider style={{backgroundColor: "white", marginBottom: "4rem"}}/>
            <Typography variant="body1" align="left" style={{color: "white", marginBottom: "6rem"}}>
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", textDecorationLine: 'underline'}}>Project Description</Typography>
              In this project, autonomous agents are simulated in an environment as either prey (white) or predator (red). The predators eat the prey, and the prey eat 
              the food (green) which spawns in randomly around the map over time. If a prey eats enough food, or if a predator eats enough prey, another prey or predator 
              is spawned into the environment. This simulates reproduction when resource availability reaches a certain threshold. This simulation models population size 
              in a simple environment, and given enough time the populations of predator and prey stabalize and reach an equilibrium solution.
              <Typography variant = "h5" style={{color: "white", fontWeight: "bold", marginTop: "2rem", textDecorationLine: 'underline'}}>Survival Demo</Typography>
              <img style={{width: "80%", objectFit: "cover", marginTop: "2rem"}} src={SurvivalDemo}/>
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
