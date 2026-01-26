// Bank Card UI component
export default function BankCard({ bank, number }: { bank: string; number: string }) {
    return <div>{bank} - {number}</div>;
}