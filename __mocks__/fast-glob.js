const glob = jest.createMockFromModule("fast-glob");

let mockFiles = [];
function __setMockFiles(newMockFiles) {
  mockFiles = newMockFiles;
}

function sync(source) {
  return mockFiles;
}

glob.__setMockFiles = __setMockFiles;
glob.sync = sync;

module.exports = glob;
