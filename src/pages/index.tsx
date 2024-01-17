import { type NextPage } from "next";

import { api } from "~/utils/api";
import { Button } from "~/components/Button";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { SideNav } from "~/components/SideNav";

import {priceList} from "priser";

const Home: NextPage = () => {
  const stats = api.stats.getStats.useQuery()
  const ohlbutton = api.button.ohlpress.useMutation()
  const ciderbutton = api.ciderbutton.ciderpress.useMutation()
  const spritbutton = api.spritbutton.spritpress.useMutation()
  const totalbutton = api.totalbutton.totalpress.useMutation()
  // const exeemplebutton = api.exemplebutton.exemplepress.useMutation() gå till server/api/routers/root.ts
  const session = useSession()
  const user = session.data?.user
  const ohldb = stats.data?.ohl
  const ciderdb = stats.data?.cider
  const spritdb = stats.data?.sprit
  //const exempledb = stats.data?.exemple
  const [ohl, ohlcount] = useState(0)
  const [cider, cidercount] = useState(0)
  const [sprit, spritcount] = useState(0)
  //const [exemple,exemlecount] = useState(0)

  function updatestat(): void {
    stats.refetch().then(() => {},() => {});
  }

  function handleSubmit(){
    //sätter alla variabler till 0 så man inte kan ta bort streck
    if (ohl < 0){
      ohlcount(0);
    }
    if (sprit < 0){
      spritcount(0);
    }
    if (cider < 0){
      cidercount(0);
    }
    // if (exemple < 0){ exemplecount(0);}
    //Ändrar värdet på variablen i databasen
    ohlbutton.mutate(ohl)
    ciderbutton.mutate(cider)
    spritbutton.mutate(sprit)
    var totalprice = ohl * priceList.priceList.ohlpris + cider * priceList.priceList.ciderpris + sprit * priceList.priceList.spritpris;
    totalbutton.mutate(totalprice)
    //exemplebutton.mutate(exemple)

    setTimeout(() => {
      updatestat()
    }, 500)
    //reset på alla variabler
    ohlcount(0);
    cidercount(0);
    spritcount(0);
    // exemplecount(0);
  }


  return (
    <>
      <header className="sticky flex justify-center top-0 z-10 border-b-2 border-slate-500 h-fill items-center gap-10 mx-4">
      <SideNav /> {/*ohldb,ciderdb,spritdb är variabler som innehåller statsen*/}
        {user != null && (<>
          <p className="">Dina Stats</p>
          <p className="gap-1 w-56"> Ohl  {ohldb}  Cider  {ciderdb}  Sprit  {spritdb}</p>
          <p className="gap-1 w-56">Ka$$a Ohl  {ohl}  Cider  {cider}  Sprit  {sprit}</p>
        </>
        )}
      </header>
      <div className="flex h-1/2" id="knappar">
        <div className="flex flex-col gap-8 w-1/3 h-full justify-center"> {/* w-1/3 behöver ändars till så många produkter man har. sprit, pepsi, öl och cider hade vart w-1/4 */}
          <Button onClick={()=> ohlcount(ohl - 1)} disabled={ohl === 0} className="px-8 w-2/3">-</Button>
          <Button onClick={()=> cidercount(cider -1)} disabled={cider === 0} className="px-8 w-2/3">-</Button>
          <Button onClick={()=> spritcount(sprit -1)} disabled={sprit === 0} className="px-8 w-2/3">-</Button>
          {/* <Button onClick={()=> exemplecount(exemple -1)} disabled={exemple === 0} className="px-8 w-2/3">-</Button>*/}
        </div>
        <div className="flex flex-col gap-8 w-1/3 h-full justify-center ">
        {/* Alla knappar man kan klicka på. Vill man lägga till fler så är de bara att kopiera in en till*/}
          <Button className="self-center px-8" >Øhl</Button>
          <Button className="self-center px-8" >Cider</Button>
          <Button className="self-center px-8" >Sprit</Button>
        {/* <Button className="self-center px-8" > Exemple </Button>*/}
        </div>
        <div className="flex flex-col gap-8 w-1/3 h-full justify-center"> {/* w-1/3 behöver ändars till så många produkter man har. sprit, pepsi, öl och cider hade vart w-1/4 */}
          <Button onClick={()=> ohlcount(ohl + 1)} className="px-8 w-2/3">+</Button>
          <Button onClick={()=> cidercount(cider + 1)} className="px-8 w-2/3">+</Button>
          <Button onClick={()=> spritcount(sprit +1)} className="px-8 w-2/3">+</Button>
          {/* <Button onClick={()=> exemplecount(exemple +1)} className="px-8 w-2/3">+</Button>*/}
        </div>
      </div>
      <div className="flex h-1/6 justify-center" id="subit">
        <Button onClick={handleSubmit} className="h-3/6 w-1/3 leading-none">Submit</Button>
      </div>

    </>
  )

};

export default Home;