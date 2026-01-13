# Microsoft Azure SDK Agent

Azure Agent Framework example in Python.

## Overview

This project demonstrates how to build agents using Microsoft's Azure Agent Framework with Python, showcasing function calling capabilities with Azure OpenAI.

## Tech Stack

- **Python** - Implementation language
- **Azure Agent Framework** - Microsoft's agent SDK
- **Azure OpenAI** - LLM backend
- **uv** - Fast Python package manager

## Project Structure

```
microsoft-azure-sdk-agent/
├── agent.py        # Python implementation
└── .env            # Azure configuration (not in git)
```

## Prerequisites

- Python 3.8 or later
- uv (fast Python package installer)
- Azure OpenAI resource
- Deployed model (e.g., GPT-4o-mini)

## Setup

### 1. Install Dependencies

```bash
uv pip install agent-framework --pre python-dotenv
# Or using make:
make install
```

### 2. Configure Azure OpenAI

Create or update `.env` file:

```bash
# Azure OpenAI configuration
AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com
AZURE_OPENAI_API_KEY=your_api_key
AZURE_OPENAI_DEPLOYMENT=your_deployment_name
AZURE_OPENAI_API_VERSION=2024-05-01-preview
AZURE_OPENAI_MODEL=gpt-4o-mini
```

**Getting Azure Credentials:**
1. Create an Azure OpenAI resource in [Azure Portal](https://portal.azure.com)
2. Deploy a model (e.g., gpt-4o-mini)
3. Copy the endpoint and API key from "Keys and Endpoint"

## Usage

### Using Make (Recommended)

```bash
make run                                    # Run with default query
make run QUERY="What time is it in Tokyo?" # Run with custom query
make install                                # Install dependencies
make clean                                  # Remove cache files
make help                                   # Show all commands
```

### Using uv directly

Run with a query:
make install                                # Install dependencies
make clean                                  # Remove cache files
make help                                   # Show all commands
```

### Using uv directly

Run with a query:
```bash
uv run agent.py "What time is it in Tokyo?"
```

Or with default query:
```bash
uv run agent.py
```

## Current Features

### Function Calling
The implementation includes a `get_current_time` tool that:
- Takes a city name as parameter
- Returns the current time in that city
- Demonstrates Azure OpenAI function calling

### Minimal Design
- Direct import from `agent_framework`
- No unnecessary abstraction layers
- Clean, readable code
- Simple error handling

## Learning Goals

This project provides a foundation for exploring Azure Agent Framework concepts:

- **Multi-agent Orchestration** - Composing multiple specialized agents
- **State Management** - Session state and persistent memory patterns
- **Streaming Responses** - Real-time token streaming and progressive updates
- **Tool Integration** - Azure services (Cosmos DB, Search, Functions) as tools
- **Observability** - Application Insights tracing and monitoring
- **Evaluation** - Testing agent behavior and response quality
- **Azure Deployment** - Hosting patterns for production workloads

## Example Output

```bash
$ uv run agent.py "What time is it in Tokyo?"
The current time in Tokyo is 10:30 AM
```

## Troubleshooting

### Missing Module Error
```
Failed to load agent_framework
```
**Solution:** Install with `uv pip install agent-framework --pre python-dotenv`

### Authentication Error
```
Missing AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY, or AZURE_OPENAI_DEPLOYMENT
```
**Solution:** Ensure all Azure credentials are set in `.env` file.

### Model Not Found
```
The API deployment for this resource does not exist
```
**Solution:** Verify your deployment name matches the model you deployed in Azure Portal.

## Documentation

- [Azure OpenAI Documentation](https://learn.microsoft.com/azure/ai-services/openai/)
- [Azure Agent Framework Guide](https://learn.microsoft.com/azure/ai-services/agents/)