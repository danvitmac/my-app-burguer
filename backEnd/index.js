const express = require('express')
const uuid = require('uuid')
const cors = require('cors')

const port = 3001

const app = express()
app.use(express.json())
app.use(cors())

const firstMiddleware = (request, response, next) => {
    const { id } = request.params
    const index = newOrder.findIndex(costumer => costumer.id === id)
    if (index < 0) {
        return response.status(404).json({ error: "User not found" })
    }
    request.orderIndex = index
    request.orderID = id
    next()
}

const secondMiddleWare = (request, response, next) => {
    console.log(request.method)
    console.log(request.url)
    next()
}

const newOrder = []

app.get('/order', secondMiddleWare, (request, response) => {

    return response.json(newOrder)
})

app.post('/order', secondMiddleWare, (request, response) => {

    const { order, clientName } = request.body

    const costumer = { id: uuid.v4(), order, clientName }

    newOrder.push(costumer)

    return response.status(201).json(costumer)
})

app.put('/order/:id', firstMiddleware, secondMiddleWare, (request, response) => {
    const index = request.orderIndex
    const id = request.orderID
    const { order, clientName, price } = request.body

    const updatedOrder = { id, order, clientName, price, status: "Em preparação" }

    newOrder[index] = updatedOrder

    return response.json(updatedOrder)
})


app.delete('/order/:id', firstMiddleware, secondMiddleWare, (request, response) => {

    const index = request.orderIndex

    newOrder.splice(index, 1)

    return response.status(204).json()
})

app.get('/order/:id', firstMiddleware, secondMiddleWare, (request, response) => {
    const index = request.orderIndex
    return response.send(newOrder[index])
})

app.patch('/order/:id', firstMiddleware, secondMiddleWare, (request, response) => {
    const index = request.orderIndex
    const order = newOrder[index]
    order.status = "Pronto"
    return response.json(order)
})

app.listen(port, () => {
    console.log(`🚀🚀🚀 Server started on port ${port}`)
})