import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { About, Home, Product, Shop } from "./pages";
import Layout from "./layouts";

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
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
