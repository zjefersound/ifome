import { formatCurrency } from "react-native-format-currency";

export const toCurrency = (amount) =>
  formatCurrency({ amount: amount.toFixed(2), code: "BRL" })[0];
