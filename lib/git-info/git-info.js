class GitInfo {
    constructor(gitClient) {
        this.repo = gitClient;
    }

    async getStatus() {
        return await this.repo.status();
    }

    async getReflog() {
        return await this.repo.raw(['reflog']);
    }

    async getCurrentBranch() {
        return await this.repo.branchLocal();
    }

    async getLastCommit() {
        return await this.repo.log();
    }
}

module.exports = GitInfo;