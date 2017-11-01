import service from '../server/service';

import express from 'express';
import config from "../config";

const server = express(service);

server.listen(config.port, config.host, () =>{
    console.info(`IRIS Express server listening on port ${config.port} in ${config.nodeEnv} mode`)
});