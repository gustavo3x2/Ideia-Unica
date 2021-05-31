function Tempo () {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTSring();

    return(
        <div>
            {dynamicDateString} (dinâmico)
        </div>
    )
}
export default Tempo;