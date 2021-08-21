#!/usr/bin/env node
const { execSync} = require('child_process')
const path = require('path')
const fs = require('fs')

const { projectInstall } = require('./projectInstall')

if (process.argv.length < 3) {
  console.log('You have to provide a project name ')
  console.log('For example...')
  console.log('npx npm_register_test your_app_name')
  return process.exit(1)
}

const projectName = process.argv[2]
const currentPath = process.cwd()
const projectPath = path.join(currentPath, projectName)
const repo = console.log('cloning repo')



try {
  fs.mkdirSync(projectPath)
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log('Project Name already exists in current dir, try another name')
  } else {
    console.log(err)
  }
  process.exit(1)
}

projectInstall()