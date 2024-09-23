# MakeMyTrip Assignment

## Usage

### Run Backend

1. Install required packages: `pip install -r requirements.txt`
2. Check for model changes: `python manage.py makemigrations`
3. Initialize a database: `python manage.py migrate`
4. Create superuser to access admin panel: `python manage.py createsuperuser`
6. Run backend server: `python manage.py runserver`
7. Add some flights and busses data from the [admin panel](http://localhost:8000/admin/), use your superuser's username and email to open this page.

### Run Frontend

1. Install required packages: `npm i`
2. Run frontend server: `npm run dev`
