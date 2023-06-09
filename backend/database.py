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

# Define Conversation tables
Conversation = db.conversations
Conversation.create_index([("is_group_room", pymongo.ASCENDING)])


# Define Message tables
Message = db.messages
Message.create_index([("conversation_id", pymongo.ASCENDING)])
