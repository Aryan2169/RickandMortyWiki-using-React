import React from 'react'
import styles from "./Search.module.scss"

const Search = ({setSearch,setPageNumber}) => {
    const searchbtn=(e)=>{e.preventDefault()};
  return (
   <form className="d-flex justify-content-center gap-4 mb-5">
    <input 
    onChange={(e)=>{
        setPageNumber(1);
        setSearch(e.target.value);
    }} 
    placeholder="Search for character" 
    type="text" 
    className={styles.input}/>
    {/* <button onClick={searchbtn} className={`${styles.btn} btn btn-primary fs-6`}>Search</button> */}
   </form>
  )
}

export default Search