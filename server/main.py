from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class LoggerRequest(BaseModel):
    example: str | int

app = FastAPI(openapi_prefix="/api")

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

router = APIRouter(
    prefix="",
    tags=[""],
)

@router.post("/logger", response_model=None)
async def loger(example: LoggerRequest) -> None:
    print(example.example)

@router.post("/init", response_model=None)
async def init_loger() -> None:
    print("Фронт уже запустился. Был первый рендер")

app.include_router(router)
