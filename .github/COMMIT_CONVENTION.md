## Git Commit Message Convention

> This is adapted
> from [Angular Contribution Guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)
> and [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

We have very precise rules over how our Git commit messages must be formatted. This format leads to easier to read
commit history.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Type

Must be one of the following:

|  Type   | Description                                                                                    |
|:-------:|:-----------------------------------------------------------------------------------------------|
| `feat`  | for new feature to the codebase                                                                |
|  `fix`  | for patches a bug in your codebase                                                             |
| `docs`  | for documentation only changes                                                                 |
| `test`  | for add or correct tests                                                                       |
| `perf`  | for code change that improves performance                                                      |
| `style` | Changes that do not affect the meaning of the code (white-space, formatting, semi-colons, etc) |

### Scope

The scope could be anything specifying the place of the commit change.

|   Scope    | Description                            |
|:----------:|:---------------------------------------|
| `backend`  | for new change located on backend      |
| `frontend` | for new change located on frontend     |
| `database` | for new change located on database     |

### Description

Use the description field to provide a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end

### Body

Just as in the **description**, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain why you are making the change.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues, Jira tickets and other PRs that this commit **Closes**.

A commit that has a footer BREAKING CHANGE:, or appends ! after the type/scope, introduces a breaking API change.