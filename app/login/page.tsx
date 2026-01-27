"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple validation (replace with real auth logic)
        if (email === "admin@example.com" && password === "password") {
            router.push("/overview");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <form className="bg-white p-8 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input className="w-full px-3 py-2 border rounded" type="email" id="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input className="w-full px-3 py-2 border rounded" type="password" id="password" name="password" required value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" type="submit">Login</button>
            </form>
        </div>
    );
}
