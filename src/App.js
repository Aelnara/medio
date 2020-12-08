import React from 'react'
import Solution1 from './Solution1'
import Solution2 from './Solution2'
import Solution3 from './Solution3'
import './App.css'

export default function App() {
   return (
      <div className='root'>
         <div className='solutions'>
            <Solution1 />
            <div className='description'>
               <h3>Eredeti megoldás:</h3>
               <p>Minden pontosan a megadott instrukciók alapján készült, szimplán, egyszerűen, túlbonyolítás nélkül.</p>
               <p>Input mező mellett a gomb, kattintásra update. Kódban minden különszedve 4 különböző komponensre az instrukciók alapján.</p>
               <a href='/'>Kód</a>
            </div>
         </div>
         
         <div className='solutions'>
            <Solution2 />
            <div className='description'>
               <h3>Megoldás 2:</h3>
               <p>Eredeti példa átdolgozva a Material UI nevű könyvtárral.</p>
               <p>Szintén csak a gombra kattintás után történik az update.</p>
               <a href='/'>Kód</a>
            </div>
         </div>
         
         <div className='solutions'>
            <Solution3 />
            <div className='description'>
               <h3>Megoldás 3:</h3>
               <p>A Megoldás 2 továbbgondolása.</p>
               <p>Gomb nélküli megvalósítás, az update a szöveg írásával egyidőben történik.</p>
               <a href='/'>Kód</a>
            </div>
         </div>
      </div>
   )
}