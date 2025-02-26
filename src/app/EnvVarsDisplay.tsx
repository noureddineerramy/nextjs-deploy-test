'use client'
import { useEffect, useState } from 'react'

export default function EnvVarsDisplay() {
  const [envVars, setEnvVars] = useState<Record<string, string>>({})

  useEffect(() => {
    fetch('/api/env-vars')
      .then(res => res.json())
      .then(data => setEnvVars(data))
      .catch(error => console.error('Error fetching env vars:', error))
  }, [])

  return (
    <div id="environnement-vars">
      <h2>Environment Variables</h2>
      <pre>
        {JSON.stringify(envVars, null, 2)}
      </pre>
    </div>
  )
}
