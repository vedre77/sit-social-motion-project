import { useNavigate } from "react-router-dom"
import { useState } from "react";
import WhiteLogo from '../../Assets/logo_white.png';
import Apple from '../../Assets/apple.svg';
import Google from '../../Assets/google.svg';
import Facebook from '../../Assets/facebook_icon.svg';
import Instagram from '../../Assets/instagram_icon.svg';
import { InputContainerEmail, 
    SignInEmail, SubmitForm,
SignupContainer } from "./styles";
import { LogoContainer, LeftContent,
    ContainerLeft, IconContainer, 
    CopyRight, Container, 
    Icon, SignIn, 
    Input, PurpleOverlay } from "../Login/styles";

export const SignUp = () => {

    const navigate = useNavigate();
    let [sendEmail, setSendEmail] = useState();
    const [email, setEmail] = useState();
    const [username, setUserName] = useState();
    const [code, setCode] = useState();
    const [password, setPassword] = useState();
    const [password_repeat, setPassword_Repeat] = useState()
    const [first_name, setFirst_Name] = useState();
    const [last_name, setLast_Name] = useState();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }
    const handleCodeChange = (e) => {
        setCode(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handlePasswordRepeatChange = (e) => {
        setPassword_Repeat(e.target.value)
    }
    const handleFirstNameChange = (e) => {
        setFirst_Name(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLast_Name(e.target.value)
    }
    const handleSendEmail = (e) => {
        e.preventDefault();
        setSendEmail(true)
    }

    const handleSubmitEmail = (e) => {
        e.preventDefault();
        sendEmail = true;
        const url = "https://motion.propulsion-home.ch/backend/api/auth/registration/"
        const jsObjectBody = {
            email: email
        }
        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(jsObjectBody)
        }
        fetch(url, config)
            .then(response => response)
            .then(data => console.log(data))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail = true;
        const url = "https://motion.propulsion-home.ch/backend/api/auth/registration/validation/"
        const jsObjectBody = {
            email: email,
            username: username,
            code: code,
            password: password,
            password_repeat: password_repeat,
            first_name: first_name,
            last_name: last_name
        }
        const config = {
            method: "PATCH",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(jsObjectBody)
        }
        fetch(url, config)
            .then(response => response)
            .then(data => console.log(data))

    }

    return ( 
        <Container>
            <ContainerLeft>
                <PurpleOverlay />
                <LeftContent>
                    <LogoContainer>
                        <img src={WhiteLogo} alt="motion logo" />
                        <h2>Motion</h2>
                        <h4>Connect with friends and the world around you with Motion.</h4>
                        <img src={Apple} alt="apple store" />
                        <img src={Google} alt="google store" />
                    </LogoContainer>
                    <IconContainer>
                        <Icon src={Facebook} alt="facebook" />
                        <Icon src={Instagram} alt="instagram" />
                    </IconContainer>
                    <CopyRight>
                        <h4>copyright Motion 2018. All rights reserved.</h4>
                    </CopyRight>
                    </LeftContent>
            </ContainerLeft>
            <SignupContainer>
                { (!sendEmail) ?
                <SubmitForm onSubmit={handleSubmitEmail}>
                <InputContainerEmail>
                    <label>Email</label>
                    <Input type="text" name='email' value={email} onChange={handleEmailChange} />
                    <SignInEmail type={"submit"} onClick={handleSendEmail}>Next</SignInEmail>
                </InputContainerEmail>
                </SubmitForm> :
                <SubmitForm onSubmit={handleSubmit}>
                    <label>Email</label>
                    <Input type="text" name="email" value={email} onChange={handleEmailChange} />
                    <label>UserName</label>
                    <Input type="text" name="username" value={username} onChange={handleUserNameChange} />
                    <label>Code</label>
                    <Input type="text" name="code" value={code} onChange={handleCodeChange} />
                    <label>Password</label>
                    <Input type="password" name="password" value={password} onChange={handlePasswordChange} />
                    <label>Repeat Password</label>
                    <Input type="password" name="password_repeat" value={password_repeat} onChange={handlePasswordRepeatChange} />
                    <label>First Name</label>
                    <Input type="text" name="first_name" value={first_name} onChange={handleFirstNameChange} />
                    <label>Last Name</label>
                    <Input type="text" name="last_name" value={last_name} onChange={handleLastNameChange} />
                    <SignIn type={"submit"} onClick={() => navigate('/login')} >Complete</SignIn>
                </SubmitForm>}
            </SignupContainer>
        </Container>
    )
}