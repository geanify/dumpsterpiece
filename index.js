const useMemePad = (a,b,c='') => ((str, len, char = ' ') => `${[...new Array(len - str.length)].fill(char).join('')}${str}`)(a+'', b+'', (c+'')[0])

const useBinarySearch = (arr = [], nr, l=0, h=arr.length) => arr[Math.floor(l + (h-l)/2)] === nr ? Math.floor(l + (h-l)/2) : (l >= h ? -1 : (nr <= arr[Math.floor(l + (h-l)/2)] ? useBinarySearch(arr, nr, l, Math.floor(l + (h-l)/2)) : useBinarySearch(arr, nr, Math.floor(l + (h-l)/2), h))) 


module.exports = {
  useMemePad,
  useBinarySearch
}
