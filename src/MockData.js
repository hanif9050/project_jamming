const generateId=()=>Math.floor(Math.random()*10000);
const randomName=(count)=>{
    const letter="ABCDF GHIJK LMNOP QRSTU VWXYZ FDCBA KJIHG PONML UTSRQ ZYXJK LMNOP QRSTU ZYXWZ";
    // const word=Math.floor(Math.random()*letter.length)
    let name="";
    for (let i=0; i<count; i++){
        name += letter[Math.floor(Math.random()*letter.length)]
    }
    return name;
}
const song=()=>(
    {
        id:generateId(),
    name:randomName(30),
    artist:randomName(10),
    album:randomName(20),

    

}
)
const data= Array.from({length:5},song)
export default data;