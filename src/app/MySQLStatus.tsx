'use client'
import { useEffect, useState } from 'react'

export default function MySQLStatus() {
  const [status, setStatus] = useState<{ status: string; message: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/mysql-status')
      .then(res => res.json())
      .then(data => {
        setStatus(data);
        setLoading(false);
      })
      .catch(error => {
        setStatus({ status: 'error', message: `Failed to check MySQL connection ${error}` });
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Checking MySQL connection...</div>;

  return (
    <div className={status?.status === 'connected' ? 'text-green-600' : 'text-red-600'}>
      {status?.message}
    </div>
  );
}
