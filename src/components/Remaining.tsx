function Remaining({ money, time }: { money: number; time: number }) {
  return (
    <p>
      Verbleibend:{' '}
      <b>
        €{Number(money)?.toFixed(2) ?? 0} - {Math.floor(time / 60)}
      </b>{' '}
      min
    </p>
  );
}

export { Remaining };
