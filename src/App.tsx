import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/home";

const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const UsersPage = lazy(() => import("./components/users/UsersPage"));
const CitiesPage = lazy(() => import("./components/cities/CitiesPage"));
const ChatPage = lazy(() => import("./components/chat/ChatPage"));
const ReviewsPage = lazy(() => import("./components/reviews/ReviewsPage"));
const ListingsPage = lazy(() => import("./components/listings/ListingsPage"));
const RequestsPage = lazy(() => import("./components/requests/RequestsPage"));
const FiltersPage = lazy(() => import("./components/filters/FiltersPage"));
const SettingsPage = lazy(() => import("./components/settings/SettingsPage"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="cities" element={<CitiesPage />} />
            <Route path="chat" element={<ChatPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="listings" element={<ListingsPage />} />
            <Route path="requests" element={<RequestsPage />} />
            <Route path="filters" element={<FiltersPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="dashboard" />} />
          </Route>
        </Routes>
      {/* </Router> */}
    </Suspense>
  );
}

export default App;
