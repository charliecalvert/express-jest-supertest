import express from 'express'

const app = express()

app.get('/test', (req, res) => {
    res.send("🤗")
})

app.post('/users', async (req, res) => {

    res.sendStatus(200)
});

// app.listen(8080, () => console.log("listening on port 8080"))
export default app;