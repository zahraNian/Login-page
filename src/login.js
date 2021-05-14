import styled from "styled-components"
import {Link} from "react-router-dom"
import {useState} from 'react'
import './App.css';


const Total =styled.div({
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
})
const Box = styled.div({
    width:'400px',
    height:'450px',
    color:'#fff',
    fontSize:'40px',
    backgroundColor:'#0d141e',
    borderRadius:'10px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    '&>h2':{
        marginTop:'20px'
    }
})
const UserBox = styled.div({
    color:'#fff',
    fontSize:'25px',
    width:'350px',
    marginTop:'25px'
})
    
   
const Input = styled.input({
    backgroundColor:'#0d141e',
    border:'none',
    borderBottom:'1px solid white',
    outline:'none',
    color:'#fff',
    marginTop:'50px',
    width:'100%'
})
const Lable = styled.label({
    position:'absolute',
    transition:'0.5s',
    width:'100%'

})
const Submit = styled.input({
    '&:hover':{
        animation:"btn-anim 5s infinite",
    },
    borderRadius:'15px',
    marginTop:'50px',
    width:'80px',
    height:'30px',
    backgroundColor:'#fff'
})



export default function Login(){
   const [user, setUser] = useState()
   const [pass, setPass] = useState()

    return(
        <Total>
            <Box>
                <h2>Login</h2>
                <form>
                    <UserBox >
                        <Lable >UserName</Lable>
                        <Input type='text' onChange={(e)=>{setUser(e.target.value)}} ></Input>   
                    </UserBox>
                    <UserBox>
                        <Lable>PassWord</Lable>
                        <Input type='text' onChange={(e)=>{setPass(e.target.value)}}></Input>
                    </UserBox>
                    <Submit type='submit'></Submit>
                </form>
            </Box>
        </Total>
    )
}