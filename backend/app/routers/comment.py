from fastapi import status, HTTPException, APIRouter
import models, schemas
from database import db_dependency

router = APIRouter(prefix="/comments", tags=["Comments"])


# @router.post("/", status_code=status.HTTP_201_CREATED)
# async def create_comment(comment: schemas.CommentBase, db: db_dependency):
#     db_comment = models.Comment(**comment.dict())
#     db.add(db_comment)
#     db.commit()


# @router.get("/{comment_id}", status_code=status.HTTP_200_OK)
# async def read_comment(comment_id: int, db: db_dependency):
#     comment = db.query(models.Comment).filter(models.Comment.id == comment_id).first()
#     if comment is None:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND, detail="Comment not found"
#         )
#     return comment


# @router.delete("/{comment_id}", status_code=status.HTTP_200_OK)
# async def delete_comment(comment_id: int, db: db_dependency):
#     db_comment = (
#         db.query(models.Comment).filter(models.Comment.id == comment_id).first()
#     )
#     if db_comment is None:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND, detail="Comment not found"
#         )
#     db.delete(db_comment)
#     db.commit()
