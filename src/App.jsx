import {
  Typography,
  Card,
  Button,
} from "@material-tailwind/react"

function App() {
  return (
    <>
      <Card color="transparent" shadow={false} className="w-full flex min-h-screen items-center justify-center">
        <Typography variant="h1">Welcome to Texto</Typography>
        <Typography variant="lead">Stay connected to each other</Typography>
        <div className="m-2">
          <a href="/register" className="m-2">
            <Button variant="outlined">Sing up</Button>
          </a>
          <a href="/login" className="m-2">
            <Button variant="outlined">Sing in</Button>
          </a>
        </div>
      </Card>
    </>
  )
}

export default App
