from pymongo import mongo_client
import pymongo
from config import settings

client = mongo_client.MongoClient(settings.DATABASE_URL)

try:
    conn = client.server_info()
    print(f'Connected to MongoDB {conn.get("version")}')
except Exception as e:
    print(settings.DATABASE_URL)
    print(e)
    print("Unable to connect to the MongoDB server.")

db = client[settings.MONGO_DATABASE]

# Define User tables
User = db.users
User.create_index([("email", pymongo.ASCENDING)], unique=True)


