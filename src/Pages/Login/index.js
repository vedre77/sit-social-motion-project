import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, setUser, setRefreshToken } from '../../Redux/Slices/LoginSlice/';
import { InputContainer, LogoContainer, 
    ContainerLeft, ContainerRight, IconContainer, 
    SignInIcons, CopyRight, Container, 
    Icon, TopRight, Submit, SignUp, 
    SignIn, Input, PurpleOverlay, LeftContent } from "./styles";
import WhiteLogo from '../../Assets/logo_white.png';
import Apple from '../../Assets/apple.svg';
import Google from '../../Assets/google.svg';
import Facebook from '../../Assets/facebook_icon.svg';
import Instagram from '../../Assets/instagram_icon.svg';
import emptyAvatar from '../../Assets/emptyAvatar.png';
import Password from '../../Assets/password.svg';

const Login = () => {
    // Alex mail: alexanderhonegger@hotmail.com
    // Alex pass: PostmanAuth
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.addToken.token);
    // const refreshToken = useSelector((state) => state.addRefreshToken.refreshToken);

    useEffect(() => {   
        if (token) {
            navigate("/")
        }
    })
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "https://motion.propulsion-home.ch/backend/api/auth/token/"
        const requestBody = {
            email: email,
            password: password
        }
        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(requestBody)
        }

        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("token", data.access)
                dispatch(setToken(data.access))
                dispatch(setRefreshToken(data.refresh))
                dispatch(setUser(data.user))
            })
            .catch(error => console.log(error))
    }

    return (
        <Container>
            <ContainerLeft>
                <PurpleOverlay />
                <LeftContent>
                    <LogoContainer>
                        <img src={WhiteLogo} alt="motion" />
                        <h2>Motion</h2>
                        <h4>Connect with friends and the world around you with Motion.</h4>
                        <div className="store-icons">
                            <img src={Apple} alt="apple store" />
                            <img src={Google} alt="google store" className="google-store-icon" />
                        </div>
                    </LogoContainer>
                    <IconContainer>
                        <Icon src={Facebook} alt="facebook icon" />
                        <Icon src={Instagram} alt="instagram icon" />
                    </IconContainer>
                    <CopyRight>
                        <h4>© Motion 2018. All rights reserved.</h4>
                    </CopyRight>
                </LeftContent>
            </ContainerLeft>
            <ContainerRight>
                <TopRight>
                    <h4>Don't have an account?</h4>
                    <SignUp onClick={() => { navigate('/signup') }}>Sign Up</SignUp>
                </TopRight>
                <Submit onSubmit={handleSubmit}>
                    <h2>Sign In</h2>
                    <InputContainer>
                        <SignInIcons src={emptyAvatar} alt />
                        <Input type="text" name='email' value={email} onChange={handleEmailChange} />
                    </InputContainer>
                    <InputContainer>
                        <SignInIcons src={Password} alt />
                        <Input type="password" name="password" value={password} onChange={handlePasswordChange} />
                    </InputContainer>
                    <SignIn type={'submit'}>Sign In</SignIn>
                </Submit>
            </ContainerRight>
        </Container >
    )
}


export default Login;