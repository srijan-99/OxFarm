import {useState} from 'react';

const SideBarMain =()=>{

    const[isOpen,setIsOpen]=useState(false);

    const Toggler =()=>{
        setIsOpen(!isOpen);
    }
    
    return(

        <>
        <Hamburger isToggler={Toggler}/>
        <Sidebar isOpen={isOpen} />


        </>
    )
}
export default SideBarMain