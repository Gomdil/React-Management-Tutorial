import './App.css';
import { Custmer , CustmerProfile } from './components/Custmer';


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

function App() {
  return (
    <div>
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
      
    </div>
  );
}

export default App;
