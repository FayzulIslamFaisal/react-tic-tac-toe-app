/* eslint-disable react/prop-types */

const Squar = ({value, handleClick }) => {
  return (
    <>
    {
   <button onClick={handleClick}> {value ? value : ""} </button>
    }
    </>
    
    
  )
}

export default Squar