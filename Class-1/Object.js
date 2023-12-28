 let object ={
  key1 : 'value1',
  key2 : 'value2',
  key3 : 'value3',
}

console.log(Object.keys(object))
console.log(Object.values(object))
console.log(Object.entries(object))
console.log(object.hasOwnProperty('key3'))
console.log(Object.assign({},object,{key4 : 'value4'},{key5 : 'value5'}));  