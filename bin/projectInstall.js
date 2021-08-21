const chalk = require('chalk')

const { execSync} = require('child_process')

const projectInstall = async (config) => {
  try {
    console.log(chalk.blue('Downloading files'))
    execSync(`git clone ${config.repo} ${config.projectName}`)

    process.chdir(config.projectPath)

    console.log(chalk.blue('Installing dependencies'))
    execSync('npm install')

    console.log('Install complete')

  } catch (err) {
    console.log(err)
  }
}

module.exports.projectInstall = projectInstall