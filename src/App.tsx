import { Buttons } from 'components/Buttons';
import { Checkbox } from 'components/Checkbox';
import { Progress } from 'components/Progress';
import { Remaining } from 'components/Remaining';
import { useState, useEffect } from 'react';

const MONEY_PER_SECOND = 2.08;

function App() {
  const [money, setMoney] = useState(2500);
  const [time, setTime] = useState(1200);
  const [isRunning, setIsRunning] = useState(false);
  const [playAlarm, setPlayAlarm] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMoney(2500);
    setTime(1200);
  };

  if (money <= 0 && playAlarm === true) {
    const audio = new Audio('/alarm.mp3');
    audio.play();
    setPlayAlarm(false);
  }

  useEffect(() => {
    if (!isRunning) return;
    const update = () => {
      setMoney((money) => money - MONEY_PER_SECOND);
      setTime((time) => time - 1);
    };

    const interval = setInterval(update, 500);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 App">
      <main className="mb-3 shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <div className="justify-between card-actions">
            <h2 className="card-title">⏲️ Trafficlaw Timer</h2>
            <Checkbox setPlayAlarm={setPlayAlarm} />
          </div>
          <p>
            Errechnet die Kosten für das Trafficlaw nach Ablauf der Zeit, maximal <b>20</b> Minuten.
          </p>
          {/* PROGRESS */}
          <Progress money={money} />
          {/* MONEY REMAINING */}
          <Remaining money={money} time={time} />
          {/* Buttons */}
          <Buttons resetTimer={resetTimer} startTimer={startTimer} />
        </div>
      </main>
      <footer>
        <div className="text-xs text-center text-gray-500 ">
          &copy; {new Date().getFullYear() + ' '} by{' '}
          <a href="https://prp.codes" className="no-underline link">
            PRP
          </a>{' '}
          for{' '}
          <a href="https://www.sektor-rp.eu/" className="no-underline link">
            {' '}
            Sektor-RP
          </a>{' '}
          (no affiliation)
        </div>
      </footer>
    </div>
  );
}

export default App;
