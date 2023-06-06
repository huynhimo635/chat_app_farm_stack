# Import BaseSettings from pydantic
from pydantic import BaseSettings


# Define the CommonSettings class (inherits from BaseSettings)
class CommonSettings(BaseSettings):
    APP_NAME: str = "API"
    DEBUG_MODE: bool = True


# Define the ServerSettings class (inherits from BaseSettings)
class ServerSettings(BaseSettings):
    HOST: str = "localhost"
    PORT: int = 8000


# Define the DatabaseSettings class (inherits from BaseSettings)
class DatabaseSettings(BaseSettings):
    DB_URL: str = (
        "mongodb+srv://huynhimo:Ild8oSPd32WmG9FU@cluster0.mibs54p.mongodb.net/"
    )
    DB_NAME: str = "tasksDatabase"


# Main Settings class that includes all the settings classes
class Settings(CommonSettings, ServerSettings, DatabaseSettings):
    pass


# We create a settings variable that will be used in the other files
settings = Settings()