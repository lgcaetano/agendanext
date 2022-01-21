import { parseBody } from "next/dist/server/api-utils"



const delay = (amount = 500)  => new Promise(resolve => setTimeout(resolve, amount))

function printObject(obj){
    for (let key in Object.keys(obj)){
        console.log(`${key}: ${obj[key]}`)
    }
    console.log("END")
}


export default async function (req, res) {
    console.log(req.body)
    res.json(req.body)
}