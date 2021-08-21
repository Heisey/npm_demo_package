const chalk = require('chalk')

const { execSync} = require('child_process')
const fs = require('fs')
const path = require('path')

const projectInstall = async (config) => {
  try {
    console.log(chalk.blue('Downloading files'))
    execSync(`git clone ${config.repo} ${config.projectName}`)

    process.chdir(config.projectPath)

    console.log(chalk.blue('Installing dependencies'))
    execSync('npm install')

    console.log(chalk.blue('Removing useless files'))
    execSync('npx rimraf ./.git')
    fs.rmdirSync(path.join(config.projectPath, 'bin'), { recursive: true })

    console.log('Install complete')

  } catch (err) {
    console.log(err)
  }
}

module.exports.projectInstall = projectInstall