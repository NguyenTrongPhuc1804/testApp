export const formatNumberPrice = (num) => {
  num = num * 1000000;
  const price = num.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return price;
};
export const formatNumber = (num) => {
  let number = parseFloat(num).toFixed(2);
  return number;
};
export const formatPriceCoin = (num) => {
  const price = num.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return price;
};
export const formatChangeCoin = (num) => {
  return formatNumber(num) + "%";
};
