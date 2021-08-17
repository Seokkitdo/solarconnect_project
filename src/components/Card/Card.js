import React, { useState } from 'react'

import 'components/Card/Card.scss'
import Timer from 'components/Timer/Timer'
import Inputfiled from 'components/Inputfield/Inputfield'

const Card = () => {
  const [number, setNumber] = useState([])
  const [sortNumber, setSortNumber] = useState([])

  function mergeSort(arr) {
    if (arr.length === 1) return arr

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
  }

  function merge(left, right) {
    const descendingResult = []
    const ascendingResult = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        ascendingResult.push(left[leftIndex])
        descendingResult.push(right[rightIndex])
        leftIndex++
      } else {
        ascendingResult.push(right[rightIndex])
        descendingResult.push(left[leftIndex])
        rightIndex++
      }
    }
    console.log('descendingResult', descendingResult)
    return ascendingResult.concat(
      left.slice(leftIndex),
      right.slice(rightIndex)
    )
  }

  const clickHandler = () => {
    setSortNumber(mergeSort(number.split(',').map((num) => Number(num))))
    setNumber([])
  }
  return (
    <div className="Layout">
      <Timer standardTime="ko" />
      <Inputfiled setNumber={setNumber} number={number} input value={number} />
      <button onClick={clickHandler}>정렬하기</button>
      <Inputfiled number={sortNumber} read />

      <Inputfiled number={sortNumber} read />

      <Timer standardTime="us" />
    </div>
  )
}

export default Card
