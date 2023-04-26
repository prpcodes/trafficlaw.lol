function Buttons({ resetTimer, startTimer }: { resetTimer: () => void; startTimer: () => void }) {
  return (
    <div className="justify-end mt-2 card-actions">
      <button className="btn" onClick={resetTimer}>
        Reset
      </button>
      <button className=" btn btn-primary" onClick={startTimer}>
        Start
      </button>
    </div>
  );
}

export { Buttons };
