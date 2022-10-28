import React from 'react'

const InputSearch = ({inputText,setInputText}) => {

 const handleChange = (e) =>{
  setInputText(e.target.value)
 }

  return (
    <input onChange={{}} type="text" />
  )
}

export default InputSearch