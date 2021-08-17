export function mergeAscSort(arr) {
  if (arr.length === 1) return arr

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return mergeAsc(mergeAscSort(left), mergeAscSort(right))
}

export function mergeAsc(left, right) {
  const sortResult = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sortResult.push(left[leftIndex])
      leftIndex++
    } else {
      sortResult.push(right[rightIndex])
      rightIndex++
    }
  }
  return sortResult.concat(left.slice(leftIndex), right.slice(rightIndex))
}

export function mergeDesSort(arr) {
  if (arr.length === 1) return arr

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return mergeDes(mergeDesSort(left), mergeDesSort(right))
}

export function mergeDes(left, right) {
  const sortResult = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      sortResult.push(left[leftIndex])
      leftIndex++
    } else {
      sortResult.push(right[rightIndex])
      rightIndex++
    }
  }
  return sortResult.concat(left.slice(leftIndex), right.slice(rightIndex))
}
