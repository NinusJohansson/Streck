import { type NextPage } from "next";

import { api } from "~/utils/api";
import { Button } from "~/components/Button";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Home: NextPage = () => {
  
    const stats = api.stats.getStats.useQuery()
    const ohlbutton = api.button.ohlpress.useMutation()
    const ciderbutton = api.ciderbutton.ciderpress.useMutation()
    const spritbutton = api.spritbutton.spritpress.useMutation()
    const session = useSession()
    const user = session.data?.user
  
    let ohldb = stats.data?.ohl
    let ciderdb = stats.data?.cider
    let spritdb = stats.data?.sprit
    const [ohl, ohlcount] = useState(0)
    const [cider, cidercount] = useState(0)
    const [sprit, spritcount] = useState(0)

  function updatestat(): void {
    stats.refetch().then(() => {},() => {});
  }

  function handleSubmit(){
    if (ohl < 0){
      ohlcount(0);
    }
    if (sprit < 0){
      spritcount(0);
    }
    if (cider < 0){
      cidercount(0);
    }
    ohlbutton.mutate(ohl)
    ciderbutton.mutate(cider)
    spritbutton.mutate(sprit)
    setTimeout(() => {
      updatestat()
    }, 1000)
    ohlcount(0);
    cidercount(0);
    spritcount(0);
  }


  return (
    <>
      <header className="sticky flex justify-center top-0 z-10 border-b-2 border-slate-500 h-fill items-center gap-10 mx-4 py-8">
        {user != null && (<>
          <p className="">Dina Stats</p>
          <p className="gap-1"> Ohl  {ohldb}  Cider  {ciderdb}  Sprit  {spritdb}</p>
          <p className="gap-1">Ka$$a Ohl  {ohl}  Cider  {cider}  Sprit  {sprit}</p>
        </>
        )}
      </header>
      <div className="flex h-4/6" id="knappar">
        <div className="flex flex-col gap-8 w-1/3 h-full justify-center">
          <Button onClick={()=> ohlcount(ohl - 1)} disabled={ohl === 0} className="px-4 w-1/3">-</Button><Button onClick={()=> cidercount(cider -1)} disabled={cider === 0} className="px-4 w-1/3">-</Button><Button onClick={()=> spritcount(sprit -1)} disabled={sprit === 0} className="px-4 w-1/3">-</Button>
        </div>
        <div className="flex flex-col gap-8 w-1/3 h-full justify-center ">
        {/* <form className="flex flex-col justify-center w-4/6 h-full gap-8"> */}
          <Button className="self-center px-4" >Øhl</Button>
          <Button className="self-center px-4" >Cider</Button>
          <Button className="self-center px-4" >Sprit</Button>
        {/* </form> */}
        </div>
        <div className="flex flex-col gap-8 w-1/3 h-full justify-center">
          <Button onClick={()=> ohlcount(ohl + 1)} className="px-4 w-1/3">+</Button><Button onClick={()=> cidercount(cider + 1)} className="px-4 w-1/3">+</Button><Button onClick={()=> spritcount(sprit +1)} className="px-4 w-1/3">+</Button>
        </div>
      </div>
      <div className="flex h-1/6 justify-center" id="subit">
        <Button onClick={handleSubmit} className="h-3/6 w-1/3">Submit</Button>
      </div>

    </>
  )

};

export default Home;