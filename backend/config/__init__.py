# Import BaseSettings from pydantic
from pydantic import BaseSettings


# Define the CommonSettings class (inherits from BaseSettings)
class CommonSettings(BaseSettings):
    APP_NAME: str
    DEBUG_MODE: bool

    ACCESS_TOKEN_EXPIRES_IN: int
    REFRESH_TOKEN_EXPIRES_IN: int


# Define the ServerSettings class (inherits from BaseSettings)
class ServerSettings(BaseSettings):
    HOST: str
    PORT: int
    CLIENT_ORIGIN: str

    JWT_ALGORITHM: str
    JWT_PRIVATE_KEY: str
    JWT_PUBLIC_KEY: str


# Define the DatabaseSettings class (inherits from BaseSettings)
class DatabaseSettings(BaseSettings):
    DATABASE_URL: str

    MONGO_DATABASE: str
    MONGO_ROOT_USERNAME: str
    MONGO_ROOT_PASSWORD: str


# Main Settings class that includes all the settings classes
class Settings(CommonSettings, ServerSettings, DatabaseSettings):
    class Config:
        env_file = "./.env"


# We create a settings variable that will be used in the other files
settings = Settings()
