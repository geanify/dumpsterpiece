const useMemePad = (a,b,c='') => ((str, len, char = ' ') => `${[...new Array(len - str.length)].fill(char).join('')}${str}`)(a+'', b+'', (c+'')[0])




module.exports = {
  useMemePad
}
