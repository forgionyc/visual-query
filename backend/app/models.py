from sqlalchemy import Boolean, Column, Integer, String, ForeignKey, JSON, Text
from sqlalchemy.orm import relationship
from database import Base
from pydantic import BaseModel
from typing import List


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True)

    # Define the one-to-many relationship
    saved_queries = relationship("SavedQuery", back_populates="user")


class QueryJSON(Base):
    __tablename__ = "query_json"
    id = Column(Integer, primary_key=True, index=True)
    query_json = Column(JSON)

    # Define the one-to-many relationship
    saved_queries = relationship("SavedQuery", back_populates="query_json")


class SavedQuery(Base):
    __tablename__ = "saved_queries"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), index=True)
    comment = Column(Text)
    username = Column(String(50), index=True)
    query_json_id = Column(Integer, ForeignKey("query_json.id"))
    query_json = relationship("QueryJSON", back_populates="saved_queries")

    # Define the many-to-one relationship
    user_id = Column(Integer, ForeignKey("users.id"))
    user = relationship("User", back_populates="saved_queries")
