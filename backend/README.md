# Portfolio Backend API

FastAPI backend for Muhammad Uzair's portfolio website with contact form and AI chatbot features.

## Features

- 📧 Contact form with email sending
- 🤖 AI Chatbot powered by Google Gemini
- 💾 PostgreSQL database (NeonDB)
- 🔒 CORS protection
- ⏱️ Rate limiting (20 messages/session/hour)

## Prerequisites

- Python 3.9+
- NeonDB account (free tier available)
- Google Gemini API key (free)

## Setup Instructions

### 1. Get NeonDB Connection String

1. Go to [https://neon.tech](https://neon.tech) and sign up for a free account
2. Create a new project
3. Copy the connection string from the dashboard
4. It should look like: `postgresql://username:password@ep-xxx.neon.tech/database?sslmode=require`

### 2. Get Gemini API Key

1. Go to [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the API key (it's free for reasonable usage)

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables

```bash
# Copy the example env file
cp .env.example .env

# Edit .env with your credentials
```

Update these values in `.env`:

```env
DATABASE_URL=postgresql+asyncpg://username:password@ep-xxx.neon.tech/neondb?sslmode=require
GEMINI_API_KEY=your_actual_api_key_here
FRONTEND_URL=http://localhost:3000
```

### 5. Create Database Tables

Run the setup script to create the required tables:

```bash
python setup_db.py
```

You should see:
```
✓ Tables created successfully!
✓ All tables verified:
  - sessions
  - messages
🎉 Database setup complete!
```

### 6. Start the Server

```bash
python main.py
```

The API will be available at `http://localhost:8000`

## API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form

### AI Chatbot
- `POST /api/chat` - Send a message and get AI response
- `GET /api/chat/history/{session_id}` - Get chat history
- `DELETE /api/chat/session/{session_id}` - Delete a chat session

### Utility
- `GET /` - API info
- `GET /health` - Health check
- `GET /docs` - Swagger documentation

## Database Schema

### sessions
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| visitor_id | VARCHAR(255) | Visitor identifier |
| created_at | TIMESTAMP | Session creation time |

### messages
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| session_id | UUID | Foreign key to sessions |
| role | VARCHAR(50) | 'user' or 'assistant' |
| content | TEXT | Message content |
| created_at | TIMESTAMP | Message creation time |

## Rate Limiting

The chatbot has a rate limit of 20 messages per session per hour. When exceeded, the API returns a 429 status code.

## Troubleshooting

### Database Connection Error
- Verify your DATABASE_URL is correct
- Ensure SSL mode is set to `require`
- Check your NeonDB project is active

### Gemini API Error
- Verify your GEMINI_API_KEY is valid
- Check your API quota at aistudio.google.com

### CORS Error
- Update FRONTEND_URL to match your frontend's URL
- For local development, use `http://localhost:3000`

## Development

### Run with auto-reload

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### View API Documentation

Open `http://localhost:8000/docs` in your browser.

## License

MIT
