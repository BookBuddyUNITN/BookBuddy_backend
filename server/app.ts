import express from "express"
import authRouter from "./routes/authRoutes"
import libriRouter from "./routes/libriRoutes"
import cors from "cors"
import tokenChecker from "./middleware/tokenChecker"
import accordoRouter from "./routes/accordoRoutes"
import scambioRouter from "./routes/scambioRoutes"
import libreriaPersonaleRouter from "./routes/libreriaPersonaleRoutes"
import wishlistRoutes from "./routes/wishlistRouters"
import ricercaRouter from "./routes/ricercaRoutes"
import { recensioneRouter } from "./routes/recensioniRoutes"
import chatRouter from "./routes/chatRoutes"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/auth", authRouter)
app.use(tokenChecker);
app.use("/libro", libriRouter)
app.use("/wishlist", wishlistRoutes)
app.use("/accordo", accordoRouter)

app.use("/scambi", scambioRouter);
app.use("/libreriaPersonale", libreriaPersonaleRouter)
app.use("/ricerca", ricercaRouter);
app.use("/recensioni", recensioneRouter);
app.use("/chat", chatRouter);



export default app;
