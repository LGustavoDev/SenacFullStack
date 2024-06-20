import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let num1: number = 10
    let num2: number = 15
    function somar(n1:number, n2:number): number {
        return n1 + n2

    }
    return (
        <div>
            {somar(num1, num2)}



            
        </div>

    );
}

export default App;
