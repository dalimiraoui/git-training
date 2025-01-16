# Git & GitHub Commands Documentation

This document provides a comprehensive guide to Git and GitHub commands and functionalities, based on the knowledge acquired from the YouTube video [Learn Git & GitHub](https://www.youtube.com/watch?v=RGOj5yH7evk).

I have followed the instruction given in this tutorial and created a documentation over the most used commands for GitHub & Git, and I have listed it below.
## Table of Contents
- [Introduction](#introduction)
- [Git Basics](#git-basics)
  - [Git Configuration](#git-configuration)
  - [Initializing a Repository](#initializing-a-repository)
  - [Staging and Committing](#staging-and-committing)
- [Branching and Merging](#branching-and-merging)
- [Remote Repositories](#remote-repositories)
  - [Connecting to GitHub](#connecting-to-github)
  - [Pushing and Pulling Changes](#pushing-and-pulling-changes)
- [Advanced Git Commands](#advanced-git-commands)
  - [Working with Stashes](#working-with-stashes)
- [GitHub-Specific Features](#github-specific-features)
  - [Issues and Pull Requests](#issues-and-pull-requests)
  - [Cloning and Forking](#cloning-and-forking)
  - [GitHub Pages](#github-pages)

---

## Introduction
Git is a distributed version control system used for tracking changes in source code. GitHub is a platform for hosting Git repositories and collaborating on projects. Together, they are essential tools for developers.

---

## Git Basics

### Git Configuration
Set up user details for your Git environment:
```bash
# Set global username
$ git config --global user.name "Your Name"

# Set global email
$ git config --global user.email "your.email@example.com"

# Verify configuration
$ git config --list
```

### Initializing a Repository
Create a new Git repository:
```bash
# Initialize a Git repository in the current directory
$ git init

# Clone an existing repository
$ git clone <repository-url>
```

### Staging and Committing
Add and save changes to your repository:
```bash
# Check the status of your working directory
$ git status

# Add files to the staging area
$ git add <file-name>

# Add all changes to the staging area
$ git add .

# Commit staged changes
$ git commit -m "Your commit message"

# View commit history
$ git log
```

---

## Branching and Merging
Work on separate features without affecting the main codebase:
```bash
# Create a new branch
$ git branch <branch-name>

# Switch to a branch
$ git checkout <branch-name>

# Create and switch to a new branch
$ git checkout -b <branch-name>

# Merge a branch into the current branch
$ git merge <branch-name>

# Delete a branch
$ git branch -d <branch-name>
```

---

## Remote Repositories

### Connecting to GitHub
Link your local repository to a remote repository:
```bash
# Add a remote repository
$ git remote add origin <repository-url>

# Verify remote URL
$ git remote -v
```

### Pushing and Pulling Changes
Synchronize changes with the remote repository:
```bash
# Push changes to the remote repository
$ git push origin <branch-name>

# Pull changes from the remote repository
$ git pull origin <branch-name>

# Fetch changes without merging
$ git fetch
```

---

## Advanced Git Commands

### Undoing Changes
Revert changes to your working directory:
```bash
# Unstage a file
$ git reset <file-name>

# Revert to a previous commit
$ git reset --hard <commit-hash>
```

### Viewing Differences
Inspect changes in your files:
```bash
# Show changes in the working directory
$ git diff

# Show changes between commits
$ git diff <commit-hash1> <commit-hash2>
```

### Working with Stashes
#### Viewing Stashed Files
To view the list of stashed changes:
```bash
# Show list of stashed changes
$ git stash list
```

#### Applying Stashed Changes
If you want to apply stashed changes to the current branch:
```bash
# Apply the most recent stash
$ git stash apply

# Apply a specific stash
$ git stash apply stash@{n}
```
Replace `n` with the stash index (e.g., `stash@{0}`).

#### Moving Stashed Changes to a Different Branch
To apply stashed changes to a different branch:
```bash
# Switch to the target branch
$ git checkout <branch-name>

# Apply the stash
$ git stash apply
```

#### Removing a Stash
Once you've applied the changes and no longer need the stash:
```bash
# Remove a specific stash
$ git stash drop stash@{n}

# Apply and remove the most recent stash
$ git stash pop
```

---

## GitHub-Specific Features

### Issues and Pull Requests
Collaborate on projects effectively:
```text
- **Issues:** Used to track tasks, enhancements, and bugs.
- **Pull Requests:** Propose changes to the codebase, review, and merge.
```

### Cloning and Forking
Contribute to existing repositories:
```bash
# Clone a repository to your local machine
$ git clone <repository-url>

# Fork a repository using the GitHub web interface
```

### GitHub Pages
Host static websites directly from your repository:
```text
1. Create a branch named `gh-pages`.
2. Add your static files.
3. Push the branch to GitHub.
4. Access your site at `https://<username>.github.io/<repository-name>/`.
```

---

## Conclusion
This documentation covers the essential Git and GitHub commands. For more details, refer to the [official Git documentation](https://git-scm.com/doc) and [GitHub documentation](https://docs.github.com/).
