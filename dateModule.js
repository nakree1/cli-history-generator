const format = require("date-fns").format;
const parse = require("date-fns").parse;
const eachDayOfInterval = require("date-fns").eachDayOfInterval;

function formatDate(date) {
  return format(date, 'yyyy-MM-dd');
}

function parseDate(str) {
  return parse(str,'yyyy-MM-dd', new Date());
}

function generateDays({ start, end }) {
  return eachDayOfInterval({ start, end });
}

module.exports = {
  formatDate,
  parseDate,
  generateDays
};
