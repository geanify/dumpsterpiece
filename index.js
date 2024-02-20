const useMemePad = (a,b,c='') => (
  (str, len, char = ' ') => 
    (new Array(len - str.length))
      .fill(char)
      .join('')
    + str
  )(a+'', b+'', (c+'')[0])

const useBinarySearch = (arr = [], nr, l=0, h=arr.length) => (
  (m)=>arr[m] === nr 
  ? m 
  : (
    l >= h 
    ? -1 
    : (nr <= arr[m] 
      ? useBinarySearch(arr, nr, l, m) 
      : useBinarySearch(arr, nr, m, h))
    )
  )(Math.floor(l + (h-l)/2)) 

const useBubbleSort = (arr=[], i=0, j=0) => 
  i >= arr.length - 1 
  ? arr 
  : (
    j >= arr.length - 1 - i 
    ? useBubbleSort(arr, i+1,0) 
    : (
      arr[j] > arr[j+1] 
      ? ([a,b] = [arr[j],arr[j+1]]) 
        && ([arr[j],arr[j+1]] = [b,a]) 
        && useBubbleSort(arr, i, j + 1) 
      : useBubbleSort(arr, i, j + 1)
      )
    )

console.log(useMemePad('test', 20))
console.log(useBinarySearch([1,2,3,4], 2))

console.log(useBubbleSort([4,3,2,1]))

module.exports = {
  useMemePad,
  useBinarySearch,
  useBubbleSort,
}
