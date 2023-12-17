import { Route, Routes } from "react-router-dom";
import LicensesView from "../views/licenses";
import UsersView from "../views/users";
import CompaniesView from "../views/companies";
import HomeView from "../views/homeView";
import NotFoundView from "../views/notFound";
import SingleCompanyView from "../views/singleCompany";

const RoutingConfig = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundView />} />
      <Route path="/" element={<HomeView />} />
      <Route path="/companies" element={<CompaniesView />} />
      <Route path="/company/:id" element={<SingleCompanyView />} />
      <Route path="/licenses" element={<LicensesView />} />
      <Route path="users" element={<UsersView />} />
    </Routes>
  );
};
export default RoutingConfig;
