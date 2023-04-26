function Remaining({ money, time }: { money: number; time: number }) {
  return (
    <p>
      Verbleibend:{' '}
      <b>
        €{money.toFixed(2)} - {Math.floor(time / 60)}
      </b>
      min
    </p>
  );
}

export { Remaining };
