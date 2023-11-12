from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from google.cloud import bigquery

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/query")
def read_root():
    client = bigquery.Client()
    query = "SELECT * FROM `bigquery-public-data.world_bank_intl_education.country_summary` LIMIT 25"
    query_job = client.query(query)
    results = query_job.result()
    return {"results": [dict(row) for row in results]}


# export GOOGLE_APPLICATION_CREDENTIALS="/home/cfordev/cfordev/visual-query/velezreyes-404621-f88fdc513da0.json"
