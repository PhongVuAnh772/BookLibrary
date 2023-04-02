import React from 'react'
import {NavLink,createBrowserRouter,createRoutesFromElements,RouterProvider,Outlet, Route} from 'react-router-dom'

import AllContent from './AllContent/AllContent'
import Children from './Children/Children'
import LongStory from './LongStory/LongStory'
import Manage from './Manage/Manage'
import Working from './Working/Working'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<AllContent/>}/>
            <Route path='' element={<Children/>}/>
            <Route path='' element={<LongStory/>}/>
            <Route path='' element={<Manage/>}/>
            <Route path='' element={<Working/>}/>
        </Route>
    )
)