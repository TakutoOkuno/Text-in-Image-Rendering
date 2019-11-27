import * as React from "react";
import {ChangeEvent} from "react";

interface Props {
    onChange: (e: ChangeEvent) => void;
    onClick: () => void;
    href: string;
}

const CreateOrannyaro: React.FC<Props> = ({onChange, onClick, href}) => <div>
    <input type="text" onChange={onChange}/>
    <a href={href === null ? undefined : href} download="おらんやろ.png"><input type="button" onClick={onClick} value="そんなやつおらんやろ！"/></a>
</div>;

export default CreateOrannyaro;
