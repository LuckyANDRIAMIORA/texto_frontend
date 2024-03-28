import {
    Card,
    Typography
} from "@material-tailwind/react";

function ErrorPage(){
    return(
        <Card color="transparent"  shadow={false} className="w-full min-h-screen flex justify-center items-center">
            <Typography variant="h3">Oops! This email is already registered</Typography>
            <Typography variant="paragraph">Please sing in or try with another email</Typography>
            <a href="/login" className="underline">Click here to sing in</a>
            <a href="/register" className="underline">Click here to sing up</a>
        </Card>        
    )

}

export default ErrorPage;