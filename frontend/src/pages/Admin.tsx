import { Button } from "@/components/ui/button";
import { CenteredContainer } from "@/styles/common";
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { NavBar } from "@/components/NavBar";

export function Admin() {
    const [authorized, setAuthorized] = useState(false);
    const [password, setPassword] = useState("");

    // TODO: Change this to use backend for validation
    const ADMIN_PASSWORD = "mypassword";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setAuthorized(true);
            setPassword("");
        } else {
            alert("Wrong password");
        }
    };

    if (!authorized) {
        return (
            <><NavBar hideLinks={true} /><CenteredContainer>
                <h1>Admin Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex w-full max-w-sm items-center gap-2">
                        <Input className="m-2"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password" />
                        <Button variant={"secondary"} type="submit">Enter</Button>
                    </div>
                </form>
            </CenteredContainer></>
        );
    }

    return (
        <><NavBar hideLinks={true} /><CenteredContainer>
            <h1>Admin Dashboard</h1>
        </CenteredContainer></>
    );
}
