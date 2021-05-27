import { InputHTMLAttributes, useCallback } from "react";
import { cep, currency, cnpj, cpf, tel } from "./masks";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    mask: 'cep' | 'currency' | 'cnpj' | 'cpf' | 'tel';
    prefix?: string ;
}

const Input: React.FC<InputProps> = ({ mask, prefix, ...props}) => {
    const handleKeyUp = useCallback((e:React.FormEvent<HTMLInputElement>) => {
            if(mask === 'cep') {
                cep(e);
            }

            if(mask === 'currency') {
                currency(e);
            }
            
            if(mask === 'cpf') {
                cpf(e);
            }
            
            if(mask === 'cnpj') {
                cnpj(e);
            } 
            
            if(mask === 'tel') {
                tel(e);
            } 

    }, [mask]);
        
    return(
        <div>
            {prefix  && <span>{prefix}</span>}
        <input {...props} onKeyUp={handleKeyUp} />
        </div>
    );
}

export default Input;