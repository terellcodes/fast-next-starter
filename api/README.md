# FastNext Starter API

A FastAPI backend for the Fast Next Starter project.

## Project Structure

```
api/
├── config/             # Configuration management
│   └── settings.py     # Application settings
├── models/             # Data models
│   ├── domain/         # Domain models
│   ├── schemas/        # Pydantic schemas
│   └── database/       # Database models
├── services/           # Business logic
├── utils/              # Utility functions
│   └── constants.py    # Application constants
├── core/              # Core functionality
├── tests/             # Test suite
│   ├── unit/
│   ├── integration/
│   └── fixtures/
├── main.py            # Application entry point
└── requirements.txt   # Project dependencies
```

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Copy `.env.example` to `.env` and update the values:
```bash
cp .env.example .env
```

4. Run the development server:
```bash
uvicorn main:app --reload
```

## Environment Variables

### Setting Environment Variables

1. Create a `.env` file in the `api` directory
2. Add your variables in KEY=VALUE format:
```env
APP_NAME="My API"
DEBUG=true
```

### Adding New Environment Variables

1. Add the variable to `config/settings.py`:
```python
class Settings(BaseSettings):
    MY_NEW_VARIABLE: str = "default value"
```

2. Add it to your `.env` file:
```env
MY_NEW_VARIABLE="my value"
```

3. Use it in your code:
```python
from config.settings import get_settings

settings = get_settings()
value = settings.MY_NEW_VARIABLE
```

## API Documentation

Once the server is running, you can access:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Development

- The API follows a modular structure with clear separation of concerns
- Uses Pydantic for data validation
- Implements CORS for frontend integration
- Includes a health check endpoint

## Testing

Run tests using pytest:
```bash
pytest
```
