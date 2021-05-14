import styled from "styled-components"
import {Link} from "react-router-dom"
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import './App.css';
import csshake from 'csshake'


const Total =styled.div({
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
})
const Box = styled.div({
    width:'400px',
    height:'630px',
    color:'#fff',
    backgroundColor:'#0d141e',
    borderRadius:'10px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    '&>h2':{
        marginTop:'20px',
        fontSize:'35px'
    },
    '&>a':{
        marginTop:'25px',
        color:'#fff',
        textDecoration:'none',
        '&:hover':{
        }
    }
})
const UserBox = styled.div({
    color:'#fff',
    fontSize:'20px',
    width:'350px',
    marginTop:'30px'
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

    animation:"btn-anim 3s infinite",
    borderRadius:'10px',
    marginTop:'50px',
    width:'80px',
    height:'30px',
    backgroundColor:'#fff'
})



export default function CreateAccount(){
   const [user, setUser] = useState()
   const [pass, setPass] = useState()
   const [email, setEmail] = useState()
   const [repeatPass, setRepeatPass] = useState()
   const history = useHistory()

    const information ={
        User : user,
        Pass : pass,
        Email : email,
        RepeatPass : repeatPass
    }

    return(
        <Total>
            <Box>
                <h2>Create an account</h2>
                <form onSubmit={()=>{if(pass == repeatPass){localStorage.setItem(user, JSON.stringify(information));history.push('/login')} else{alert('password And repeatpassword are not same!')}  }}>
                    <UserBox >
                        <Lable >Email</Lable>
                        <Input type='text' onChange={(e)=>{setEmail(e.target.value)}} ></Input>   
                    </UserBox>
                    <UserBox >
                        <Lable >UserName</Lable>
                        <Input type='text' onChange={(e)=>{setUser(e.target.value)}} ></Input>   
                    </UserBox>
                    <UserBox>
                        <Lable>PassWord</Lable>
                        <Input type='password' onChange={(e)=>{setPass(e.target.value)}}></Input>
                    </UserBox>
                    <UserBox>
                        <Lable> Repeat PassWord</Lable>
                        <Input type='password' onChange={(e)=>{setRepeatPass(e.target.value)}}></Input>
                    </UserBox>
                    <Submit type='submit'></Submit>
                </form>
                <Link to='/login'> have an account?</Link>
            </Box>
        </Total>
    )
}