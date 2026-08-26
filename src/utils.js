// small shared helpers

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function truncate(s, n = 80) {
  return s.length > n ? s.slice(0, n - 1) + '…' : s;
}

module.exports = { sleep, truncate };
