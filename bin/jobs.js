const Queue = require("bull");
const path = require("path");

const redis = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

const job1Queue = new Queue("job1", redis);
const job2Queue = new Queue("job2", redis);
const job3Queue = new Queue("job3", redis);

const payload = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.
`;

job1Queue.add({ payload }, { repeat: { every: 1 * 60000 } });
job2Queue.add({ payload }, { repeat: { every: 2 * 60000 } });
job3Queue.add({ payload }, { repeat: { every: 3 * 60000 } });

job1Queue.process(path.resolve(__dirname, "../jobs/job1.js"));
job2Queue.process(path.resolve(__dirname, "../jobs/job2.js"));
job3Queue.process(path.resolve(__dirname, "../jobs/job3.js"));

[job1Queue, job2Queue, job3Queue].forEach(jobQueue => {
  jobQueue.on("failed", (job, error) =>
    console.error(`[${job.id}] Job failed`, error)
  );
});
