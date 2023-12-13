import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ paddingLeft:"0", width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Nouveautés" />
        <Tab value="two" label="Mes favoris" />
        <Tab value="three" label="Films par genre" />
      </Tabs>
    </Box>
  );
}

{/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Item One" {...a11yProps(0)} />
    <Tab label="Item Two" {...a11yProps(1)} />
    <Tab label="Item Three" {...a11yProps(2)} />
  </Tabs>
</Box>
<CustomTabPanel value={value} index={0}>
  Item One
</CustomTabPanel>
<CustomTabPanel value={value} index={1}>
  Item Two
</CustomTabPanel>
<CustomTabPanel value={value} index={2}>
  Item Three
</CustomTabPanel> */}