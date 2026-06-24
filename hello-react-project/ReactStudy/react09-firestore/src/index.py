from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from IrisController import router as iris_router
from ModelController import router as model_router

app = FastAPI()

origins = [
    "http://localhost:8080"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Register routers
app.include_router(iris_router)
app.include_router(model_router)