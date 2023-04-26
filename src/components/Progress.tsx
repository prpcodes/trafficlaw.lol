function Progress({ money, initialMoney }: { money: number; initialMoney: number }) {
  return (
    <progress
      className="w-full progress progress-primary"
      value={money}
      max={initialMoney}
    ></progress>
  );
}

export { Progress };
