import {App}  from "./app";

const app = new App().app;

const PORT: number = parseInt(process.env.PORT as string, 10);

app.listen(PORT, ()=>{
    console.log(`connected on port = ${PORT}`)
})
