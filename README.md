# 🌍 WorldWise

> **A travel tracking app with interactive maps to log your adventures around the world.**

A modern travel tracking application that helps you keep track of your adventures around the world. WorldWise provides an interactive world map where you can mark cities you've visited, add notes about your experiences, and visualize your travel history.

## ✨ Features

- **Interactive World Map**: Click anywhere on the map to add a new city to your travel log
- **Travel Log Management**: Add, view, and delete cities from your travel history
- **City Details**: Store city names, countries, visit dates, and personal notes
- **Geolocation Support**: Use your current location to quickly navigate the map
- **Country View**: Browse your visited cities organized by country
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Authentication**: Simple login system for user management

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Maps**: Leaflet with React-Leaflet
- **Styling**: CSS Modules
- **State Management**: React Context API with useReducer
- **Backend**: JSON Server (for development)
- **Date Handling**: React DatePicker

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd worldwise
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Start the JSON server** (in a separate terminal)

   ```bash
   npm run server
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build
- `npm run server` - Start the JSON server for the backend API
- `npm run lint` - Run ESLint to check for code issues

## 🗂️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── City.jsx        # Individual city display
│   ├── CityList.jsx    # List of all cities
│   ├── CountryList.jsx # Cities grouped by country
│   ├── Form.jsx        # Add new city form
│   ├── Map.jsx         # Interactive world map
│   └── ...
├── contexts/           # React Context providers
│   ├── CitiesContext.jsx    # City data management
│   └── FakeAuthContext.tsx  # Authentication state
├── hooks/              # Custom React hooks
│   ├── useGeolocation.js   # Browser geolocation
│   └── useUrlPosition.js   # URL position parsing
├── pages/              # Page components
│   ├── Homepage.jsx    # Landing page
│   ├── AppLayout.jsx   # Main app layout
│   ├── Login.jsx       # Login page
│   └── ...
└── data/               # Static data
    └── cities.json     # Sample city data
```

## 🗺️ How to Use

1. **Getting Started**: Visit the homepage and click "Start tracking now"
2. **Login**: Use the login page to access the main application
3. **Adding Cities**:
   - Click anywhere on the world map
   - Fill in the city details (name, date, notes)
   - Click "Add" to save your visit
4. **Viewing Cities**: Browse your visited cities in the Cities tab
5. **Country View**: See your cities organized by country
6. **Managing Data**: Edit or delete cities from your travel log

## 🌐 API Integration

The application uses:

- **Reverse Geocoding API**: Automatically detects city and country names from coordinates
- **JSON Server**: Local REST API for city data management
- **OpenStreetMap**: For the interactive map tiles

## 🎨 Customization

- Modify `src/App.css` for global styles
- Update component-specific styles in `*.module.css` files
- Add new cities to `data/cities.json` for sample data
- Customize the map appearance in `Map.jsx`

## 🚀 Deployment

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service (Vercel, Netlify, etc.)

3. **Set up a production backend** to replace JSON Server

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the amazing frontend framework
- [Leaflet](https://leafletjs.com/) for the interactive maps
- [Vite](https://vitejs.dev/) for the fast build tool
- [OpenStreetMap](https://www.openstreetmap.org/) for the map tiles
