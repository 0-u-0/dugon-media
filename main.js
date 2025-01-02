
const DEFAULT_CONFIG_PATH = './config';
const Agent = require('./libs/agent');
const Hub = require('./libs/hub');
const Monitor = require('./libs/monitor');


const logger = require('./libs/logger').logger;
const log = logger.getLogger('main');

async function main() {

  let configPath = DEFAULT_CONFIG_PATH;
  if (process.argv.length === 3) {
    configPath = [process.cwd(), process.argv[2]].join('/');
    log.info('Config file -> ', configPath);
  }

  const Config = require(configPath);

  logger.loadConfigure(Config.logLevel, Config.logToFile, Config.logFilePath, Config.logModule);

  log.info(`Config -> ${JSON.stringify(Config)}`);
  log.info(`Nats -> ${Config.nats.join(' ')}`);
  log.info(`UDP port range -> ${logger.toLog(Config.port)}`);

  const hub = new Hub(Config.ip, Config.publicIp, Config.port);
  await hub.init();

  if (Config.monitor != 0) {
    const monitor = new Monitor(Config.monitor, hub);
    monitor.serve();

    log.info('Run monitor');
  }

  const agent = new Agent(hub);
  agent.init(Config.nats, Config.id, Config.name, Config.host, Config.area);

}


main();