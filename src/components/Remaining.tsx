function Remaining({ money, time }: { money: number; time: number }) {
  return (
    <p>
      Verbleibend:{' '}
      <b>
        €{Number(money)?.toFixed(2) ?? 0} -{' '}
        {Math.floor(time / 60) < 10 ? '0' + Math.floor(time / 60) : Math.floor(time / 60)}:
        {time % 60 < 10 ? '0' + (time % 60) : time % 60}{' '}
      </b>{' '}
      min
    </p>
  );
}

export { Remaining };
