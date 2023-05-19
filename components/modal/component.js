import React from "react";
import Icon from 'react-icons-kit'
import { x } from "react-icons-kit/feather";
import {
 ModalBlock,
 ModalBody,
 ModalClose,
 ModalContainer,
 ModalFooter,
 ModalHeader,
 ModalOverlay,
 ModalTitle,
} from "./modal.styles";

const Modal = ({ title, footer, children, active, hideModal }) => (
 <div>
 {active && (
 <ModalBlock>
 <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
 <ModalContainer>
 <ModalHeader>
 <ModalTitle>{title}</ModalTitle>
 <ModalClose onClick={() => hideModal()}><Icon icon={x} /></ModalClose>
 </ModalHeader>
 <ModalBody>{children}</ModalBody>
 <ModalFooter>{footer}</ModalFooter>
 </ModalContainer>
 </ModalBlock> 
 )}
 </div>
 );

 Modal.propType = {
    
 }
export default Modal;