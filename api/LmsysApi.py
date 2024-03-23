# Lmsys: (GPU IS NEEDED TO RUN)
# 1. Create a hugging face key
# 2. Set environemnt variable; export HUGGING_FACE_API_KEY="..."
# 3. pip install huggingface_hub 
# 4. pip install sentencepiece
# 5. pip install protobuf
# 6. pip install torch
# 7. Run

import os

from huggingface_hub import hf_hub_download
from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline, AutoModelForSeq2SeqLM


HUGGING_FACE_API_KEY = os.environ.get("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") #could be hardcoded

model_id = "lmsys/fastchat-t5-3b-v1.0"
filenames = [
        "pytorch_model.bin", "added_tokens.json", "config.json", "generation_config.json", 
        "special_tokens_map.json", "spiece.model", "tokenizer_config.json"
]

for filename in filenames:
        downloaded_model_path = hf_hub_download(
                    repo_id=model_id,
                    filename=filename,
                    token=HUGGING_FACE_API_KEY
        )
        print(downloaded_model_path)

tokenizer = AutoTokenizer.from_pretrained(model_id, legacy=False)
model = AutoModelForSeq2SeqLM.from_pretrained(model_id)

pipeline = pipeline("text2text-generation", model=model, device=-1, tokenizer=tokenizer, max_length=1000)

pipeline("Can you make up a fictional rare disease with made up symptoms")
        