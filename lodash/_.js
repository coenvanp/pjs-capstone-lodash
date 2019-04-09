const _ = {
  clamp(number, lower, upper){
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue
  },
  inRange(number, start, end){
    if(typeof end == 'undefined'){
      end = start
      start = 0
    }
    if(start>end){
      let temp = end
      end = start
      start = temp
    }
    const IsInRange = start<=number && number<end
    return IsInRange
  },
  words(string){
    words = string.split(' ')
    return words
  },
  pad(string, length){
    if(length<=string.length){
      return string
    }
    const startPaddingLength =
    Math.floor((length-string.length)/2)
    const endPaddingLength = length - string.length -	startPaddingLength
    paddedString =' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength)
    return paddedString
  },
  has(object, key){
    const hasValue = object[key]
    if(hasValue!=undefined){
      return true
    }
    else{
      return false
    }
  },
  invert(object){
    var invertedObject = {}
    for(let x in object){
      const originalValue = object[x]
      invertedObject = {originalValue: x}
    }
    return invertedObject
  },
  findKey(object, predicate){
    for(let x in object){
      let value = object[x]
      let predicateReturnValue = predicate(value)
      if(predicateReturnValue===true){
        return x
      }
    }
    return undefined
  },
  drop(array, n){
    if(n===undefined){
      n=1;
    }
    let droppedArray = array.slice(n, array.length)
    return droppedArray
  },
  dropWhile(array, predicate){
    const cb = (element, index) =>{
      return !predicate(element, index, array)
    }
    dropNumber = array.findIndex(cb)
    droppedArray = this.drop(array, dropNumber)
    return droppedArray
  },
  chunk(array, size){
    if(size===undefined){
      size = 1
    }
    var arraychunks = []
    for (let i = 0; i<array.length; i+=size){
      arrayChunk = array.slice(i, i+size)
      arraychunks.push(arrayChunk)
    }
    return arraychunks
  }
}




// Do not write or modify code below this line.
module.exports = _;