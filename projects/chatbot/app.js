(() => {
  const messageList = [
    {
      role: "ai_assistant",
      message:
        "Hi there. I can help with pricing, product questions, or booking a demo",
    },
    {
      role: "user",
      message: "I want to learn how this product fits my team..",
    },
    {
      role: "ai_assistant",
      message:
        "Great. Tell me your team size and workflow, and I'll point you to the best plan.",
    },
  ]},

  function renderMessages(messages) {
    const messageListElement = messages.map((message) => {
      if (message.role === "ai_assistant") {
        return `
                 <div class="flex items-start gap-3">
            <div class="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white">
              AI
            </div>
            <div class="max-w-[80%] rounded-2xl rounded-tl-md bg-zinc-100 px-4 py-3 text-sm leading-6 text-zinc-700">
              ${message.message}
            </div>
          </div>`;
      } else if (message.role === "user") {
        return ` 
          <div class="flex justify-end">
            <div class="max-w-[80%] rounded-2xl rounded-br-md bg-zinc-900 px-4 py-3 text-sm leading-6 text-white">
              ${message.message}
            </div>
          </div>
        `;
      }
    });

    document.querySelector("#chat-messages").innerHTML = messageListElement.join("");
  }

  renderMessages(messageList);

  document
    .querySelector("button[type='button']")
    .addEventListener("click", (event) => {
      event.preventDefault();

      const message = document.querySelector("input[type='text']").value;
        messageList.push({
            role: "user",
            message: message
        });

        renderMessages(messageList);
        document.querySelector("input[type='text']").value = "";

        askAI(message)
    });

    function askAI(message) {
      await fetch ("curl https://api.openai.com/v1/responses"), {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Authorization": "Bearer" + "Response",
        }
    }
})();
