const GitInfo = require('./git-info');

describe('GitInfo', () => {
    let gitClient;
    let gitInfo;

    beforeEach(() => {
        gitClient = {
            status: jest.fn(),
            raw: jest.fn(),
            branchLocal: jest.fn(),
            log: jest.fn(),
        };
        gitInfo = new GitInfo(gitClient);
    });

    describe('GitInfo defined', () => {
        it('should defined', function () {
            expect(gitInfo).toBeDefined();
        });
    })

    describe('getStatus', () => {
        it('should return the status of the repo', async () => {
            gitClient.status.mockResolvedValueOnce('Repo status');

            const status = await gitInfo.getStatus();

            expect(status).toBe('Repo status');
            expect(gitClient.status).toHaveBeenCalled();
        });
    });

    describe('getReflog', () => {
        it('should return the reflog of the repo', async () => {
            gitClient.raw.mockResolvedValueOnce('Reflog');

            const reflog = await gitInfo.getReflog();

            expect(reflog).toBe('Reflog');
            expect(gitClient.raw).toHaveBeenCalledWith(['reflog']);
        });
    });

    describe('getCurrentBranch', () => {
        it('should return the current branch of the repo', async () => {
            gitClient.branchLocal.mockResolvedValueOnce({
                current: 'master',
            });

            const currentBranch = await gitInfo.getCurrentBranch();

            expect(currentBranch).toEqual({
                current: 'master',
            });
            expect(gitClient.branchLocal).toHaveBeenCalled();
        });
    });

    describe('getLastCommit', () => {
        it('should return the last commit of the repo', async () => {
            gitClient.log.mockResolvedValueOnce('Last commit');

            const lastCommit = await gitInfo.getLastCommit();

            expect(lastCommit).toBe('Last commit');
            expect(gitClient.log).toHaveBeenCalled();
        });
    });
});
