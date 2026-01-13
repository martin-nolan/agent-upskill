import os
import sys

from agent_framework import AzureOpenAIChatClient
from dotenv import load_dotenv

load_dotenv()


def get_current_time(city: str) -> dict:
    return {"status": "success", "report": f"The current time in {city} is 10:30 AM"}


tools = [
    {
        "type": "function",
        "function": {
            "name": "get_current_time",
            "description": "Returns the current time in a specified city.",
            "parameters": {
                "type": "object",
                "properties": {"city": {"type": "string", "description": "The name of the city."}},
                "required": ["city"],
            },
        },
    }
]

tool_handlers = {"get_current_time": lambda args: get_current_time(args.get("city", ""))}


def run():
    client = AzureOpenAIChatClient(
        endpoint=os.getenv("AZURE_OPENAI_ENDPOINT"),
        api_key=os.getenv("AZURE_OPENAI_API_KEY"),
        deployment=os.getenv("AZURE_OPENAI_DEPLOYMENT"),
        api_version=os.getenv("AZURE_OPENAI_API_VERSION", "2024-05-01-preview"),
    )

    agent = client.create_agent(
        name="hello_time_agent",
        model=os.getenv("AZURE_OPENAI_MODEL", "gpt-4o-mini"),
        instructions="You are a helpful assistant that tells the current time in a city. Use the 'get_current_time' tool.",
        tools=tools,
        tool_handlers=tool_handlers,
    )

    user_prompt = " ".join(sys.argv[1:]) or "What time is it in Seattle?"
    result = agent.run(user_prompt)

    print(getattr(result, "output_text", None) or getattr(result, "content", None) or result)


if __name__ == "__main__":
    run()
