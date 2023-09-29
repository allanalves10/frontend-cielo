export default function formatMoney(value: number): string {
    if (!value) return '';

    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value)
}