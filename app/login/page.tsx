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
        <div className="flex min-h-screen items-center justify-center bg-[#F5F8FF] px-4">
            <form
                className="bg-white border border-[#DCE3F1] rounded-[14px] shadow-[0_2px_6px_rgba(59,130,246,0.08)] p-8 w-full max-w-sm"
                onSubmit={handleSubmit}
            >
                <h1 className="text-[26px] font-bold mb-7 text-center text-[#0F172A]">Login</h1>
                <div className="mb-5">
                    <label className="block text-[13px] font-semibold text-[#64748B] mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-[#DCE3F1] rounded-[10px] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-[13px] font-semibold text-[#64748B] mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-[#DCE3F1] rounded-[10px] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="text-[#EF4444] mb-4 text-center text-[15px]">{error}</p>}
                <button
                    className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-2 rounded-[10px] font-semibold text-[15px] transition"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    );
}