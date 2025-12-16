# Source Control Buttons for Visual Studio Code

[![License](https://img.shields.io/github/license/idma88/git-buttons-vscode?style=for-the-badge)](https://github.com/idma88/git-buttons-vscode/blob/master/LICENSE)
[![VS Code Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/idma88.git-buttons-vscode?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=idma88.git-buttons-vscode)
[![VS Code Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/idma88.git-buttons-vscode?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=idma88.git-buttons-vscode)
[![VS Code Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/idma88.git-buttons-vscode?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=idma88.git-buttons-vscode)
[![Visual Studio Marketplace Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/idma88.git-buttons-vscode?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=idma88.git-buttons-vscode)

This extension adds additional buttons to the source control panel. See configuration options for full list of available buttons that can be added. Note that only git actions are supported at this time.

## Preview

![Preview](https://raw.githubusercontent.com/idma88/git-buttons-vscode/master/resources/preview.png)<br/>
*Note: Views not all available buttons*

## Extension Settings

This extension contributes the following settings:

Settings | Description
-|-
`git-buttons.commandsLocation` | Specifies where actions appears on the title of SCM Providers
`git-buttons.showGitPull` | Show button/command `Git Pull`
`git-buttons.showGitPullRebase` | Show button/command `Git Pull (Rebase)`
`git-buttons.showGitPullFrom` | Show button/command `Git Pull From...`
`git-buttons.showGitPush` | Show button/command `Git Push`
`git-buttons.showGitPushTo` | Show button/command `Git Push To...`
`git-buttons.showGitSync` | Show button/command `Sync`
`git-buttons.showGitSyncRebase` | Show button/command `Sync (Rebase)`
`git-buttons.showGitCheckout` | Show button/command `Git Checkout`
`git-buttons.showGitPublish` | Show button/command `Git Publish Branch...`
`git-buttons.showGitCommitAll` | Show button/command `Git Commit All`
`git-buttons.showGitCommitAllAmend` | Show button/command `Git Commit All (Amend)`
`git-buttons.showGitCommitAllSigned` | Show button/command `Git Commit All (Signed Off)`
`git-buttons.showGitCommitStaged` | Show button/command `Git Commit Staged`
`git-buttons.showGitCommitStagedAmend` | Show button/command `Git Commit Staged (Amend)`
`git-buttons.showGitCommitStagedSigned` | Show button/command `Git Commit Staged (Signed Off)`
`git-buttons.showGitUndoCommit` | Show button/command `Git Undo Commit`
`git-buttons.showGitCleanAll` | Show button/command `Git Clean All`
`git-buttons.showGitStageAll` | Show button/command `Git Stage All`
`git-buttons.showGitUnstageAll` | Show button/command `Git Unstage All`
`git-buttons.showGitStash` | Show button/command `Git Stash`
`git-buttons.showGitStashIncludeUntracked` | Show button/command `Git Stash (Include Untracked)`
`git-buttons.showGitStashApply` | Show button/command `Git Apply Stash...`
`git-buttons.showGitStashApplyLatest` | Show button/command `Git Apply Latest Stash`
`git-buttons.showGitStashPop` | Show button/command `Git Pop Stash...`
`git-buttons.showGitStashPopLatest` | Show button/command `Git Pop Latest Stash`
`git-buttons.showGitStashDrop` | Show button/command `Git Drop Stash...`
`git-buttons.showGitShowOutput` | Show button/command `Git Show Output`

## Release Notes

### Version 1.2.3

- Fixed behavior of the `git-buttons.commandsLocation` command

### Version 1.2.2

- Added `git-buttons.commandsLocation` setting
- Improved translations

### Version 1.2.1

- Fixed button display for VS Code 1.106 and above

### Version 1.1.0

- Add better support for multi workspace projects

### Version 1.0.0

- Added buttons for `Git Sync` and `Git Sync (Rebase)` commands
- Update README

### Version 0.2.0

- Fix typo in command `Git Stash (Include Unt[r]acked)`

### Version 0.1.1

- Updates to store page

### Version 0.1.0

- Initial release
