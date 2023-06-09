# Imports
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn


from config import settings

from api.routers import auth, user, common, conversation, message

from sockets import sio_app

# Create the FastAPP app
app = FastAPI(logging=True, debug=settings.DEBUG_MODE)
# Include our socket
app.mount("/ws", sio_app)

origins = [
    settings.CLIENT_ORIGIN,
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Startup Event
@app.on_event("startup")
async def startup_db_client():
    pass


# Shutdown Event
@app.on_event("shutdown")
async def shutdown_db_client():
    pass


# Include our API router
app.include_router(common.router, tags=["Common"], prefix="/api")
app.include_router(auth.router, tags=["Auth"], prefix="/api/auth")
app.include_router(user.router, tags=["Users"], prefix="/api/users")
app.include_router(
    conversation.router, tags=["Conversations"], prefix="/api/conversations"
)
app.include_router(message.router, tags=["Messages"], prefix="/api/messages")


# Define our main function, we can easily run the server
if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host=settings.HOST,
        reload=settings.DEBUG_MODE,
        port=settings.PORT,
    )
