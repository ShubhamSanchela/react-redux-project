// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import React, {
  useState,
  useEffect
} from "react";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// function ProfilePage() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     promise.then(data => {
//       setUser(data.user);
//     });
//   }, []);

//   if (user === null) {
//     return <p>Loading profile...</p>;
//   }
//   return (
//     <>
//       <h1>{user.name}</h1>
//     </>
//   );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
