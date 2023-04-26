import { Dispatch, SetStateAction } from 'react';

function Inputs({
  isRunning,
  setTime,
  setMoney,
}: {
  isRunning: boolean;
  setTime: Dispatch<SetStateAction<number>>;
  setMoney: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="mt-2">
      <div className="form-control">
        <div className="input-group">
          <input
            type="number"
            placeholder="Geld (2500)"
            className="w-1/2 input input-bordered"
            onChange={(e) => {
              setMoney(e.target.value as unknown as number);
            }}
            disabled={isRunning}
          />
          <input
            type="number"
            placeholder="Zeit (1200)"
            className="w-1/2 input input-bordered"
            onChange={(e) => {
              setTime(e.target.value as unknown as number);
            }}
            disabled={isRunning}
          />
        </div>
      </div>
    </div>
  );
}

export { Inputs };
