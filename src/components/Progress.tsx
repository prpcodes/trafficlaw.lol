function Progress({ money }: { money: number }) {
  return (
    <progress className="w-full progress progress-primary" value={money} max="2500"></progress>
  );
}

export { Progress };
