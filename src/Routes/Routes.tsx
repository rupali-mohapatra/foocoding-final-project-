import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Product from '../components/QuickMenu/Products/Product/Product';
import QuickMenu from '../components/QuickMenu/QuickMenu';
import User from '../components/QuickMenu/Users/User';
import Home from '../pages/Home/Home';
import InnerContent from '../components/InnerContent/InnerContent';
import Login from '../pages/Login/Login';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import SingleUser from '../components/QuickMenu/Users/SingleUser';
import NewUser from '../components/QuickMenu/Users/NewUser';
import NewProduct from '../components/QuickMenu/Products/NewProduct/NewProduct';
import SingleProduct from '../components/QuickMenu/Products/SingleProduct/SingleProduct';
import Form from '../pages/Forms/Form';
import WorkList from '../components/Navbar/WorkList/WorkList';
import SortableTable from '../components/SortableTable/SortableTable';


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<InnerContent />}>
            <Route path="/worklist" element={<WorkList />} />
            <Route path="/" element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="/dashboard" element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
            </Route>
            <Route path="home" element={<Home />} />

            <Route path="quickmenu" element={<QuickMenu />}>
              <Route path="/quickmenu" element={<Navigate replace to="users" />} />
              <Route path="users" element={<User />} />
            </Route>
            <Route path="sortabletable" element={<SortableTable data={[]} />} />
            <Route path="users" element={<User />} />
            <Route path="users/:userId" element={<SingleUser />} />
            <Route path="users/new" element={<NewUser />} />
            <Route path="products" element={<Product />} />
            <Route path="products/:productId" element={<SingleProduct />} />
            <Route path="products/new" element={<NewProduct />} />
            
            <Route path="forms" element={<Form />} />
          </Route>
        </Route>

        <Route path="login" element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
