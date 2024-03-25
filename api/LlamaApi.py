# LLama:
# 1. Create a replicate acount; https://replicate.com
# 2. Copy api tolken to clipboard; https://replicate.com/account/api-tokens
# 3. Set environemnt variable; export REPLICATE_API_TOKEN="..."
# 4. pip install replicate
# 5. Run

import replicate

output = replicate.run(
    "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
    input={
        "prompt": "Can you make up a silly fictional disease with 1 symptom, write a * symbol before writing the symptom?"
    }
)

# The meta/llama-2-70b-chat model can stream output as it's running.
# The predict method returns an iterator, and you can iterate over that output.
for item in output:
    # https://replicate.com/meta/llama-2-70b-chat/api#output-schema
    print(item, end="")