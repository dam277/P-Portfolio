import { Loader, LoaderWrapper } from "../../../resources/css/mainStyle";
import { LoginContainer, LoginBox, LoginTitle, LoginForm, LoginInput, LoginButton, MainContainer } from "../../../resources/css/admin/loginStyle";
import { useFetch } from "../../../utils/hooks/UseFetch";

function Login()
{
    const { data, isLoading, error } = useFetch(`http://localhost:8000/password`);

    const password = data?.password;
    console.log(data);
    return(
        <MainContainer>
            <LoginContainer>
                <LoginBox>
                    <LoginTitle>Connexion</LoginTitle>
                    <LoginForm>
                        <LoginInput type="password" placeholder="Mot de passe" disabled={isLoading}/>
                        <LoginButton type="submit">Se connecter</LoginButton>
                    </LoginForm>
                    <br />
                    {isLoading &&
                    (
                        <LoaderWrapper>
                            <Loader data-testid="loader" />
                        </LoaderWrapper>
                    )}
                </LoginBox>
            </LoginContainer>
        </MainContainer>
    )
}

export default Login;