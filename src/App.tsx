import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import NoPage from "./pages/noPage/NoPage";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import store from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  store.createStore();

  return (
    <Provider store={store.getStore()}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
