from pydantic import BaseModel
from database import engine
import models
from typing import List

models.Base.metadata.create_all(bind=engine)


class UserBase(BaseModel):
    username: str


class QueryJSONBase(BaseModel):
    query_json: dict


class SavedQueryBase(BaseModel):
    name: str
    comment: str
    username: str
    query_json_id: int


class QueryData(BaseModel):
    indicators: List[str]
    years: List[int]
    countries: List[str]


class QuerySaveData(BaseModel):
    username: str
    name: str
    comment: str
    data: QueryData
