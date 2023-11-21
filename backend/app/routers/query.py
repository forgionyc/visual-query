from fastapi import status, HTTPException, APIRouter, FastAPI, Depends
import models, schemas
from database import db_dependency
import json


router = APIRouter(prefix="/queries", tags=["Queries"])


@router.post("/save_query/")
def save_query(query_data: schemas.QuerySaveData, db: db_dependency):
    # Step 1: Save the JSON data
    json_query = models.QueryJSON(query_json=query_data.data.dict())
    db.add(json_query)
    db.commit()
    db.refresh(json_query)

    # Step 2: Save the query details with a reference to the JSON data
    saved_query = models.SavedQuery(
        name=query_data.name,
        comment=query_data.comment,
        username=query_data.username,
        query_json_id=json_query.id,
    )
    db.add(saved_query)
    db.commit()
    db.refresh(saved_query)

    return {"status": "Query saved successfully"}


@router.get("/saved-queries/{username}")
def get_saved_queries_by_username(username: str, db: db_dependency):
    saved_queries = (
        db.query(models.SavedQuery).filter(models.SavedQuery.username == username).all()
    )
    if not saved_queries:
        raise HTTPException(
            status_code=404, detail=f"No saved queries found for username {username}"
        )
    return saved_queries


@router.get("/all-saved-queries")
def get_all_saved_queries(db: db_dependency):
    saved_queries = db.query(models.SavedQuery).all()
    if not saved_queries:
        raise HTTPException(status_code=404, detail="No saved queries found")
    return saved_queries


@router.get("/get_queryjson_data/{query_id}")
def get_queryjson_data(query_id: int, db: db_dependency):
    # Assuming QueryJSON is your model for storing query data
    query_data = (
        db.query(models.QueryJSON).filter(models.QueryJSON.id == query_id).first()
    )

    if not query_data:
        raise HTTPException(status_code=404, detail="QueryJSON not found")

    return query_data.query_json


# @router.post("/", status_code=status.HTTP_201_CREATED)
# async def create_query(query: schemas.QueryBase, db: db_dependency):
#     db_query = models.Query(**query.dict())
#     db.add(db_query)
#     db.commit()


# @router.get("/{query_id}", status_code=status.HTTP_200_OK)
# async def read_query(query_id: int, db: db_dependency):
#     query = db.query(models.Query).filter(models.Query.id == query_id).first()
#     if query is None:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND, detail="Query not found"
#         )
#     return query


# @router.get("/", status_code=status.HTTP_200_OK)
# async def read_all_queries(db: db_dependency):
#     queries = db.query(models.Query).all()
#     if not queries:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND,
#             detail="No queries found in the database",
#         )
#     return queries


# @router.delete("/{query_id}", status_code=status.HTTP_200_OK)
# async def delete_query(query_id: int, db: db_dependency):
#     db_query = db.query(models.Query).filter(models.Query.id == query_id).first()
#     if db_query is None:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND, detail="Query not found"
#         )
#     db.delete(db_query)
#     db.commit()
