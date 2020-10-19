import React, { useState } from 'react';
import './App.css';
import { calculateSalaryFrom } from './helpers/salary';

function App() {
  const [fullSalary, setFullSalary] = useState('');
  const {
    baseINSS,
    baseIRPF,
    discountINSS,
    discountIRPF,
    netSalary,
  } = calculateSalaryFrom(fullSalary);

  let percentualINSS = (discountINSS / fullSalary) * 100;
  let percentualIRPF = (discountIRPF / fullSalary) * 100;
  let percentualSalarioLiquido = (netSalary / fullSalary) * 100;

  return (
    <div className="App">
      <main>
        <h1>Calcular Salário Líquido</h1>
        <div className="full-salary">
          <label htmlFor="salary">Salário Bruto</label>
          <input
            type="number"
            name="salary"
            id="salary"
            placeholder="0"
            value={fullSalary}
            onChange={(event) => setFullSalary(event.target.value)}
          />
        </div>
        <section className="discount">
          <div>
            <h4>Base INSS</h4>
            <p>R$ {!baseINSS ? 0 : baseINSS}</p>
          </div>

          <div>
            <h4>Desconto Líquido</h4>
            <p className="d-inss">
              R$ {discountINSS.toFixed(2)}
              <span>({!percentualINSS ? 0 : percentualINSS.toFixed(2)}%)</span>
            </p>
          </div>

          <div>
            <h4>Base IRPF</h4>
            <p>R$ {baseIRPF.toFixed(2)}</p>
          </div>

          <div>
            <h4>Desconto IRPF</h4>
            <p className="d-irpf">
              R$ {discountIRPF.toFixed(2)}
              <span>({!percentualIRPF ? 0 : percentualIRPF.toFixed(2)}%)</span>
            </p>
          </div>
        </section>

        <div className="net-salary">
          <h4>Salário Líquido</h4>
          <p>
            R$ {netSalary.toFixed(2)}
            <span>
              (
              {!percentualSalarioLiquido
                ? 0
                : percentualSalarioLiquido.toFixed(2)}
              %)
            </span>
          </p>
        </div>

        <div className="progressive-bar">
          <div
            className="percentual-inss"
            style={{ width: `${percentualINSS}%` }}
          ></div>
          <div
            className="percentual-irpf"
            style={{ width: `${percentualIRPF}%` }}
          ></div>
          <div
            className="percentual-salrio-liquido"
            style={{ width: `${percentualSalarioLiquido}%` }}
          ></div>
        </div>
      </main>
    </div>
  );
}

export default App;
