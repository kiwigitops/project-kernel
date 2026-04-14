# Quality Bar

The quality bar defines what "good enough to ship" means for this project.

## Baseline

A change should be:

- correct for the stated use case,
- understandable by the next maintainer,
- covered by appropriate tests or documented manual verification,
- consistent with existing project patterns,
- documented where behavior or usage changes,
- and reversible enough that future changes are not trapped.

## Review Criteria

Reviewers should check:

- behavior,
- edge cases,
- error handling,
- security implications,
- performance impact,
- accessibility or usability when relevant,
- docs and memory updates,
- and unnecessary complexity.

## Quality Signals

Good changes usually:

- reduce ambiguity,
- remove dead paths,
- keep public interfaces stable,
- make failure modes clearer,
- and improve the project without unrelated churn.

## When To Stop

Do not polish endlessly. Stop when the change meets the definition of done and remaining improvements are better tracked as future work.

