import { useState } from "react"
import React from 'react'

const SearchResult = () => {
  const [numResult,setNumResult] = useState(0)
  return (
    <div>
      <h1>we have {numResult} for you</h1>
    </div>
  )
}

export default SearchResult

