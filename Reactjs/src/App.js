import './App.css';
import { useState } from 'react';

// React apps are made out of components
// React components are JavaScript functions that return markup
// React component names must always start with a capital letter, while HTML tags must be lowercase.

function Mybutton({ count, onClick }) {
  // The markup syntax is called JSX. 
  //  Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:
  // you’ll want your component to “remember” some information and display it.
  // Functions starting with use are called Hooks. useState is a built-in Hook provided by React.
  // React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props

  return (
    <button onClick={onClick}>{count}</button>
  )

}

const user = {
  name: "Parth",
  image: 'https://images.unsplash.com/photo-1680330386370-ed8c6e04db9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  imagesize: 90,
};

function About() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.image} alt={'photo of ' + user.name} className='avatar' style={{ width: user.imagesize, height: user.imagesize }}>
      </img>
    </div>
  );
}



function App() {

  const [count, countState] = useState(0);

  function handleclick() {
    countState(count + 1)
    // alert("you clicked me")
  }

  return (
    <div className="App">
      <header className="App-header">
          <Mybutton count={count} onClick={handleclick} />
          <Mybutton count={count} onClick={handleclick} />
        <About />
      </header>
  </div>
  );
}

export default App;
// export default keywords specify the main component in the file
