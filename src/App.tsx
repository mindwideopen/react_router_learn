import { Route, Routes, Navigate} from 'react-router-dom'
import styles from "./components/Site.module.css";
import {PageOne} from '../src/components/pages/PageOne'
import {PageTwo} from '../src/components/pages/PageTwo'
import {PageThree} from '../src/components/pages/PageThree'
import {Error404} from '../src/components/pages/Error404'
import React from "react";



function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <a href="/adidas">adidas</a>
                    <a href="/puma">puma</a>
                    <a href="/abibas">abibas</a>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to = '/adidas'/>}/>
                        <Route path='/adidas' element={<PageOne/>}/>
                        <Route path='/puma' element={<PageTwo/>}/>
                        <Route path='/abibas' element={<PageThree/>}/>
                        <Route path='/error404' element={<Error404/>}/>
                        <Route path='/*' element={<Navigate to = {'/error404'}/>}/>
                        </Routes>
                    </div>
                            </div>
                            <div className={styles.footer}>abibas 2023</div>
            </div>
            );
            }


            export default App;
