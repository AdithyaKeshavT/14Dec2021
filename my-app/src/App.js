import logo from './logo.svg';
import './App.css';

function App() {
   function formatName(user) {
     return user.firstName + ' ' + user.lastName;
   }
  
  const user = {
    firstName: 'AB',
    lastName: 'Perez'
  };
  
  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  
  // const element = (
  //   <h1>
  //     Hello, {formatName(user)}!
  //   </h1>
  // );
  
 return(getGreeting(user))
}

export default App;
