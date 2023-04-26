function Buttons({
  isRunning,
  startTimer,
  stopTimer,
  resetTimer,
}: {
  isRunning: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
}) {
  return (
    <div className="mt-2">
      <div className="form-control">
        <div className="input-group">
          <button className="w-1/2 btn" onClick={resetTimer}>
            Reset
          </button>
          {!isRunning ? (
            <button className="w-1/2 btn btn-primary" onClick={startTimer}>
              Start
            </button>
          ) : (
            <button className="w-1/2 btn btn-primary" onClick={stopTimer}>
              Stop
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export { Buttons };
