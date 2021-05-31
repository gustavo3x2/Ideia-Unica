import Link from 'next/link';

function Tempo () {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return(
        <div>
            {dynamicDateString} (dinâmico)
            <br />
            <Link href='/'>
                <a>Acessar página Home</a>
            </Link>
        </div>
    )
}
export default Tempo;