import { type NextPage } from "next";

import { api } from "~/utils/api";
import { Button } from "~/components/Button";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {

  function handleClickohl(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault()
    ohlbutton.mutate()
    setTimeout(() => {
      updatestat()
    }, 100)
  }

  function updatestat(): void {
    stats.refetch().then(() => {},() => {});
    ohl = stats.data?.ohl
    cider = stats.data?.cider
    sprit = stats.data?.sprit
  }

  function handleClickcider(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault()
    ciderbutton.mutate()
    setTimeout(() => {
      updatestat()
    }, 100)
  }

  function handleClicksprit(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault()
    spritbutton.mutate()
    setTimeout(() => {
      updatestat()
    }, 100)
  }

  const stats = api.stats.getStats.useQuery()
  const ohlbutton = api.button.ohlpress.useMutation({})
  const ciderbutton = api.ciderbutton.ciderpress.useMutation()
  const spritbutton = api.spritbutton.spritpress.useMutation()
  const session = useSession()
  const user = session.data?.user

  let ohl = stats.data?.ohl
  let cider = stats.data?.cider
  let sprit = stats.data?.sprit
  return (
    <>
      <header className="sticky flex justify-center top-0 z-10 border-b-2 border-slate-500 h-fill items-center gap-10 mx-4 py-8">
        {user != null && (<>
          <p className="">Dina Stats</p>
          <p className="gap-1"> Ohl  {ohl}  Cider  {cider}  Sprit  {sprit}</p>
        </>
        )}
      </header>


      <div className="flex justify-center h-screen">
        <form className="flex flex-col justify-center w-4/6 h-full gap-8">
          <Button className="self-center" onClick={handleClickohl}>Øhl</Button>
          <Button className="self-center" onClick={handleClickcider}>Cider</Button>
          <Button className="self-center" onClick={handleClicksprit}>Sprit</Button>
        </form>
      </div>
    </>
  )

};

export default Home;