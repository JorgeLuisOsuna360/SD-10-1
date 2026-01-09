export function costCalculator(monto) {
    const tarifaFija = 3;
    const tasaInteres = 0.01;

    const interes = monto * tasaInteres;

    const total = monto + tarifaFija + interes;

    return total;
}
