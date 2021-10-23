import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

function TabPanel(props) {
  const { children, value, index, ...other } = props

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
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export default function About() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%", px: 3 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab label="Focus" {...a11yProps(0)} />
          <Tab label="Stack" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Sint velit ut laborum pariatur veniam. Occaecat pariatur mollit mollit
        ullamco pariatur Lorem deserunt. Elit irure occaecat nulla ea non
        proident nisi occaecat ad do irure. Fugiat mollit magna proident est
        ipsum et ut consectetur eu.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Sint velit ut laborum pariatur veniam. Occaecat pariatur mollit mollit
        ullamco pariatur Lorem deserunt. Elit irure occaecat nulla ea non
        proident nisi occaecat ad do irure. Fugiat mollit magna proident est
        ipsum et ut consectetur eu.
      </TabPanel>
    </Box>
  )
}
