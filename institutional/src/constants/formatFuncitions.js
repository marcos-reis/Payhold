import { isNumber, isUndefined, isNull } from "util";

export const formatASNumber = (n) => {
  if (isUndefined(n)) { return 0; }
  if (isNull(n)) { return 0; }
  if (n === "%") { return 0; }
  if (!isNumber(n)) { return parseInt(n.replace(/\D/g, ""), 10) / 100; }
  if (isNumber(n)) { return n / 100; }
};


export const formatASMoney = (n) => {
  const numberFormated = formatASNumber(n);
  const moneyFormated = numberFormated.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  return moneyFormated;
};
export const formatASPercentage = (n) => {
  const numberFormated = formatASNumber(n);
  const percentageFormated = numberFormated.toLocaleString("pt-br", { style: "percent" });
  return percentageFormated;
};
