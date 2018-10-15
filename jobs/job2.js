function crunchCPU() {
  // crunch some CPU time
  for (let i = 0; i <= 100 * 1000 * 1000; i++) {
    i = Math.random() >= 0.5 ? i : i - 1;
  }
}

module.exports = function(job) {
  console.log(`[${job.id}] Job2 started`);
  crunchCPU();
  console.log(`[${job.id}] Job2 finished`);
  return Promise.resolve();
};
