const fs = require('fs');
const performance = require('perf_hooks').performance;

const parseDate = require('./dateModule').parseDate;
const generateDays = require('./dateModule').generateDays;
const generateLine = require('./generateLine');

function normalizeRate(options = []) {
  const min = (options[0] >= 1 && options[0] <= 10) ? options[0] : 4;
  const max = (options[1] > min && options[1] <= 10) ? options[1] : 8;

  return [min, max]
}

module.exports = function generateFile(options) {
  const t0 = performance.now();

  const now = new Date();
  const start = parseDate(options.start);
  const points = generateDays({ start, end: now});

  console.log('-> Start generating data...');
  const importanceRate = normalizeRate(options.importance);
  const satisfactionRate = normalizeRate(options.satisfaction);

  const data = points.map(date => generateLine({
    date: parseDate(date),
    target: options.target,
    importanceRate,
    satisfactionRate,
    now,
  })).join('\n');

  const fileName = options.f || `${options.t}_${options.s}.txt`;

  console.log(`-> Writing a file ${fileName}...`);
  fs.writeFileSync(fileName, data);

  const t1 = performance.now();
  const time = Math.round((t1 - t0) * 100) / 100;
  console.log(`-> Finish. Elapsed time ${time}ms`);
};
