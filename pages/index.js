import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home</h1> 
            <ul>
            <li><Link href='/sobre'><a>Acessar página sobre</a></Link></li>
            <li><Link href='/tempo'><a>Acessar página tempo</a></Link></li>
            </ul>
        </div>
    )         
}


export default Home;