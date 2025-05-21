import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_copywriting():
    response = client.post("/copywriting", json={"prompt": "Write a blog on loans", "content_type": "blog"})
    assert response.status_code == 200
    assert "content" in response.json()

def test_finance():
    response = client.post("/finance", json={"query": "Forecast revenue"})
    assert response.status_code == 200
    assert "analysis" in response.json()