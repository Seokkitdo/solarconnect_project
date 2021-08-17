import React, { useState, useEffect } from 'react'
import 'components/Timer/Timer.scss'
const Timer = ({ standardTime }) => {
  const [time, setTime] = useState(null)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const getTime = () => {
    const date = new Date()
    const filterTime =
      standardTime === 'ko'
        ? date.toLocaleDateString('ko-KR', options)
        : date.toLocaleDateString('en-US', options)
    setTime(filterTime)
  }

  useEffect(() => {
    setInterval(getTime(), 1000)

    return () => {
      setInterval(getTime(), 1000)
    }
  }, [])
  return <div className="timer">{time}</div>
}

export default Timer
