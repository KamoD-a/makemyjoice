import { Button } from './Button'
import { ChoiceField } from './ChoiceField';
import { useState } from 'react'
import { ListComponent } from './ListComponent';

function App() {

  const [components, setComponents] = useState(["Sample Comp"]);

  function addComponent() {
    setComponents([...components, "Sample Component"])
  }

  function makeRandomChoice() {

  }

  return (
    <div>

      {components.map((item, i) => (<ListComponent text={item} />))}
      <Button onclick={addComponent} text="+" />
      <div>
        <Button onclick={makeRandomChoice} text="decide for me!" />
      </div>
      
    </div>
  )

}

export default App;
