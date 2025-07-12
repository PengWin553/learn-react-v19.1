import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const handleOnclick = () => {
    setCount(count + 1);
  }

  return (
    <div className="column-alignment">
      <Button count={count} onClick={handleOnclick} />
      <Button count={count} onClick={handleOnclick} />
    </div>
  )
}

const Button = ({count, onClick}) => {
  return (
    <button onClick={onClick}>
      Count {count} times
    </button>
  );
}

export default App