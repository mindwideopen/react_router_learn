import {Route, Routes, Navigate, NavLink} from 'react-router-dom'
import styles from "./components/Site.module.css";
import {PageOne} from './components/pages/PageOne'
import {PageTwo} from './components/pages/PageTwo'
import {PageThree} from './components/pages/PageThree'
import {Error404} from './components/pages/Error404'
import React from "react";



function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                   <NavLink to={'/adidas'}>Adidas</NavLink>
                   <NavLink to={'/puma'}>Puma</NavLink>
                   <NavLink to={'/nike'}>Nike</NavLink>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to = '/adidas'/>}/>
                        <Route path='/adidas' element={<PageOne/>}/>
                        <Route path='/puma' element={<PageTwo/>}/>
                        <Route path='/nike' element={<PageThree/>}/>
                        <Route path='/error404' element={<Error404/>}/>
                        <Route path='/*' element={<Navigate to = {'/error404'}/>}/>
                        </Routes>
                    </div>
                            </div>
                            <div className={styles.footer}>nike 2023</div>
            </div>
            );
            }


            export default App;
