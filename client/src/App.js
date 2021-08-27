import './App.css';
import { useState , useEffect } from 'react'
import { Custmer  } from './components/Custmer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles({
  root : {
    width:"100%",
    marginTop : 20,
    overflowX : "auto"
  },
  table:{
    minWidth : 1080
  }
});



export default function App() {    
  const  classes = useStyle();
  const [confirmedData , setConfirmedData] = useState({});

  const callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;     
  }


  useEffect(() => {
      callApi()
        .then(res => setConfirmedData({customers : res}))        
        .catch(err => console.log(err));

  },[])




  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            confirmedData.customers ? confirmedData.customers.map(c => {
              return (
              <Custmer
              key = {c.id}
              id = {c.id}
              image = {c.image}      
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            /> 
            )   
            }) : ""
          }  
        </TableBody>
      </Table>    
      
    </Paper>
  );
}