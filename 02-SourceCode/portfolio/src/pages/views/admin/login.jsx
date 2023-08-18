import { useFetch } from "../../../utils/hooks/UseFetch";

function Login()
{
    const { data, isLoading, error } = useFetch(`http://localhost:8000/freelances`);

    const password = data?.password;
    console.log(data);
    return(
        <main>
            Login
            {password}
            {error}
        </main>
    )
}

export default Login;