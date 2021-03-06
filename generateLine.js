const formatDate = require('./dateModule').formatDate;

function minMaxRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = function({ date, now, target, satisfactionRate, importanceRate}) {
  const importance = minMaxRandom(...satisfactionRate);
  const satisfaction = minMaxRandom(...importanceRate);
  const participation = minMaxRandom(1, 99);
  const ctruScore = Math.round(((importance + satisfaction) / 2) * 10) / 10;
  const time = `to_timestamp('${formatDate(now)}', 'YYYY-MM-DD')`;

  return `insert into history_opinionhistory (created, updated, date, ctru_score, importance, satisfaction,  target_id, participation_share ) values (${time}, ${time} , '${formatDate(date)}', ${ctruScore}, ${importance} , ${satisfaction}, ${target}, ${participation});`
};


