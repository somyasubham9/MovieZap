import React from 'react'
import { useGlobalContext } from '../hooks/context'

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext()
  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
    <div className='navtop'>
    <img alt='icon' src="https://img.icons8.com/cotton/64/000000/cinema-.png"/>
      <h2>MovieZap</h2>
    </div>
    
      <input
        type='text '
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  )
}

export default SearchForm
