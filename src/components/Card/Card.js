import React, { useState, useRef } from 'react'

import 'components/Card/Card.scss'
import Timer from 'components/Timer/Timer'
import Inputfiled from 'components/Inputfield/Inputfield'
import { mergeAscSort, mergeDesSort } from 'utils/sort'

const Card = () => {
  const [number, setNumber] = useState([])
  const [ascending, setAscendingSort] = useState({})
  const arrInput = useRef()

  const clickHandler = () => {
    if (number.length === 0) alert('내용을 입력해주세요')

    setAscendingSort({
      asc: mergeAscSort(number.split(',').map((num) => Number(num))),
      des: mergeDesSort(number.split(',').map((num) => Number(num))),
    })
  }
  return (
    <div className="Layout">
      <Timer standardTime="ko" />
      <Inputfiled
        setNumber={setNumber}
        number={number}
        input
        value={number}
        ref={arrInput}
      />
      <button onClick={clickHandler}>정렬하기</button>
      <Inputfiled number={ascending.asc} read />
      <Inputfiled number={ascending.des} read delay />
      <Timer standardTime="us" />
    </div>
  )
}

export default Card
