import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Chart (){
  const [open, setOpen] = React.useState(true); 
  const handleClose = () => {
    setOpen(false);
    window.location.reload(false);
  };

  const[chartData, setChartData] = useState(null);
  const[totOpenAmt, settotOpenAmt] = useState(null);
  const[noOfCust, setnoOfCust] = useState(null);
  useEffect(() => {
  axios.get(`http://localhost:8081/backend/AnalyticsServlet`)
  .then(res => {
    console.log(res.data);
    setChartData(...res.data);
    settotOpenAmt(res.data[0].total_open_amount);
    setnoOfCust(res.data[0].no_of_customers);  
  },[])
}, []);
  console.log(chartData);
    console.log( totOpenAmt)
    console.log( noOfCust)
  const options = {
    responsive: true,
    plugins: {      
      title: {
        display: true,
        text: 'Analytics View Data',
      },
      scales:{
        yAxes:[
          {
            ticks:{
              min:0,
              max:100,
              stepSize:10
            }
        }
      ],
    },
    font: {
      size: 12,
      family: 'tahoma',
      weight: 'normal',
      style: 'italic'
    },
  },
};  
  const labels = ['Unilever', 'Johnson and Johnson', 'Bose', 'Kellog s', 'Sony', 'Puma'];
  const data = {
    labels,
    title: {
      display: true,
      text: 'Chart Title',
    },
    subtitle: {
      display: true,
      text: 'Chart Subtitle',
      color: 'blue',
      font: {
        size: 12,
        family: 'tahoma',
        weight: 'normal',
        style: 'italic'
      },
    },
    datasets: [
      {
        label: 'No. Of Customers',
        data: noOfCust,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Total Open Amount',
        data: totOpenAmt,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return (
    <Dialog
    fullScreen
    open={open}
    onClose={handleClose}
    TransitionComponent={Transition}    
  >
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
        <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>    
    <Bar options={options} data={data} />;
  </Dialog>    
  )   
}
export default Chart;
