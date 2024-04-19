import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { About, Guide, Home, Product, Shop } from "./pages";
import Layout from "./layouts";
import "./bootstrap-clone.css";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ index: true, element: <Home /> },
				{ path: "shop", element: <Shop /> },
				{ path: "shop/:productId", element: <Product /> },
				{ path: "about", element: <About /> },
				{ path: "guide", element: <Guide /> },
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
