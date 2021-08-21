#!/usr/bin/env node

const chalk = require('chalk')

const path = require('path')

const { projectInstall } = require('./projectInstall')

if (process.argv.length < 3) {
  console.log(chalk.blue('You have to provide a project name '))
  console.log(chalk.blue('For example...'))
  console.log(chalk.blue('npx npm_register_test your_app_name'))
  return process.exit(1)
}

const projectName = process.argv[2]
const currentPath = process.cwd()
const projectPath = path.join(currentPath, projectName)
const repo = 'git@github.com:Heisey/react_template_custom.git'

try {
  fs.mkdirSync(projectPath)
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log(chalk.red('Project Name already exists in current dir, try another name'))
  } else {
    console.log(chalk.red(err))
  }
  process.exit(1)
}

projectInstall({
  repo,
  projectName,
  projectPath
})