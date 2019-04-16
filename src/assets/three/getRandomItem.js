const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export default arr => arr[getRandomInt(0, arr.length - 1)]
