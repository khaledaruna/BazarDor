export function formatBengaliNumber(
  value: number,
  maximumFractionDigits = 1,
): string {
  return new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits,
  }).format(value);
}

export function formatPrice(value: number): string {
  return `${formatBengaliNumber(value, 0)} টাকা`;
}

export function formatChange(value: number): string {
  const prefix = value > 0 ? "▲ " : value < 0 ? "▼ " : "— ";
  return `${prefix}${formatBengaliNumber(Math.abs(value))}%`;
}