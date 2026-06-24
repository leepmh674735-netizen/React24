from fastapi import FastAPI, APIRouter

app = FastAPI()

router = APIRouter(
    tags=["Model"]
)

@router.get("/api2/tips")
def m1():
    return "fastapi"

app.include_router(router)
