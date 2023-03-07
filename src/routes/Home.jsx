import React from "react"

import "./Home.css"
const Home = () => {
  return (

    <main className="main">
      <div className="box ">
        <div className="top">Status</div>
        <div className="middle">
          <img src="./assets/carinha.svg" alt="bolinha verde sorrindo" />
          <span>Score:75%</span> <br />
        </div>
        <div className="bottom">
          <span>Cursos:85 </span>
          <span>Alunos:121</span>
        </div>

      </div>
      <div className="box sell grid">
        <div className="top">Cursos</div>
        <div className="middle">
          <svg viewBox="0 0 142 142" >
            <circle
              cx="50%"
              cy="50%"
              r="60"
              opacity="0.1"
              stroke="#040419"
            />
            <circle
              cx="50%"
              cy="50%"
              r="60"
              stroke="url(#paint0_linear_201_104)"
            />
            <defs>
              <linearGradient id="paint0_linear_201_104" x1="1.97421e-07" y1="82" x2="154" y2="178" gradientUnits="userSpaceOnUse">
                <stop stop-color="#DF9780" />
                <stop offset="1" stop-color="#A66DE9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="bottom">
          <div className="item">
            <span>Alcançado</span>
          </div>
        </div>
      </div>
      <div className="box target grid">
        <div className="top">Alunos</div>
        <div className="middle">

        </div>
        <div className="bottom">
          <div className="item">
            <span>Alcançado</span>
          </div>
        </div>
      </div>
      <div className="box">test</div>
    </main>

  )
}
export default Home