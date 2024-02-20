const useMemePad = (a,b,c='') => ((str, len, char = ' ') => `${[...new Array(len - str.length)].fill(char).join('')}${str}`)(a+'', b+'', (c+'')[0])

const useBinarySearch = (arr = [], nr, l=0, h=arr.length) => ((m)=>arr[m] === nr ? m : (l >= h ? -1 : (nr <= arr[m] ? useBinarySearch(arr, nr, l, m) : useBinarySearch(arr, nr, m, h))))(Math.floor(l + (h-l)/2)) 


module.exports = {
  useMemePad,
  useBinarySearch
}
