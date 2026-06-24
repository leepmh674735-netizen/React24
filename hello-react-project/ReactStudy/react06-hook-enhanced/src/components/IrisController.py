from fastapi import FastAPI, APIRouter
import IrisService as ipaddress

app = FastAPI()

router = APIRouter(
    tags=["Iris model"]
)

@router.post("/api2/iris")
def get_iris():
    print("python api2")
    return "python api2"

app.include_router(router)