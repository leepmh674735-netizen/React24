from fastapi import FastAPI

app = FastAPI()

@app.get("/api2/tips")
def m1():
    return "fastapi"