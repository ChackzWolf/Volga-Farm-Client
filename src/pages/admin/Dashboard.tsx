import React from 'react'; 
import {  Routes, Route } from 'react-router-dom';
import { SideNav } from '../../components/admin/layout/SideNav.tsx';
import PlantAddForm from './AddPlant.tsx';
import { AdminHeader } from '../../components/admin/layout/Header.tsx';

export const AdminDashboard: React.FC = () => {
    return (
        <div>
            <AdminHeader/>
             <div className='flex'>
                 <SideNav />
                 <div className='w-full my-5'>
                         <Routes>
                             <Route path = '/' element={<h1>Dashboard</h1>}/>
                             <Route path = '/add-plant' element={<PlantAddForm/>}/>
                         </Routes>
                 </div>
             </div>
        </div>

    );
};