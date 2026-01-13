# Google ADK Agent

Agent Development Kit example using TypeScript and Google's Gemini models.

## Overview

This project demonstrates how to build an agent using Google's Agent Development Kit (ADK). The agent uses function calling to provide the current time in specified cities.

## Tech Stack

- **TypeScript** - Primary language
- **Google ADK** (`@google/adk`) - Agent framework
- **Zod** - Schema validation
- **Gemini 2.5 Flash** - LLM model

## Project Structure

```
time-agent/
├── agent.ts        # Main agent implementation
├── package.json    # Dependencies and scripts
├── tsconfig.json   # TypeScript configuration
└── .env            # API keys (not in git)
```

## Prerequisites

- Node.js 20.12.7 or later
- npm 9.2.0 or later
- Google AI API Key ([Get one here](https://ai.google.dev/))

## Setup

1. Install dependencies:
   ```bash
   cd time-agent
   npm install
   # Or using make:
   make install
   ```

2. Configure your environment in `.env`:
   ```bash
   GOOGLE_GENAI_API_KEY=your_api_key_here
   PROJECT_ID=your_project_id_here
   ```

## Usage

### Using Make (Recommended)

```bash
make cli        # Run CLI interface
make web        # Run web interface
make dev        # Development mode with auto-reload
make build      # Compile TypeScript
make clean      # Remove build artifacts
make help       # Show all available commands
```

### Using npm directly

#### CLI Interface
Run the agent in command-line interface mode:
```bash
npm run cli
```

Then interact with the agent:
```
[user]: What time is it in Tokyo?
```

### Web Interface
Launch the web-based interface:
```bash
npm run web
```

This opens a browser-based chat interface for interacting with the agent.

### Other Commands

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled JavaScript
- `npm run dev` - Run in development mode with auto-reload

## Current Features

- **Function Calling**: The agent uses a `get_current_time` tool to provide time information
- **Natural Language Processing**: Powered by Gemini 2.5 Flash model
- **Type Safety**: Full TypeScript implementation with Zod schemas

## Learning Goals

This project serves as a foundation for exploring advanced ADK concepts:

- **Orchestration Patterns** - Sequential, parallel, loop workflows for complex tasks
- **Multi-agent Handoff** - Specialist agents with dynamic delegation and routing
- **State & Memory** - Session state management and cross-session memory with RAG
- **Streaming & Events** - Token streaming, tool events, and bidirectional communication
- **Observability** - OpenTelemetry traces, cost tracking, and latency monitoring
- **Evaluation** - Building test datasets, trajectory scoring, and regression tests
- **Deployment** - Production patterns for Vertex Agent Engine

See the **Learning Roadmap** table below for detailed feature tracking.

## Agent Configuration

The agent is configured with:
- **Name**: `hello_time_agent`
- **Model**: `gemini-2.5-flash`
- **Tool**: `get_current_time` - Returns current time for a specified city

## Example Interaction

```
[user]: hi
[agent]: Hello! I can tell you the current time in any city. Which city would you like to know about?

[user]: What time is it in Tokyo?
[agent]: The current time in Tokyo is 10:30 AM
```

## Learning Roadmap

Features and concepts to explore with Google ADK:

| Category | Feature | Description | Status |
|----------|---------|-------------|--------|
| **Agent Types** | LLM Agent | Core "thinking" agent - reasoning, tool selection, dynamic handoffs | ⬜ Todo |
| | Workflow Agents | Deterministic orchestrators (Sequential, Parallel, Loop) | ⬜ Todo |
| | Custom Agents | Build custom orchestration by subclassing `BaseAgent` | ⬜ Todo |
| **Orchestration** | Sequential Workflow | Chain agents in order, pass output to next | ⬜ Todo |
| | Parallel Workflow | Execute multiple agents concurrently | ⬜ Todo |
| | Loop Workflow | Repeat agent execution based on conditions | ⬜ Todo |
| | Agent Config (YAML) | Define agents/workflows in YAML (no-code) | ⬜ Todo |
| **Streaming** | Bidirectional Streaming | Real-time "live mode" for text/audio/video interactions | ⬜ Todo |
| | Streaming Tools | Tools that stream intermediate results continuously | ⬜ Todo |
| | Response Streaming | Stream agent responses as they're generated | ⬜ Todo |
| **Tools Integration** | Gemini Tools | Google Search, Code Execution, Computer Use | ⬜ Todo |
| | Google Cloud Tools | BigQuery, Vertex AI RAG, Vertex AI Search | ⬜ Todo |
| | Third-party Tools | GitHub, Notion, Linear, Atlassian, Qdrant | ⬜ Todo |
| | Custom Function Tools | Create custom tools with structured inputs/outputs | ✅ Done |
| | Parallel Tool Execution | ADK runs compatible tools in parallel for performance | ⬜ Todo |
| **Context Management** | Session Management | Single conversation thread with message/action history | ⬜ Todo |
| | State (Scratchpad) | Temporary per-session data storage | ⬜ Todo |
| | Memory Service | Cross-session searchable knowledge store | ⬜ Todo |
| | SessionService API | Lifecycle management (create/retrieve/update sessions) | ⬜ Todo |
| **Observability** | Logging | Python standard logging for diagnostics | ⬜ Todo |
| | Cloud Trace | OpenTelemetry-based distributed tracing | ⬜ Todo |
| | Event Monitoring | Track agent events, tool calls, and handoffs | ⬜ Todo |
| **Evaluation** | Trajectory Evaluation | Assess the steps/tools the agent used | ⬜ Todo |
| | Response Quality | Evaluate final output quality | ⬜ Todo |
| | Test Dataset Creation | Build evaluation datasets for agent testing | ⬜ Todo |
| **Advanced** | Multi-modal Inputs | Process text, audio, and video inputs | ⬜ Todo |
| | Multi-modal Outputs | Generate text and audio outputs | ⬜ Todo |
| | Dynamic Agent Handoff | LLM-driven delegation to specialized sub-agents | ⬜ Todo |
| | llms.txt Integration | Structured docs for AI tool navigation | ⬜ Todo |

**Legend:** ✅ Done | 🔄 In Progress | ⬜ Todo

## Documentation

- [Google ADK Documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/agent-development-kit)
- [Google AI Studio](https://ai.google.dev/)
