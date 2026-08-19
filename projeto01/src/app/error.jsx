'use client'

import ErrorComponent from "@/components/error"  
export default function Error({ error, reset }) {
  return (
    <div className="container">
      <div className="flex">
        <h2>Ocorreu um erro!</h2>
        <ErrorComponent />
        <button onClick={() => reset()}>Tentar novamente</button>
      </div>
    </div>
  )
}