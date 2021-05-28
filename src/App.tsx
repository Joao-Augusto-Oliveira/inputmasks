import { useCallback, useState } from "react";
import Input from "./components/Input";
import "./App.css";

 
interface Usuario {
  cep: string;
  price: number;
  cpf: string;
  cnpj: string;
  tel: string;
}

const App = () => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  const handleChange = useCallback((e:React.FormEvent<HTMLInputElement>) => {
   setUsuario({
        ...usuario,
        [e.currentTarget.name]: e.currentTarget.value
      });
    }, [usuario]);


  return (  
    <div className="container">
      <span>CEP</span>
      <Input 
        name="cep" 
        mask="cep" 
        onChange={handleChange}
      />

      <span>VALOR</span>
      <Input 
        name="currency" 
        mask="currency" 
        prefix='R$' 
        onChange={handleChange}
      />

      <span>CPF</span>
      <Input 
        name="cpf" 
        mask="cpf" 
        onChange={handleChange}
      />

      <span>CNPJ</span>
      <Input 
        name="cnpj" 
        mask="cnpj" 
        onChange={handleChange}
      />

      <span>TEL</span>
      <Input 
        name="tel" 
        mask="tel" 
        onChange={handleChange}
      />
      
      <button className="button" onClick={() => console.log(usuario) }>
        Salvar
      </button>

    </div>
  );
}

export default App;
