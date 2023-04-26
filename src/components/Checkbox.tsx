import { Dispatch, SetStateAction } from 'react';

function Checkbox({ setPlayAlarm }: { setPlayAlarm: Dispatch<SetStateAction<boolean>> }) {
  return (
    <div className="form-control text-end">
      <label className="cursor-pointer">
        <input
          type="checkbox"
          className="checkbox checkbox-accent"
          onChange={() => setPlayAlarm(true)}
        />
      </label>
    </div>
  );
}

export { Checkbox };
