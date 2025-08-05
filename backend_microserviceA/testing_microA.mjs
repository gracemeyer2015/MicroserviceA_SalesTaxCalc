
import fetch from 'node-fetch';


//sale 1 test with state that has sales tax
const order_1 = {
    total: 250.00,
    state: "Arizona"
}

const order_1_response = await fetch('http://localhost:3000/taxCalc',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(order_1)

})

const order_1_result = await order_1_response.json()
console.log("Order 1 Response", order_1_result)

//sale 2 test with state that has sales tax
const order_2 = {
    total: 32.50,
    state: "Utah"
}

const order_2_response = await fetch('http://localhost:3000/taxCalc',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(order_2)

})

const order_2_result = await order_2_response.json()
console.log("Order 2 Response", order_2_result)


//sale 3 test with state that does not have sales tax 
const order_3 = {
    total: 250.00,
    state: "Oregon"
}

const order_3_response = await fetch('http://localhost:3000/taxCalc',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(order_3)

})

const order_3_result = await order_3_response.json()
console.log("Order 3 Response", order_3_result)


// non state state test/ invalid state test
const order_4 = {
    total: 32.50,
    state: "Moontana"
}

const order_4_response = await fetch('http://localhost:3000/taxCalc',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(order_4)

})

const order_4_result = await order_4_response.json()
console.log("Order 4 Response", order_4_result)



    
