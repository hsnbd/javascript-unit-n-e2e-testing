const simpleGit = require('simple-git');
const GitInfo = require('./git-info');

describe('GitInfo e2e', () => {
    let gitInfo;

    beforeAll(() => {
        // Set up the GitInfo instance
        const gitClient = simpleGit(__dirname + '/../../');
        gitInfo = new GitInfo(gitClient);
    });

    it('should return the correct status', async () => {
        const status = await gitInfo.getStatus();
        expect(status.current).toBe('main');
    });

    it('should return the correct reflog', async () => {
        const reflog = await gitInfo.getReflog();
        expect(reflog).toMatch(/(feat|fix)+:\W\w.*/);
    });

    it('should return the correct current branch', async () => {
        const branch = await gitInfo.getCurrentBranch();
        expect(branch.current).toBe('main');
    });

    it('should return the correct last commit', async () => {
        const log = await gitInfo.getLastCommit();
        expect(log.latest.author_name).toBe('hsnbd');
    });
});
