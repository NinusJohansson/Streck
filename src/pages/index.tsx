import { type NextPage } from "next";

import { api } from "~/utils/api";
import { Button } from "~/components/Button";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {

  function handleClickohl(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    ohlbutton.mutate()
    stats.refetch
  }
  
  function handleClickcider(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  
    ciderbutton.mutate()
    stats.refetch
  }
  
  function handleClicksprit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  
    spritbutton.mutate()
    stats.refetch
  }

  const stats = api.stats.getStats.useQuery()
  const ohlbutton = api.button.ohlpress.useMutation({})
  const ciderbutton = api.ciderbutton.ciderpress.useMutation()
  const spritbutton = api.spritbutton.spritpress.useMutation()
  const session = useSession()
  const user = session.data?.user
  return (
    <>
      <header className="sticky flex justify-center top-0 z-10 border-b-2 border-b-fuchsia-600 bg-white mb-8">
      {user != null && (<>
        <h1 className="mb-2 px-4 text-lg">Dina Stats</h1>
        <p> Ohl  {stats.data?.ohl}  Cider  {stats.data?.cider}  Sprit  {stats.data?.sprit}</p>
        </>
      )}
      </header>
      <div className="flex justify-center">
        <form className="flex flex-col justify-center">
          <Button className="self-center" onClick={handleClickohl}>Øhl</Button>
          <Button className="self-center" onClick={handleClickcider}>Cider</Button>
          <Button className="self-center" onClick={handleClicksprit}>Sprit</Button>
        </form>
      </div>
    </>
  )

};

export default Home;