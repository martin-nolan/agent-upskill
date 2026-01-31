# Repo Map

This document explains the structure of the repo and how to work through it.

## Top-level layout

```
/blueprints
/deployment
/docs
/enterprise
/google-adk
/google-adk-python
/integrations
/langgraph-examples
/orchestration
/crewai-examples
/azure-agent-framework-examples
/specialist-agents
/dev
```

## How to use this repo

- Start with `docs/00-roadmap.md`
- Follow the docs in numeric order
- Each folder contains examples with their own README and tests

## Folder intent

- `google-adk/` — Google ADK examples (TypeScript)
- `google-adk-python/` — Google ADK examples (Python)
- `orchestration/` — workflows and multi-agent patterns
- `enterprise/` — safety, observability, evaluation, governance, security
- `deployment/` — Vertex AI Agent Engine + Cloud Run + hybrid patterns
- `integrations/` — real tools (HTTP, RAG, BigQuery, Search)
- `specialist-agents/` — domain-specific agent examples
- `blueprints/` — full enterprise agent template
- `langgraph-examples/` — orchestration parity in LangGraph
- `crewai-examples/` — orchestration parity in CrewAI
- `azure-agent-framework-examples/` — orchestration parity in Azure Agent Framework (later phase)
- `dev/` — shared scripts for setup and testing
- `docs/` — learning docs and templates

## Conventions

- Every example includes a README, CLI, local dev UI, and tests
- Use `docs/templates/example-readme-template.md` for new examples
- Update `docs/00-roadmap.md` as you complete items
