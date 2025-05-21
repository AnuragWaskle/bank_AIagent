from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from app.services.grok import get_grok_response  # Mock LangChain with Grok

async def run_langchain_workflow(prompt: str, task: str):
    template = PromptTemplate(
        input_variables=["task", "prompt"],
        template="Perform {task} for a bank: {prompt}"
    )
    formatted_prompt = template.format(task=task, prompt=prompt)
    response = await get_grok_response(formatted_prompt)
    return response