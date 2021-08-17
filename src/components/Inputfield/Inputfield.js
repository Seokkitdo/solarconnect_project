import React from 'react'

import 'components/Inputfield/Inputfield.scss'

const Inputfield = ({ setNumber, number, input, read, value }) => {
  const handleChange = (e) => {
    setNumber(e.target.value)
  }

  const require = input ? '숫자만 입력해주세요' : ''
  console.log(number)
  return (
    <div className="inputWrap">
      {!number ? (
        <textarea
          rows="5"
          type="text"
          placeholder={require}
          value={value}
          onChange={handleChange}
          readOnly={read}
        />
      ) : (
        <textarea
          rows="5"
          type="text"
          placeholder={require}
          value={number}
          onChange={handleChange}
          readOnly={read}
        />
      )}
    </div>
  )
}

export default Inputfield
