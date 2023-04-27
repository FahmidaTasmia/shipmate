import Booking from "../components/Booking/Booking";
import Checkout from "../components/Checkout/Checkout";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../components/Home/Home");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/booking',
                element:<Booking></Booking>
            },
            {
                path:'/checkout',
                element:<Checkout></Checkout>
            },
        ]
    }
]);

export default router ;