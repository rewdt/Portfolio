import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import useSiteMetadata from "../hooks/use-site-metadata"

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
        <Box sx={{ py: 1 }}>
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

  const { title } = useSiteMetadata()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%", px: 4 }} id="about">
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
        Hello! My name is {title || `Title`} and I enjoy creating software
        solutions with the goal of improving lives of people within my locality
        and the world at large. As a software engineer, I am intrigued by
        startups and have worked with teams and as a freelancer to build
        projects that cut across different stacks while leveraging tools such as
        reactjs, nodejs and react native.
        <br />
        <br />
        I'm always looking to collaborate and improve my working knowledge as
        learning never ends. So I'm always excited to hear about new ideas and
        help map the course of the future In whatsoever capacity I find myself.
        This I think is the entire purpose of existence
        <br />
        <br />
        When not coding, you can find me reading a wide variety of books ranging
        from fiction to non-fiction, watching movies and hanging out with
        friends
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
