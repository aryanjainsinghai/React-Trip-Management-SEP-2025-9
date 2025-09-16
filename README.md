# React Trips Manager SPA

A React.js Single Page Application (SPA) to manage trips with CRUD functionality, search, filtering, pagination, and responsive UI using dummy JSON data (no backend required).

---

## How to Run the Project

1. Clone this repository or extract the zip file.
   ```bash
   git clone https://github.com/aryanjainsinghai/React-Trip-Management-SEP-2025-9.git
   cd react-trips-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

---

## Features Implemented

✔ Display Trip List in a table layout  
✔ Add New Trip using a form (with validation)  
✔ Edit Trip details  
✔ Delete Trip  
✔ Search Trips by destination  
✔ Filter Trips by status (PLANNED, ONGOING, COMPLETED)  
✔ Sort by Price / Start Date  
✔ Pagination (client-side)  
✔ Form Validation (using React Hook Form)  
✔ Responsive UI 
✔ Routing with React Router v6  
✔ Dummy data stored in-memory (`src/data/trips.js`)  

---

## Project Structure

```
/src 
    /components 
        Navbar.jsx 
        Pagination.jsx
        SearchFilter.jsx 
        TripForm.jsx 
        TripList.jsx 
    /data 
        trips.js
    /pages 
        AddTrip.jsx
        Dashboard.jsx  
        EditTrip.jsx 
    App.jsx 
    main.jsx 
package.json 
README.md
```

---

## Screenshots of UI

### Dashboard Page
![Dashboard Screenshot](/TripPlanner/screenshots/dashboard.png)

### Add Trip Form
![Add Trip Screenshot](/TripPlanner/screenshots/addTrip.png)

---

## Tech Stack

- **React 18+**
- **React Router v6**
- **React Hook Form** (form validation)
- **Material UI**
- **Vite** (build tool)

---

## Notes

- This project uses **dummy JSON data** (`trips.js`) instead of a backend.
- Data is not persisted permanently; it resets on refresh (can be extended with LocalStorage).

---

## Author

Built by Aryan Jain 
