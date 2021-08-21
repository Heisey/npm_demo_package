const chalk = require('chalk')

const projectInstall = async (config) => {
  try {
    console.log(chalk.blue('Downloading files'))
    console.log(chalk.blue(config.repo))
    console.log('curios')


  } catch (err) {
    console.log(err)
  }
}

module.exports.projectInstall = projectInstall