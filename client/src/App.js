import './App.css';
import { Custmer , CustmerProfile } from './components/Custmer';
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
})


const custmer = [
{
  "id" : 1,
  "image" : 'https://placeimg.com/64/64/1',
  "name" : "홍길동",
  "birthday" : "810518",
  "gender" : "남자",
  "job" : "무직"
},
{
  "id" : 2,
  "image" : 'https://placeimg.com/64/64/2',
  "name" : "임꺽정",
  "birthday" : "870710",
  "gender" : "남자",
  "job" : "산적"
},
{
  "id" : 3,
  "image" : 'https://placeimg.com/64/64/3',
  "name" : "도길이",
  "birthday" : "880101",
  "gender" : "여자",
  "job" : "경찰"
}
]

export default function App() {    
  const  classes = useStyle();
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
            custmer.map(c => {
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
            })
          }  
        </TableBody>
      </Table>    
      
    </Paper>
  );
}