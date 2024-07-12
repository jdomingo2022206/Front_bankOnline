import authRoutes from "./auth.routes";
import mainRoutes from "./main.routes";


const routes = [
    ...mainRoutes,
    ...authRoutes,
];

export default routes; 