import {ClipLoader} from "react-spinners";
import {CSSProperties} from "react";

const override: CSSProperties = {
 display: "block",
 margin: "0 auto",
 position:'absolute',
 left:'50%',
 top:'50%',
 translate:'translate(-50%, -50%)',
 borderColor: "white",
};


export const Spinner = ()=>{
 return <ClipLoader cssOverride={override} className='border-white' />
}