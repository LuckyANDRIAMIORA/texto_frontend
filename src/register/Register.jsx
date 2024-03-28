import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {
    Card,
    Input,
    Button,
    Typography

} from "@material-tailwind/react";

function Register() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const navigate = useNavigate()

    const saveData = (event) => {
        event.preventDefault();
        const user = { email: email, username: username, password: password }
        axios.post("http://localhost:3000/users", user, { headers: { "Content-Type": "Application/Json" } }).then((res) => {

            navigate('/welcome')

        }).catch((err) => {
            navigate('/error')
        })
    }

    return (
        <>
            <div className="w-full min-h-screen flex bg-gray-300 justify-center items-center">
                <Card color="white" shadow={true} className="w-1/3 p-5 m-5">
                    <Typography variant="h4">Sing up to texto</Typography>
                    <Typography className="mt-1">Enter your details to register</Typography>
                    <form className="mt-8">
                        <Typography variant="h6" className="mb-1">email: </Typography>
                        <Input
                            size="lg"
                            placeholder="example@gmail.com"
                            id="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /> <br />
                        <Typography variant="h6" className="mb-1">username: </Typography>
                        <Input
                            size="lg"
                            placeholder="Your Name"
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        /> <br />
                        <Typography variant="h6" className="mb-1">password: </Typography>
                        <Input
                            size="lg"
                            placeholder="password"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /> <br />
                        <Typography variant="h6" className="mb-1">confirm password: </Typography>
                        <Input
                            size="lg"
                            placeholder="password"
                            id="cPassword"
                            type="password"
                            value={cPassword}
                            onChange={(e) => setCPassword(e.target.value)}
                        /><br />
                        <div className="mt-8">
                            <Button onClick={saveData} className="bg-gray-800">Register</Button>
                        </div>
                    </form>

                </Card>
            </div>

        </>
    )

}

export default Register;