import "./App.css";
//import { Card, Button } from "./components";
import { Card } from "./components/Card";
//import { Button } from "./components/Button";


function App() {
  const arrayData = [
    {
      url: 'gfgfg',
      description: 'sdds',
      name: 'sdds'
    },
    {
      url: 'gfgfg',
      description: 'sdds',
      name: 'sdds'
    },
    {
      url: 'gfgfg',
      description: 'sdds',
      name: 'sdds'
    }
  ];

  return (
    <>
      {/*    <h1>App</h1>
      <Button />
*/}
    
      {arrayData.map(({url,description,name}) => (
        // eslint-disable-next-line react/jsx-key
        <Card
          url={url}
          description={description}
          name={name}
        />
      ))}    

      {/*
      <Card url="aaa" description="kskks" name="jajaj" />*/}
    </>
  );
}

export default App;
