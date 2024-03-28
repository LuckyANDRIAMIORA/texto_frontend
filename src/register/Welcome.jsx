import {
    Card,
    Typography
} from "@material-tailwind/react";

function Welcome(){
    return(
        <Card color="transparent"  shadow={false} className="w-full min-h-screen flex justify-center items-center">
            <Typography variant="h3">Registration Successful!</Typography>
            <Typography variant="paragraph">Welcome !, Your account has been created</Typography>
            <a href="/login" className="underline">Click here to sing in</a>
        </Card>        
    )

}

export default Welcome;