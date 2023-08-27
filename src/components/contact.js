import { useParams } from "react-router-dom"
function Contact () {
    const {id} = useParams()
    return (
        <div>
            <h1>WELCOME to Contact - {id}</h1>
        </div>
    )
}
export default Contact