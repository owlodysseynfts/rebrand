// format number into money price e.g 10000 into $10,00
export const formatMoney = (money: number) => {
  return money.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
  });
};