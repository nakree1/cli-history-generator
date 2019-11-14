#!/usr/bin/env node

const yargs = require('yargs');
const generateFile = require('./generateFile');

const options = yargs
  .usage('History Generator 1.0\nAuthor: Max Melnychuk\nUsage: -s <start_date> -t <target_id> -f <filename> --rate_i <min> <max> --rate_s <min> <max>')
  .option('s', { alias: 'start', describe: 'Start date. Format YYYY-MM-DD.', type: 'string', demandOption: true })
  .option('t', { alias: 'target', describe: 'Target id', type: 'number', demandOption: true })
  .option('f', { alias: 'filename', describe: 'Name for generated file', type: 'string' })
  .option('rate_i', { alias: 'importance', describe: '[min, max] values for importance', type: 'array' })
  .option('rate_s', { alias: 'satisfaction', describe: '[min, max] values for satisfaction', type: 'array' })
  .argv;

generateFile(options);
