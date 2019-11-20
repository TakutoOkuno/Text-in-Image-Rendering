import * as React from "react";
import {ChangeEvent} from "react";

interface Props {
    onChange: (e: ChangeEvent) => void;
    onClick: (e: React.MouseEvent) => void;
}

const CreateOrannyaro: React.FC<Props> = ({onChange, onClick}) => <>
    <input type="text" onChange={onChange}/>
    <input type="button" onClick={onClick} value="そんなやつおらんやろ！"/>
</>;

export default CreateOrannyaro;
