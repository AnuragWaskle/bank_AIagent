import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_create_ticket():
    response = client.post("/tickets", json={"customer_id": "123", "query": "Loan issue"})
    assert response.status_code == 200
    assert response.json()["query"] == "Loan issue"

def test_get_tickets():
    response = client.get("/tickets")
    assert response.status_code == 200
    assert isinstance(response.json(), list)