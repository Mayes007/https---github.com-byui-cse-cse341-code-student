"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class QueueManager {
    constructor(priority) {
        this.priority = priority;
        this.killswitches = [];
        this.jobQueues = Array(priority.length).fill(null).map(() => []);
    }
    get jobs() {
        const inQueue = this.jobQueues.reduce((acc, queue) => acc + queue.length, 0);
        return this.isRunning ? inQueue + 1 : inQueue;
    }
    get isRunning() {
        return this.currentJob instanceof Slot;
    }
    get count() {
        const queueLengths = this.jobQueues.map(arr => arr.length);
        Object.assign(queueLengths, {
            total: this.jobs,
        });
        return queueLengths;
    }
    acquireSlot(op) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (typeof op !== 'number')
                throw '[QueueManager] Provide a number or enum key.';
            const slot = new Slot(op);
            if (this.jobs > 0) {
                this.jobQueues[op].push(slot);
                this.killswitches.push(slot.cancel);
                yield slot.activation;
            }
            this.currentJob = slot;
            return () => this.triggerNextJob();
        });
    }
    retractSlots(op) {
        let count = 0;
        const cancelAll = (arr) => {
            arr.forEach(slot => slot.cancel());
            arr.length = 0;
        };
        if (typeof op !== 'number') {
            count = this.jobs;
            this.jobQueues.forEach(cancelAll);
            this.triggerNextJob();
            return count;
        }
        count = this.jobQueues[op].length + Number(this.isRunning);
        cancelAll(this.jobQueues[op]);
        if (this.currentJob && this.currentJob.type === op)
            this.triggerNextJob();
        return count;
    }
    dispose() {
        this.killswitches.forEach(killswitch => killswitch('[QueueManager] Queue disposed'));
    }
    triggerNextJob() {
        this.currentJob = undefined;
        if (this.jobs > 0) {
            let nextQueueId = this.priority.find(i => this.jobQueues[i].length > 0);
            if (typeof nextQueueId !== 'number')
                throw '[QueueManager] Jobs left on the queue are inaccessible.';
            const next = this.jobQueues[nextQueueId].shift();
            if (!(next instanceof Slot)) {
                this.retractSlots();
                throw '[QueueManager] Unexpected job object found.';
            }
            next.run();
        }
    }
}
exports.default = QueueManager;
class Slot {
    constructor(type) {
        let resolve;
        let reject;
        this.activation = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        this.type = type;
        this.run = resolve;
        this.cancel = reject;
    }
}
//# sourceMappingURL=QueueManager.js.map