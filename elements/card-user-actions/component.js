import Icon from "react-icons-kit";
import react from "react/cjs/react.development";
import styled from "styled-components";
import {edit2,fileText} from 'react-icons-kit/feather'
import { filesO } from 'react-icons-kit/fa'


const CardActionsWraper = styled.div`
padding:8px 16px;
display: flex;
justify-content: flex-end;

`

const CardAction = styled.div`
margin-left:8px
color:#4C4C4E;
display: flex;

align-items: center;
cursor:pointer;
&:hover{
    .textAction {
        max-width:100px
        display: block;
    }
}
`

const CardActionText = styled.div`
max-width:0px;
overflow:hidden;
margin-right: 8px;
transition: all 1s;

> p {
    text-transform:capitalize;
    padding: 5px 8px;
    border-radius:25px
    background-color:#4c4c4e1f
}
` 


const CardUserActions = ({edit, projects})=>(
    <CardActionsWraper>
        <CardAction onClick={()=> edit()}>
            <CardActionText className="textAction"><p>editar</p></CardActionText>
            <Icon icon={edit2}/>
        </CardAction>
        <CardAction onClick={()=> projects()}>
            <CardActionText className="textAction"><p>proyectos</p></CardActionText>
            <Icon icon={filesO}/>

        </CardAction>

    </CardActionsWraper>
)

CardUserActions.prototype={

}

export default CardUserActions