import { useEffect, useState } from 'react';
import { Button, Screen } from './Components.jsx';

const App = () => {
  const initialTime = {
    hour: 0,
    minute: 0,
    second: 0,
    milisecond: 0,
  }

  const [time, setTime] = useState(initialTime);
  const [start, setStart] = useState(false)

  const handleClick = () => {
    setStart(!start);
  }

  const onResetClic = () => {
    setTime(initialTime);
    setStart(false);
  }

  useEffect(() => {
    const idInterval = setInterval(() => {
      if (start) {
        setTime(t => {

          if(t["milisecond"] === 99 && t["second"] === 59 && t["hour"]==24){
            onResetClic();
          }

          else if (t["milisecond"] === 99 && t["second"] === 59){
            return { ...t, minute: t["minute"] + 1, second: 0, milisecond: 0 };
          }

          else if (t["milisecond"] === 99) {
            return { ...t, second: t["second"] + 1, milisecond: 0 };
          }

          return { ...t, milisecond: t["milisecond"] + 1 };

        });
      }
      else {
        clearInterval(idInterval);
      }
    }, 10);

    return () => {
      clearInterval(idInterval);
    };
  }, [start]);

  return (
    <section className="container border m-5 p-3 mx-auto" style={{ height: "75vh" }}>
      <div className="d-flex h-25 align-items-center border-bottom justify-content-center gap-3">
        <img src="/chronometre.png" alt="" style={{ width: "2em" }} />
        <h1 className="">Stop watch</h1>
      </div>
      <Screen time={time} />

      <div className="d-flex justify-content-center gap-2">
        <Button buttonValue={"Start"} bsColor={"primary"} onClick={handleClick} isDisable={start} />
        <Button buttonValue={"Pause"} bsColor={"warning"} onClick={handleClick} isDisable={!start} />
        <Button buttonValue={"Reset"} bsColor={"danger"} onClick={onResetClic} />
      </div>
    </section>
  );
}

export default App;
