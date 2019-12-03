import * as React from "react";
import {ChangeEvent} from "react";

interface Props {
    onChange: (e: ChangeEvent) => void;
    onClick: () => void;
    href: string;
}

const InputUi: React.FC<Props> = ({onChange, onClick, href}) => <div>
    <input type="text" onChange={onChange} placeholder="文字を入力..."/>
    <button onClick={onClick}>Render Text</button>
    <a href={href === null ? undefined : href} download="おらんやろ.png"><button>Download as PNG</button></a>
    <style jsx>{`
        input {
            border: 1px solid #000;
            padding: 2px;
        }
        button {
            padding: 2px;
            margin-left: 4px;
            background-color: white;
            border: 1px solid #000;
            border-radius: 1px;
        }
    `}</style>
</div>;

export default InputUi;
