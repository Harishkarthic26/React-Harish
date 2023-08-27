// import { useState } from "react"

// function Stateexample() {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true)
//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((res) => {
//                 setLoading(false)
//                 setData(res.data);
//             })

//             .catch(() => {
//                 setData([]);
//             })
//     }, [])
//     return (
//         <>
//             <h1>Server Call Example</h1>
//             {loading && <p>Loading...............</p>}
//         </>
//      data.map(ele => (
//             <Link to={`/contact/${ele.id}`} key={ele.id}>
//                 {ele.id} {ele.username}
//             </Link>
//         ))
//     )
// }
// export default Stateexample

