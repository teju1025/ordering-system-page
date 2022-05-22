import './App.css';
import React, {useState, useEffect} from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import FoodOrderPage from './pages/FoodOrderPage'
import Home from './pages/Home'
import MenuAddPage from './pages/MenuAddPage'
import MenuDeletePage from './pages/MenuDeletePage'
import IngredientManagementPage from './pages/IngredientManagementPage';
import HistoryPage from './pages/HistoryPage';
import StatisticPage from './pages/StatisticPage';

function App() {

  return(
    <div>
      <BrowserRouter>
        <nav>
          <h1>點餐系統</h1>
          <Link to="/ordering-system-page">主頁面</Link>
          <Link to="/ordering-system-page/order">點餐</Link>
          <Link to="/ordering-system-page/add-menu">新增餐點</Link>
          <Link to="/ordering-system-page/delete-menu">移除餐點</Link>
          <Link to="/ordering-system-page/ingredient-management">食材管理</Link>
          <Link to="/ordering-system-page/history">歷史訂單紀錄</Link>
          <Link to="/ordering-system-page/statistic">銷貨統計</Link>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/ordering-system-page" element={<Home/>}/>
            <Route path="/ordering-system-page/order" element={<FoodOrderPage/>}/>
            <Route path="/ordering-system-page/add-menu" element={<MenuAddPage/>}/>
            <Route path="/ordering-system-page/delete-menu" element={<MenuDeletePage/>}/>
            <Route path="/ordering-system-page/ingredient-management" element={<IngredientManagementPage/>}/>
            <Route path="/ordering-system-page/history" element={<HistoryPage/>}/>
            <Route path="/ordering-system-page/statistic" element={<StatisticPage/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App;
