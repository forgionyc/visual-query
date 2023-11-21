from typing import List
from fastapi import status, HTTPException, APIRouter
from google.cloud import bigquery
from pydantic import BaseModel

router = APIRouter(
    prefix="/world-bank/intl-edu", tags=["World Bank International Education Data"]
)


class Data(BaseModel):
    indicators: List[str]
    years: List[int]
    countries: List[str]


def sanitize_input(input: List[str]) -> List[str]:
    # Check if input is a list
    if not isinstance(input, list):
        raise ValueError("Input must be a list")

    # Check if all elements in the input are strings
    for i in input:
        if not isinstance(i, str):
            raise ValueError("All elements in the input must be strings")
    return input


def sanitize_years(input: List[int]) -> List[int]:
    # Check if input is a list
    if not isinstance(input, list):
        raise ValueError("Input must be a list")

    # Check if all elements in the input are integers
    for i in input:
        if not isinstance(i, int):
            raise ValueError("All elements in the input must be integers")
    return input


@router.post("/charts-data")
def handle_data(data: Data):
    print(data)
    client = bigquery.Client()

    # Sanitize the input
    indicators = sanitize_input(data.indicators)
    years = sanitize_years(data.years)
    countries = sanitize_input(data.countries)

    indicators = ", ".join([f'"{i}"' for i in data.indicators])
    years = ", ".join([str(y) for y in data.years])
    countries = ", ".join([f'"{c}"' for c in data.countries])
    query = f"""
    SELECT country_name, year, value
    FROM `bigquery-public-data.world_bank_intl_education.international_education` 
    WHERE indicator_name IN ({indicators}) 
    AND year IN ({years}) 
    AND country_name IN ({countries})
    LIMIT 25
    """
    query_job = client.query(query)  # Make an API request.
    results = query_job.result()  # Waits for the query to finish
    return [dict(row) for row in results]


@router.get("/country-series-definitions")
def read_country_series_definitions():
    client = bigquery.Client()
    query = "SELECT * FROM `bigquery-public-data.world_bank_intl_education.country_series_definitions` LIMIT 25"
    query_job = client.query(query)
    results = query_job.result()
    return {"results": [dict(row) for row in results]}


@router.get("/country-summary")
def read_country_summary():
    client = bigquery.Client()
    query = "SELECT * FROM `bigquery-public-data.world_bank_intl_education.country_summary` LIMIT 25"
    query_job = client.query(query)
    results = query_job.result()
    return {"results": [dict(row) for row in results]}


@router.get("/series-definitions/{page}")
async def read_international_education(page: int):
    client = bigquery.Client()
    results = []
    limit = 100
    offset = (page - 1) * limit

    query = f"SELECT * FROM `bigquery-public-data.world_bank_intl_education.country_series_definitions` ORDER BY country_code LIMIT {limit} OFFSET {offset}"
    query_job = client.query(query)
    batch = query_job.result()
    batch = [dict(row) for row in batch]

    results.extend(batch)

    return {"results": results}


@router.get("/series-summary")
def read_series_summary():
    client = bigquery.Client()
    query = "SELECT * FROM `bigquery-public-data.world_bank_intl_education.series_summary` LIMIT 25"
    query_job = client.query(query)
    results = query_job.result()
    return {"results": [dict(row) for row in results]}


@router.get("/test-col-usa")
def read_series_summary():
    client = bigquery.Client()
    query = """
    SELECT country_name, year, value
    FROM `bigquery-public-data.world_bank_intl_education.international_education` 
    WHERE indicator_name = 'Teachers in lower secondary education, both sexes (number)' 
    AND country_code IN ('COL', 'USA') 
    AND year IN (2009,2010)
    LIMIT 25
    """
    query_job = client.query(query)
    results = query_job.result()
    return {"results": [dict(row) for row in results]}
