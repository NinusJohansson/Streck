import { type NextPage } from "next";

import { api } from "~/utils/api";
import { Button } from "~/components/Button";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {

  function updatestat(): void {
    stats.refetch().then(() => {},() => {});
    ohldb = stats.data?.ohl
    ciderdb = stats.data?.cider
    spritdb = stats.data?.sprit
  }

  function handleSubmit(){
    if (ohl < 0){
      ohl = 0
    }
    if (sprit < 0){
      sprit = 0
    }
    if (cider < 0){
      cider = 0
    }
    ohlbutton.mutate(ohl)
    ciderbutton.mutate(cider)
    spritbutton.mutate(sprit)
    setTimeout(() => {
      updatestat()
    }, 430)
    ohl = 0
    cider = 0
    sprit = 0
  }

  function ohladd(){
    ohl ++
  }
  function cideradd(){
    cider ++
  }
  function spritadd(){
    sprit ++
  }
  function ohlrev(){
      ohl = ohl - 1
  }
  function ciderrev(){
      cider = cider - 1
  }
  function spritrev(){
      sprit = sprit - 1
  }

  const stats = api.stats.getStats.useQuery()
  const ohlbutton = api.button.ohlpress.useMutation()
  const ciderbutton = api.ciderbutton.ciderpress.useMutation()
  const spritbutton = api.spritbutton.spritpress.useMutation()
  const session = useSession()
  const user = session.data?.user

  let ohldb = stats.data?.ohl
  let ciderdb = stats.data?.cider
  let spritdb = stats.data?.sprit
  let ohl = 0
  let cider = 0
  let sprit = 0

  
  return (
    <>
      <header className="sticky flex justify-center top-0 z-10 border-b-2 border-slate-500 h-fill items-center gap-10 mx-4 py-8">
        {user != null && (<>
          <p className="">Dina Stats</p>
          <p className="gap-1"> Ohl  {ohldb}  Cider  {ciderdb}  Sprit  {spritdb}</p>
        </>
        )}
      </header>


      <div className="flex h-4/6" id="knappar">
        <div className="flex flex-col gap-8 w-1/3 h-full justify-center">
          <Button onClick={ohladd} className="px-4 w-1/3">+</Button><Button onClick={cideradd} className="px-4 w-1/3">+</Button><Button onClick={spritadd} className="px-4 w-1/3">+</Button>
        </div>
        <div className="flex flex-col gap-8 w-1/3 h-full justify-center ">
        {/* <form className="flex flex-col justify-center w-4/6 h-full gap-8"> */}
          <Button className="self-center px-4" >Øhl</Button>
          <Button className="self-center px-4" >Cider</Button>
          <Button className="self-center px-4" >Sprit</Button>
        {/* </form> */}
        </div>
        <div className="flex flex-col gap-8 w-1/3 h-full justify-center">
          <Button onClick={ohlrev} className="px-4 w-1/3">-</Button><Button onClick={ciderrev} className="px-4 w-1/3">-</Button><Button onClick={spritrev} className="px-4 w-1/3">-</Button>
        </div>
      </div>
      <div className="flex h-1/6 justify-center" id="subit">
        <Button onClick={handleSubmit} className="h-3/6 w-1/3">Submit</Button>
      </div>

    </>
  )

};

export default Home;