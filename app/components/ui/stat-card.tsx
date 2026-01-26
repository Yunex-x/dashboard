// Stat Card UI component
export default function StatCard({ label, value }: { label: string; value: string | number }) {
    return <div><strong>{label}</strong>: {value}</div>;
}