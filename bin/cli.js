const { execSync} = require('child_process')
const path = require('path')
const fs = require('fs')

if (process.argv.length < 3) {
  console.log('You have to provide a name dumb dumb')
  return process.exit(1)
}

console.log('you used a name')
process.exit(1)