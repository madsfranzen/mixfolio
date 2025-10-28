import { Button } from '@/components/ui/button';
import { CenteredContainer } from '@/styles/common';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { NavBar } from '@/components/NavBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { DataTable } from '@/components/WorksTable/data-table';
import { columns } from '@/components/WorksTable/columns';
import { works } from '@/models/Work';

export function Admin() {
  const [authorized, setAuthorized] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const data = works;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setAuthorized(true);
        setUsername('');
        setPassword('');
        // toast.success('Login successful!');
      } else if (response.status === 401) {
        toast.error('Incorrect username and/or password!');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Cannot reach server. Please try later.');
    }
  };

  if (!authorized) {
    // Login Form
    return (
      <>
        <NavBar hideLinks={true} />
        <CenteredContainer>
          <Card>
            <CardHeader>
              <CardTitle>Admin Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="flex-col space-y-6 max-w-xs">
                  <Input
                    type="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <Button variant={'secondary'} type="submit">
                    Enter
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </CenteredContainer>
      </>
    );
  }
  // Admin Dashboard
  return (
    <>
      <NavBar hideLinks={true} />
      <CenteredContainer>
        <h1>Admin Dashboard</h1>

        <DataTable columns={columns} data={data} />
      </CenteredContainer>
    </>
  );
}
