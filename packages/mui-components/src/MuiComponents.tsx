import styled from '@emotion/styled';
import { ReactNode, SyntheticEvent, useEffect, useState } from 'react';

import { Box, Button, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Send, Settings } from '@mui/icons-material';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
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

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export interface MuiComponentsProps {
  tabName: string;
}

export const MuiComponents = (props: MuiComponentsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  }

  const { tabName } = props;

  useEffect(() => {
    const tabNames: string[] = ['buttons', 'text', 'unique_button']
    setSelectedTab(() => tabNames.indexOf(tabName));
  }, [tabName]);

  const BlueButton = styled(Button)({
    // backgroundColor: theme.palette.customColor.main,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue"
    },
    "&: disabled": {
      backgroundColor: "gray",
      color: "white"
    }
  });

  // @ts-ignore
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedTab} onChange={handleChange} aria-label="mui components tab container">
          <Tab label="Buttons" {...a11yProps(0)} />
          <Tab label="Text" {...a11yProps(1)} />
          <Tab label="Unique Button" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={selectedTab} index={0}>
        <h2>Basic Buttons</h2>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <h2>Colored Buttons</h2>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success">
            Custom
          </Button>
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </Stack>

        <h2>Text Buttons</h2>
        <Stack direction="row" spacing={2}>
          <Button>Primary</Button>
          <Button disabled>Disabled</Button>
          <Button href="#text-buttons">Link</Button>
        </Stack>

        <h2>Contained Buttons</h2>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
        </Stack>

        <h2>Icon and Label Buttons</h2>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<Settings />}>
            Settings
          </Button>
          <Button variant="contained" endIcon={<Send />}>
            Send
          </Button>
        </Stack>
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h1" component="div" gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" gutterBottom component="div">
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom component="div">
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom component="div">
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom component="div">
            h5. Heading
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            h6. Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
            quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
            quasi quidem quibusdam.
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography>
        </Box>
      </TabPanel>

      <TabPanel value={selectedTab} index={2}>
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <BlueButton>My Button</BlueButton>
          <BlueButton>Another Button</BlueButton>
        </Box>
      </TabPanel>
    </Box>
  );
}
