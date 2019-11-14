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

  console.log('-> Start generating data...');
  const now = new Date();
  const start = parseDate(options.start);
  const points = generateDays({ start, end: now});
  const { target, importance, satisfaction } = options;
  const importanceRate = normalizeRate(importance);
  const satisfactionRate = normalizeRate(satisfaction);

  console.log(`-> Created ${points.length} point${points.length > 1 ? 's' : ''}...`);
  const data = points.map(date => generateLine({
    date,
    now,
    target,
    importanceRate,
    satisfactionRate,
  })).join('\n');

  const fileName = options.f || `${options.start}_id_${target}.txt`;

  console.log(`-> Writing a file ${fileName}...`);
  fs.writeFileSync(fileName, data);

  const t1 = performance.now();
  const time = Math.round((t1 - t0) * 100) / 100;
  console.log(`-> Finish. Elapsed time ${time}ms`);
};
